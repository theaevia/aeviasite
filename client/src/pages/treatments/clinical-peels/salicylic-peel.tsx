import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

export default function SalicylicPeelComingSoonPage() {
  return (
    <>
      <SEO title="Salicylic Peel - Coming Soon | Aevia Skin" description="Salicylic Peel treatment is coming soon to Aevia Skin. Ideal for oily, acne-prone skin." />
      <section className="hero-gradient py-12 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Salicylic <span className="text-primary">Peel</span></h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            BHA peel ideal for oily, acne-prone skin, helping unclog pores and reduce breakouts, is coming soon to Aevia Skin.
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
