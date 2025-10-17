import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

export default function LacticAcidPeelComingSoonPage() {
  return (
    <>
      <SEO title="Lactic Acid Peel - Coming Soon | Aevia Skin" description="Lactic Acid Peel treatment is coming soon to Aevia Skin. Gentle exfoliation for sensitive skin." />
      <section className="hero-gradient py-12 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Lactic Acid <span className="text-primary">Peel</span></h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            Gentle AHA peel for hydration and mild exfoliation, suitable for sensitive skin, is coming soon to Aevia Skin.
          </p>
          <p className="text-2xl font-normal text-primary mb-8">
            Coming Soon to Aevia Skin!
          </p>
          <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full sm:w-auto">
            Book a Consultation to Learn More
          </BookingButton>
        </div>
      </section>
    </>
  );
}
