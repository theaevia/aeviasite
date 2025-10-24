// WhatsAppWidget.tsx
// Mobile-only FAB that:
// - Reads --sticky-reveal-progress and --sticky-bottom-offset from <html>
// - Uses a tiny rAF-based lerp so it feels compositor-smooth on iOS
// - Stays in the corner when the sticky bar is absent (no opacity changes)

import { useEffect, useMemo, useRef, useState } from "react";

export default function WhatsAppWidget() {
  // ----- Config -----
  const LERP = 0.28; // 0..1 (higher = snappier)

  // ----- Static URL -----
  const phoneNumber = "+447448012556";
  const message = "Hi Aevia, I'd like to make an enquiry";
  const whatsappUrl = useMemo(
    () => `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`,
    [phoneNumber, message]
  );

  // ----- State/refs -----
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );
  const [isVisible, setIsVisible] = useState(false);
  const targetProgressRef = useRef(1);   // target (0..1)
  const currentProgressRef = useRef(1);  // smoothed (0..1)
  const rafRef = useRef<number | null>(null);

  // Helper: read CSS vars written by the sticky bar
  const readStickyVars = () => {
    if (typeof window === "undefined") return { offset: 0, progress: 0 };
    const styles = getComputedStyle(document.documentElement);
    const off = parseFloat(styles.getPropertyValue("--sticky-bottom-offset").trim()) || 0;
    const p = parseFloat(styles.getPropertyValue("--sticky-reveal-progress").trim());
    const progress = Number.isFinite(p) ? Math.max(0, Math.min(1, p)) : 0;
    return { offset: off, progress };
  };

  // Track mobile breakpoint
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : mq.matches;
      setIsMobile(!!matches);
      if (!matches) {
        // desktop: snap to original position
        targetProgressRef.current = 1;
        currentProgressRef.current = 1;
        document.documentElement.style.setProperty("--fab-translate", "0%");
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

  // Toggle visibility based on scroll position
  useEffect(() => {
    if (typeof window === "undefined") return;
    const threshold = 120;
    let ticking = false;

    const evaluate = () => {
      const shouldShow = window.scrollY > threshold;
      setIsVisible((prev) => (prev === shouldShow ? prev : shouldShow));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Compute the *target* progress from sticky progress (only when sticky present on mobile)
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

    const computeTarget = () => {
      if (!isMobile) return 1; // corner position
      const { offset, progress } = readStickyVars();
      const stickyPresent = offset > 0 || progress > 0;
      if (!stickyPresent) return 1; // corner when sticky absent
      // Use the sticky bar's progress directly (0..1)
      return clamp(progress, 0, 1);
    };

    const update = () => {
      targetProgressRef.current = computeTarget();
      ticking = false;
    };

    const onChange = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    // initial
    update();

    // Drive updates from scroll/resize + CSS var changes
    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange, { passive: true });
    const mo = new MutationObserver(onChange);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

    return () => {
      window.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
      mo.disconnect();
    };
  }, [isMobile]);

  // rAF-driven smoothing loop → writes --fab-translate as a %
  useEffect(() => {
    if (typeof window === "undefined") return;

    const step = () => {
      const cur = currentProgressRef.current;
      const tgt = targetProgressRef.current;
      const next = cur + (tgt - cur) * LERP;

      currentProgressRef.current = next;

      // Convert sticky progress (0..1) to our slide: 120% offscreen → 0% onscreen
      const translate = (1 - next) * 120; // %
      document.documentElement.style.setProperty("--fab-translate", `${translate}%`);

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // Reset on unmount
      document.documentElement.style.setProperty("--fab-translate", "0%");
    };
  }, [LERP]);

  return (
    <a
      href={whatsappUrl}
      className={`whatsapp-float ${isVisible ? "whatsapp-float--visible" : "whatsapp-float--hidden"}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
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
