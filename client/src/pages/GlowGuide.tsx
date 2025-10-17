import { useEffect } from "react";
import { BookingButton } from "@/components/BookingButton";
import SEO from "@/components/SEO";
import { SKIN_VIRTUAL_URL, SQUARE_SITE_URL } from "@/lib/bookingUrls";
import { asset } from "@/lib/assets";

const GLOW_GUIDE_URL = asset("/assets/pdfs/aevia-glow-guide.pdf");
const CONSULTATION_URL = `${SKIN_VIRTUAL_URL}?utm_source=glow_guide&utm_medium=pdf&utm_campaign=glow_guide_sep25`;
const PACKAGES_URL = `${SQUARE_SITE_URL}?utm_source=glow_guide&utm_medium=pdf&utm_campaign=glow_guide_sep25`;

export default function GlowGuide() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = GLOW_GUIDE_URL;
      link.download = "aevia-glow-guide.pdf";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="The Aevia Glow Guide"
        description="Download the doctor-led Glow Guide and start your personalised skin transformation journey."
      />
      <main className="min-h-screen bg-white text-foreground">
        <section className="px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Your Glow Guide is <span className="text-primary">ready</span></h1>
            <p className="text-lg text-foreground/70">Doctor-led routine you can start tonight (2-page PDF).</p>
            <p className="text-sm text-foreground/60">Your download will start automatically. If not, tap below.</p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2">
              <BookingButton href={GLOW_GUIDE_URL} className="font-semibold">
                Download the Glow Guide (PDF • 1.4 MB)
              </BookingButton>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/70">
                <span className="inline-flex items-center gap-1">
                  <span className="text-primary">•</span> 3-step routine
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="text-primary">•</span> Works with any budget
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="text-primary">•</span> Takes 5 minutes
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-muted">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-serif font-semibold">Next steps for brighter skin</h2>
              <p className="text-foreground/70">Build momentum while the insight is fresh.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <BookingButton href={CONSULTATION_URL} variant="secondary" className="font-semibold">
                Book your free 15-min skin consult
              </BookingButton>
              <a
                href={PACKAGES_URL}
                target="_blank"
                rel="noopener"
                className="text-sm text-foreground/70 underline underline-offset-4 hover:text-primary"
              >
                See treatment packages & pricing
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-secondary px-8 py-10 text-center shadow-sm">
            <blockquote className="text-xl font-serif leading-relaxed text-foreground/90">
              “My skin has never felt this good. The Glow Guide gave me clarity, the consultation gave me momentum.”
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/50">— R, Events Manager</p>
          </div>
          <div className="mt-12 mx-auto max-w-4xl text-center text-sm text-foreground/60">
            <p>The Aevia · Excellence and longevity in skin and mind · King&apos;s Cross, London</p>
          </div>
        </section>
      </main>
    </>
  );
}
