import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp } from "lucide-react";

const FRESHA_SERVICES_URL =
  "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&share&pId=2507365";

type Mode = "new" | "returning";

/**
 * Scroll-revealed Mobile Sticky Bar
 * - Mobile only (<= 767px)
 * - Progressively reveals between APPEAR_START..APPEAR_END as user scrolls
 * - Dismissible (sessionStorage)
 * - Persists mode (localStorage)
 * - Offsets WhatsApp FAB by just a few pixels above the visible portion of the bar
 */
export default function MobileStickyBookingBar() {
  // CONFIG: tune how far the user must scroll for reveal
  const APPEAR_START = 220; // px from top where reveal starts
  const APPEAR_END = 420;   // px where bar is fully revealed
  const GAP = 50;            // px gap between bar and WhatsApp FAB

  const [mode, setMode] = useState<Mode>("new");
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );
  const [progress, setProgress] = useState(0); // 0..1 reveal progress

  const barRef = useRef<HTMLDivElement | null>(null);

  const setOffset = (px: number) =>
    document.documentElement.style.setProperty("--sticky-bottom-offset", `${px}px`);

  // Load persisted states
  useEffect(() => {
    const saved = (localStorage.getItem("aevia-booking-mode") as Mode | null) ?? "new";
    setMode(saved);
    const dismissedSaved = sessionStorage.getItem("aevia-sticky-hidden") === "1";
    if (dismissedSaved) setDismissed(true);
  }, []);

  // Track mobile breakpoint
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");

    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : mq.matches;
      setIsMobile(!!matches);
      if (!matches) {
        // desktop → ensure everything resets
        setOffset(0);
      }
    };

    onChange(mq);
    if ("addEventListener" in mq) mq.addEventListener("change", onChange as any);
    // @ts-ignore older Safari
    else if ("addListener" in mq) mq.addListener(onChange);

    return () => {
      if ("removeEventListener" in mq) mq.removeEventListener("change", onChange as any);
      // @ts-ignore older Safari
      else if ("removeListener" in mq) mq.removeListener(onChange);
    };
  }, []);

  // Scroll-driven progress (0..1) with rAF to keep it smooth
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

    const calcProgress = () => {
      if (!isMobile || dismissed) return 0;
      const y = window.scrollY;
      const p = (y - APPEAR_START) / (APPEAR_END - APPEAR_START);
      return clamp(p, 0, 1);
    };

    const update = () => {
      setProgress(calcProgress());
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    // initial
    setProgress(calcProgress());

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true }); // recalc on orientation change
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile, dismissed, APPEAR_START, APPEAR_END]);

  // Persist mode choice
  const setAndPersist = (next: Mode) => {
    setMode(next);
    localStorage.setItem("aevia-booking-mode", next);
  };

  // Offset WhatsApp FAB by only the *visible* portion of the bar
  useEffect(() => {
    if (!isMobile || dismissed || progress <= 0) {
      setOffset(0);
      return;
    }

    const barEl = barRef.current;
    if (!barEl) {
      setOffset(0);
      return;
    }

    const fabEl = document.querySelector<HTMLElement>(".whatsapp-float");
    const measureAndSet = () => {
      const totalBar = barEl.offsetHeight || 0;
      const visibleBar = Math.round(totalBar * progress);
      const fabH = fabEl?.offsetHeight ?? 56;
      const computed = Math.max(GAP, visibleBar - fabH + GAP);
      setOffset(computed);
    };

    measureAndSet();

    // Observe size changes (fonts, dynamic content, orientation)
    const roBar = new ResizeObserver(measureAndSet);
    roBar.observe(barEl);
    let roFab: ResizeObserver | null = null;
    if (fabEl) {
      roFab = new ResizeObserver(measureAndSet);
      roFab.observe(fabEl);
    }

    const onResize = () => measureAndSet();
    window.addEventListener("resize", onResize);

    return () => {
      roBar.disconnect();
      roFab?.disconnect();
      window.removeEventListener("resize", onResize);
      setOffset(0);
    };
  }, [isMobile, dismissed, progress]);

  // Dismissed chip (only after reveal begins)
  if (dismissed && isMobile && progress > 0) {
    return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto w-fit rounded-full shadow-md border border-muted-foreground/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 px-3 py-1.5">
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem("aevia-sticky-hidden");
              setDismissed(false);
            }}
            className="inline-flex items-center gap-1 text-sm text-primary hover:opacity-90"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            Show again
          </button>
        </div>
      </div>
    );
  }

  // Don’t mount at all on desktop or when nothing is visible
  if (!isMobile || progress <= 0 || dismissed) return null;

  // Map progress to transform/opacity; keep it interactive once > ~30% visible
  const translateY = (1 - progress) * 100; // 100% (off) → 0% (on)
  const opacity = Math.min(1, Math.max(0.1, progress)); // slight fade in
  const interactive = progress > 0.3;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div
        ref={barRef}
        className="mx-auto max-w-3xl rounded-2xl shadow-lg border border-muted-foreground/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 p-3 flex items-center justify-between relative will-change-transform"
        style={{
          transform: `translateY(${translateY}%)`,
          opacity,
          transition: "transform 0s, opacity 0s", // animation driven by scroll, not time
          pointerEvents: interactive ? "auto" : "none",
        }}
        aria-hidden={!interactive}
      >
        {/* Hide handle (top-center) */}
        <button
          type="button"
          aria-label="Hide quick booking bar"
          onClick={() => {
            sessionStorage.setItem("aevia-sticky-hidden", "1");
            setDismissed(true);
          }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 border border-muted-foreground/20 shadow hover:bg-white"
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Mode toggle */}
        <div
          role="tablist"
          aria-label="Choose booking type"
          className="flex gap-1 p-1 rounded-full border border-muted-foreground/10 bg-white/70"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "new"}
            onClick={() => setAndPersist("new")}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              mode === "new"
                ? "bg-primary text-primary-foreground shadow"
                : "text-primary hover:bg-primary/10"
            }`}
          >
            New
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "returning"}
            onClick={() => setAndPersist("returning")}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              mode === "returning"
                ? "bg-primary text-primary-foreground shadow"
                : "text-primary hover:bg-primary/10"
            }`}
          >
            Returning
          </button>
        </div>

        {/* Primary action */}
        {mode === "new" ? (
          <Link
            href="/consultations/skin"
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium border-2 border-primary hover:bg-white hover:text-primary smooth-transition"
            aria-label="Book a skin consultation"
          >
            Book Consultation
          </Link>
        ) : (
          <a
            href={FRESHA_SERVICES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium border-2 border-primary hover:bg-white hover:text-primary smooth-transition"
            aria-label="Book a treatment"
          >
            Book Treatment
          </a>
        )}
      </div>
    </div>
  );
}
