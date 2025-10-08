import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { treatmentCategories } from "@/data/treatments";
import { getHeroImageClassName, getHeroImageObjectPosition } from "@/lib/treatmentImageUtils";
import { SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

// Assets
import sculptraHeroJpg from "@assets/hero_images/sculptra.jpg";
import sculptraHeroJpg800 from "@assets/hero_images/sculptra-800w.jpg";
import sculptraHeroWebp from "@assets/hero_images/sculptra.webp";
import sculptraHeroWebp800 from "@assets/hero_images/sculptra-800w.webp";
// Removed injection sites diagram per request

export default function SculptraPage() {
  const bioVoluminisationCategory = treatmentCategories.find(cat => cat.slug === "bio-voluminisation");
  const sculptraTreatment = bioVoluminisationCategory?.treatments.find(t => t.slug === "sculptra");

  if (!sculptraTreatment) return null; // Handle case where treatment is not found

  return (
    <>
      <SEO title="Sculptra® Treatment | The Aevia" description="Restore facial volume and stimulate natural collagen production with Sculptra®, a unique biostimulant for gradual, long-lasting rejuvenation." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Sculptra® Treatment
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  A regenerative biostimulant that works deep within the skin to restore facial volume and support structure.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£550</span>
                  <span className="mx-2">•</span>
                  <span>1h</span>
                </div>
                <BookingButton
                  href={sculptraTreatment.bookingUrl}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Sculptra® Treatment
                </BookingButton>
                <div className="flex flex-col items-center lg:items-start gap-y-2 lg:gap-y-4 mt-8">
                  <IconBadge>
                    <Star className="w-5 h-5 text-primary" />
                    <span>5.0 Google Rating</span>
                  </IconBadge>
                  <IconBadge>
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span>Performed by GMC-Registered Doctor</span>
                  </IconBadge>
                  <IconBadge>
                    <Leaf className="w-5 h-5 text-primary" />
                    <span>Natural, Lasting Results</span>
                  </IconBadge>
                </div>
              </div>
              <div className="order-1 lg:order-2 w-full">
                <div className="relative w-full pb-[75%]">
                  <picture>
                    <source
                      srcSet={`${sculptraHeroWebp800} 800w, ${sculptraHeroWebp} 1600w`}
                      type="image/webp"
                    />
                    <img
                      src={sculptraHeroJpg}
                      srcSet={`${sculptraHeroJpg800} 800w, ${sculptraHeroJpg} 1600w`}
                      alt="Sculptra treatment example"
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg ${getHeroImageClassName('sculptra')}`}
                      style={{ objectPosition: getHeroImageObjectPosition('sculptra') }}
                      loading="eager"
                     
                      width="1600"
                      height="1200"
                      sizes="(max-width: 1024px) 100vw, 1600px"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose + Understanding (side-by-side on desktop) */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
            {/* Why Choose */}
            <div className="bg-secondary rounded-2xl p-8">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-black">Why Choose Sculptra® at Aevia Skin?</h2>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-primary">Natural Collagen Stimulation</span>
                  <p className="text-base text-foreground/80 mb-0">Stimulates your body's own collagen production for natural‑looking results.</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Gradual & Long‑Lasting</span>
                  <p className="text-base text-foreground/80 mb-0">Results appear gradually and can last for up to two years or more.</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Restores Volume</span>
                  <p className="text-base text-foreground/80 mb-0">Addresses the cause of facial ageing by restoring lost volume and improving skin quality.</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Subtle Rejuvenation</span>
                  <p className="text-base text-foreground/80 mb-0">Achieve a refreshed, youthful appearance without looking overfilled.</p>
                </div>
              </div>
            </div>

            {/* Understanding */}
            <div className="bg-white rounded-2xl p-8 border border-[#e0ddd9]">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-black">Understanding Sculptra® Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                Sculptra® is an <span className="font-semibold text-primary">FDA‑approved</span> injectable that helps gradually replace lost collagen. It contains <span className="font-semibold text-primary">poly‑L‑lactic acid (PLLA)</span>, a biocompatible synthetic substance that stimulates your skin's natural <span className="font-semibold">collagen production</span>.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                Unlike traditional fillers that provide immediate volume, Sculptra® works by stimulating your body's own collagen, leading to a <span className="font-semibold">gradual, natural‑looking</span> increase in skin thickness and volume over several months.
              </p>
              <p className="text-base text-foreground/80">
                A typical regimen consists of <span className="font-semibold">2–3 sessions</span>, spaced <span className="font-semibold">4–6 weeks</span> apart. Results can last for <span className="font-semibold">up to two years or more</span>, making it a long‑lasting option for facial rejuvenation.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Sculptra® treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">One Vial</h2>
                <p className="text-foreground/70 mb-2 text-center">Single Sculptra® vial</p>
                <span className="text-2xl font-normal text-primary mb-1">£550</span>
                <span className="text-muted-foreground text-sm mb-4">1h</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={sculptraTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book One Vial</a>
                </Button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Course of Two Vials</h2>
                <p className="text-foreground/70 mb-2 text-center">Recommended initial course</p>
                <span className="text-2xl font-normal text-primary">£1000</span>
                <p className="text-sm text-green-600 font-semibold mb-2">
                  <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '8px' }}>£1100</span> (Save £100)
                </p>
                <span className="text-muted-foreground text-sm mb-4">1h per session</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={sculptraTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book Course of Two</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Sculptra® Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Sculptra® Journey</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">A detailed consultation to assess your facial concerns and determine if Sculptra® is right for you.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Treatment Sessions</h3>
                <p className="text-sm text-foreground/70">Typically 2-3 sessions, spaced 4-6 weeks apart, are needed for optimal results.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Gradual Rejuvenation</h3>
                <p className="text-sm text-foreground/70">Collagen production is stimulated gradually, leading to natural-looking improvements over time.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Long-Lasting Results</h3>
                <p className="text-sm text-foreground/70">Enjoy the benefits of increased collagen for up to two years or more.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">5</div>
                <h3 className="font-semibold mb-2 text-center">Maintenance</h3>
                <p className="text-sm text-foreground/70">Occasional touch-up treatments may be recommended to maintain your refreshed appearance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ & CTA Section */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-10">
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How does Sculptra® work?</div>
                <p className="text-base text-foreground/80 mb-0">Sculptra® contains poly-L-lactic acid (PLLA), which stimulates your body's natural collagen production to restore facial volume and improve skin quality gradually.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How many sessions are needed?</div>
                <p className="text-base text-foreground/80 mb-0">Typically, 2-3 sessions are recommended, spaced 4-6 weeks apart, for optimal results.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How long do results last?</div>
                <p className="text-base text-foreground/80 mb-0">Results can last for up to two years or more, making it a long-lasting solution for facial rejuvenation.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is there any downtime?</div>
                <p className="text-base text-foreground/80 mb-0">You may experience some swelling, bruising, or tenderness at the injection sites, which typically resolves within a few days.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Will I look overfilled?</div>
                <p className="text-base text-foreground/80 mb-0">No, Sculptra® provides gradual and natural-looking results, enhancing your features without an artificial appearance.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Who isn’t suitable?</div>
                <p className="text-base text-foreground/80 mb-0">Sculptra® is not suitable for pregnant or breastfeeding women, or those with certain medical conditions. A full consultation will be carried out to ensure suitability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Ready to restore your youthful volume?</h2>
            </div>
            <p className="text-base text-foreground/80 text-center mb-8">Book your Sculptra® consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href={sculptraTreatment.bookingUrl} variant="secondary" className="w-full">
                  Book Sculptra® Treatment
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For returning customers</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
              Disclaimer: Individual results vary. A face‑to‑face consultation is required to assess suitability. Full safety information is provided pre‑treatment.
            </p>
          </div>
        </section>
      </TreatmentLayout>
    </>
  );
}
