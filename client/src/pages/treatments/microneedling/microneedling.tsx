import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";

export default function MicroneedlingComingSoonPage() {
  return (
    <>
      <SEO title="Microneedling - Coming Soon | Aevia Skin" description="Microneedling treatment is coming soon to Aevia Skin. Stay tuned for advanced skin rejuvenation." />
      <section className="hero-gradient py-12 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Microneedling
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            Advanced microneedling for texture, scars, and overall skin rejuvenation is coming soon to Aevia Skin.
          </p>
          <p className="text-2xl font-bold text-primary mb-8">
            Coming Soon to Aevia Skin!
          </p>
          <BookingButton href="https://app.squareup.com/appointments/buyer/widget/flwwunfdy1hm72/L1TKSRMBS3N9H" variant="primary" className="w-full sm:w-auto">
            Book a Consultation to Learn More
          </BookingButton>
        </div>
      </section>
    </>
  );
}
