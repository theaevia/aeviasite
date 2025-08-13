import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";

export default function GlycolicPeelComingSoonPage() {
  return (
    <>
      <SEO title="Glycolic Peel - Coming Soon | Aevia Skin" description="Glycolic Peel treatment is coming soon to Aevia Skin. Brighten and renew your skin." />
      <section className="hero-gradient py-12 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Glycolic Peel
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            AHA peel for brightening, smoothing, and improving skin texture is coming soon to Aevia Skin.
          </p>
          <p className="text-2xl font-bold text-primary mb-8">
            Coming Soon to Aevia Skin!
          </p>
          <BookingButton href="/consultations?type=skin" variant="primary" className="w-full sm:w-auto">
            Book a Consultation to Learn More
          </BookingButton>
        </div>
      </section>
    </>
  );
}
