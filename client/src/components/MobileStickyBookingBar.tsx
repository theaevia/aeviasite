import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp } from "lucide-react";

const FRESHA_SERVICES_URL =
  "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&share&pId=2507365";

type Mode = "new" | "returning";

export default function MobileStickyBookingBar() {
  const [mode, setMode] = useState<Mode>("new");
  const [dismissed, setDismissed] = useState(false);
  const [thresholdMet, setThresholdMet] = useState(false);
  const threshRef = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem("aevia-booking-mode") as Mode | null;
    if (saved) setMode(saved);
    const dismissedSaved = sessionStorage.getItem("aevia-sticky-hidden") === "1";
    if (dismissedSaved) setDismissed(true);
  }, []);

  // Track when the user has scrolled enough to show the sticky UI (bar or chip)
  useEffect(() => {
    let ticking = false;
    const handle = () => {
      const next = window.scrollY > 300;
      if (next !== threshRef.current) {
        threshRef.current = next;
        setThresholdMet(next);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(handle);
    };
    // Initial check
    threshRef.current = window.scrollY > 300;
    setThresholdMet(threshRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setAndPersist = (next: Mode) => {
    setMode(next);
    localStorage.setItem("aevia-booking-mode", next);
  };

  // When dismissed, show a small 'Show again' chip instead of the full bar, but only past the threshold
  if (dismissed && thresholdMet) {
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
  if (!thresholdMet) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-3xl rounded-2xl shadow-lg border border-muted-foreground/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 p-3 flex items-center justify-between relative">
        {/* Hide button */}
        <button
          type="button"
          aria-label="Hide quick booking bar"
          onClick={() => {
            sessionStorage.setItem("aevia-sticky-hidden", "1");
            setDismissed(true);
          }}
          className="absolute -top-3 left-3 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/90 border border-muted-foreground/20 shadow hover:bg-white"
        >
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
        {/* Toggle */}
        <div className="flex gap-1 p-1 rounded-full border border-muted-foreground/10 bg-white/70">
          <button
            type="button"
            onClick={() => setAndPersist("new")}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              mode === "new" ? "bg-primary text-primary-foreground shadow" : "text-primary hover:bg-primary/10"
            }`}
          >
            New
          </button>
          <button
            type="button"
            onClick={() => setAndPersist("returning")}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              mode === "returning" ? "bg-primary text-primary-foreground shadow" : "text-primary hover:bg-primary/10"
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
          >
            Book Consultation
          </Link>
        ) : (
          <a
            href={FRESHA_SERVICES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium border-2 border-primary hover:bg-white hover:text-primary smooth-transition"
          >
            Book Treatment
          </a>
        )}
      </div>
    </div>
  );
}
