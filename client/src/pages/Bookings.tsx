import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";

const SQUARE_SRC =
  "https://square.site/appointments/buyer/widget/jwhtw6lg3uleti/L1TKSRMBS3N9H.js";

export default function Bookings(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "failed">("idle");
  const [lastError, setLastError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent double injection on SPA route changes
    if (document.querySelector(`script[src="${SQUARE_SRC}"]`) ) {
      setStatus("loaded"); // maybe already injected elsewhere
      return;
    }

    setStatus("loading");

    const script = document.createElement("script");
    script.src = SQUARE_SRC;
    script.async = true;
    script.id = "square-appointments-script";

    const onLoad = () => {
      console.info("[Square] script loaded");
      setStatus("loaded");

      // Give the widget a moment to inject its UI
      setTimeout(() => {
        if (container && container.childElementCount === 0) {
          // If nothing injected after load, we'll attempt a retry with cache-bust once
          console.warn("[Square] script loaded but no DOM injected into container");
          setLastError("loaded-but-no-dom");
          attemptRetry();
        }
      }, 1200);
    };

    const onError = (ev: any) => {
      console.error("[Square] script failed to load", ev);
      setStatus("failed");
      setLastError("network-or-blocked");
    };

    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);

    // Clean up previous contents (avoid duplicates)
    container.innerHTML = "";
    container.appendChild(script);

    // Retry helper (one retry only)
    let retried = false;
    function attemptRetry() {
      if (retried) return;
      retried = true;

      // remove original script if present
      const existing = document.getElementById("square-appointments-script");
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);

      const retryScript = document.createElement("script");
      // cache bust to avoid stale cached file
      retryScript.src = `${SQUARE_SRC}?_=${Date.now()}`;
      retryScript.async = true;
      retryScript.id = "square-appointments-script-retry";

      retryScript.addEventListener("load", () => {
        console.info("[Square] retry script loaded");
        setStatus("loaded");
        setTimeout(() => {
          if (container && container.childElementCount === 0) {
            console.error("[Square] retry loaded but widget still did not inject DOM");
            setStatus("failed");
            setLastError("loaded-no-dom-after-retry");
          }
        }, 1200);
      });
      retryScript.addEventListener("error", (e) => {
        console.error("[Square] retry failed", e);
        setStatus("failed");
        setLastError("retry-failed");
      });

      container.appendChild(retryScript);
    }

    return () => {
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);
      // don't forcibly clear container — the widget may keep its DOM if user navigates back
    };
  }, []);

  return (
    <>
      <SEO title="Bookings | The Aevia" description="To book our treatments directly." />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">Bookings</h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">For booking our services directly.</p>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-neutral">
          <div
            id="square-appointments-container"
            ref={containerRef}
            style={{ minHeight: 200 }}
            aria-live="polite"
          >
            {/* The Square widget should inject its UI here */}
            {status === "loading" && <p>Loading booking widget…</p>}
            {status === "failed" && (
              <div className="p-4 bg-red-50 rounded">
                <p className="font-medium">Booking widget didn’t load.</p>
                <p className="text-sm text-muted-foreground">Fallback: <a href="https://square.site/book/jwhtw6lg3uleti" target="_blank" rel="noreferrer">open bookings in a new tab</a></p>
                <p className="text-xs mt-2">Debug: {lastError}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
