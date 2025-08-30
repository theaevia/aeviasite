import { useEffect, useMemo, useState } from "react";

export default function WhatsAppWidget() {
  const phoneNumber = "+447448012556";
  const message = "Hi Aevia, I'd like to make an enquiry";
  const whatsappUrl = useMemo(
    () => `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`,
    [phoneNumber, message]
  );

  // Match the sticky bar’s reveal window (same as your sticky)
  const APPEAR_START = 220; // px where reveal starts
  const APPEAR_END = 420;   // px where reveal ends

  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );
  const [progress, setProgress] = useState(0); // 0..1
  const [active, setActive] = useState(false); // only animate when sticky is present

  // Helper: read current sticky offset (set by MobileStickyBookingBar)
  const getStickyOffset = () => {
    if (typeof window === "undefined") return 0;
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue("--sticky-bottom-offset")
      .trim();
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };

  // Track mobile breakpoint
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : mq.matches;
      setIsMobile(!!matches);
      if (!matches) {
        // Desktop: ensure no animation + default position
        setActive(false);
        setProgress(1);
        // Also reset translate via inline style next render by keeping progress=1
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

  // Scroll-driven reveal, but only if sticky is present
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

    const computeProgress = () => {
      const y = window.scrollY;
      const p = (y - APPEAR_START) / (APPEAR_END - APPEAR_START);
      return clamp(p, 0, 1);
    };

    const update = () => {
      const stickyOffset = getStickyOffset();
      const stickyPresent = isMobile && stickyOffset > 0;

      setActive(stickyPresent);

      // If sticky not present, keep FAB at original position (no translate)
      if (!stickyPresent) {
        setProgress(1); // translate 0%
      } else {
        setProgress(computeProgress());
      }
      ticking = false;
    };

    // initial
    update();

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Also watch root style mutations (sticky writes CSS var on <html>)
    const mo = new MutationObserver(onScroll);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mo.disconnect();
    };
  }, [isMobile, APPEAR_START, APPEAR_END]);

  // Map progress -> translate. No opacity changes (always 1).
  // If not active (sticky absent), translate becomes 0% because progress=1.
  const translate = active ? `${(1 - progress) * 120}%` : "0%";

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={
        isMobile
          ? ({
              ["--fab-translate" as any]: translate,
              opacity: 1,
              pointerEvents: "auto",
            } as React.CSSProperties)
          : ({
              // Desktop: ensure original position (no translate)
              ["--fab-translate" as any]: "0%",
              opacity: 1,
              pointerEvents: "auto",
            } as React.CSSProperties)
      }
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="whatsapp-icon"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </a>
  );
}
