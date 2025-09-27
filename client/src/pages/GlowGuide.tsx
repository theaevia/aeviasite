import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const GLOW_GUIDE_URL = "/assets/pdfs/aevia-skin-glow-guide.pdf";
const CONSULTATION_URL = "/go/skin_virtual?utm_source=glow_guide&utm_medium=pdf&utm_campaign=glow_guide_sep25";
const PACKAGES_URL = "/go/square_site?utm_source=glow_guide&utm_medium=pdf&utm_campaign=glow_guide_sep25";

export default function GlowGuide() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = GLOW_GUIDE_URL;
      link.download = "aevia-skin-glow-guide.pdf";
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
        title="The Aevia Skin Glow Guide"
        description="Download the doctor-led Glow Guide and start your personalised skin transformation journey."
      />
      <main className="min-h-screen bg-white text-foreground">
        <section className="px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold">Your Glow Guide is ready</h1>
            <p className="text-lg text-foreground/70">Doctor-led routine. Real-world results.</p>
            <p className="text-sm text-foreground/60">Your download will start automatically. If not, tap below.</p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2">
              <Button asChild size="lg" className="px-6 py-3 text-base font-semibold">
                <a href={GLOW_GUIDE_URL} target="_blank" rel="noopener" download>
                  Download the Glow Guide (PDF)
                </a>
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/70">
                <span className="inline-flex items-center gap-1">
                  <span className="text-primary">✓</span> Doctor-written routine
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="text-primary">✓</span> Works with any budget
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="text-primary">✓</span> Quick & concise
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-6 py-3 text-base font-semibold">
                <a href={CONSULTATION_URL} target="_blank" rel="noopener">
                  Book your free 15-min virtual skin consult
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 py-3 text-base">
                <a href={PACKAGES_URL} target="_blank" rel="noopener">
                  See treatment packages & pricing
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-secondary px-8 py-10 text-center shadow-sm">
            <blockquote className="text-xl font-serif leading-relaxed text-foreground/90">
              “My skin has never felt this confident. The Glow Guide gave me clarity, the consultation gave me momentum.”
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/50">— Rosie, Founder & Public Speaker</p>
          </div>
        </section>

        <footer className="px-6 pb-16">
          <div className="mx-auto max-w-4xl text-center text-sm text-foreground/60">
            <p>The Aevia · Excellence and longevity in skin and mind · King&apos;s Cross, London</p>
          </div>
        </footer>
      </main>
    </>
  );
}
