
import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { treatmentCategories } from "@/data/treatments";

// Assets
import fullFaceRegenerationHero from "@assets/hero_images/royalty-free-skin4.webp";

export default function FullFaceRegenerationPage() {
  const polynucleotidesCategory = treatmentCategories.find(cat => cat.slug === "polynucleotides");
  const fullFaceRegenerationTreatment = polynucleotidesCategory?.treatments.find(t => t.slug === "full-face-regeneration");

  if (!fullFaceRegenerationTreatment) return null;

  return (
    <>
      <SEO title="Full Face Regeneration (Plinest) | The Aevia" description="DNA-based injectable to improve skin density, elasticity and hydration. Suitable for early signs of ageing or post-inflammatory texture issues." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Full Face Regeneration (Plinest)
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  DNA-based injectable to improve skin density, elasticity and hydration.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>From £300</span>
                  <span className="mx-2">•</span>
                  <span>45 mins</span>
                </div>
                <BookingButton
                  href={fullFaceRegenerationTreatment.bookingUrl}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Full Face Regeneration
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
                      srcSet={fullFaceRegenerationHero}
                      type="image/webp"
                    />
                    <img
                      src={fullFaceRegenerationHero}
                      alt="Full Face Regeneration treatment example"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                      loading="eager"
                      fetchPriority="high"
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
        
        {/* Benefits Section */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12 items-center justify-items-center px-6">
            <div className="order-1 mx-auto max-w-3xl text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Why Choose Full Face Regeneration at Aevia Skin?</h2>
              <div className="space-y-4 text-center">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Improves Skin Density:</span>
                  <p className="text-base text-foreground/80 mb-0">Restores volume and density to ageing skin, improving overall skin health.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Enhances Elasticity:</span>
                  <p className="text-base text-foreground/80 mb-0">Stimulates the production of collagen and elastin for firmer, more elastic skin.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Deep Hydration:</span>
                  <p className="text-base text-foreground/80 mb-0">Provides intense hydration, leaving your skin looking and feeling refreshed.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Natural & Safe:</span>
                  <p className="text-base text-foreground/80 mb-0">A biocompatible and biodegradable treatment that works in harmony with your body.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Full Face Regeneration Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Full Face Regeneration</h2>
              <p className="text-base text-foreground/80 mb-4">
                Plinest is a polynucleotide-based injectable treatment that works to regenerate the skin on a cellular level. It is suitable for treating the entire face, neck, and décolletage.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                The treatment helps to improve skin quality, reduce the signs of ageing, and restore a youthful appearance. It is particularly effective for treating sun-damaged skin, fine lines and wrinkles, and loss of volume.
              </p>
              <p className="text-base text-foreground/80">
                A course of 3-4 treatments spaced 2-3 weeks apart is recommended for optimal results. Maintenance treatments may be required to sustain the effects.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src="/assets/diagrams/full-face-regeneration-diagram.png"
                alt="Full Face Regeneration treatment diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">Plinest injection technique</p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Full Face Regeneration treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">One Session</h2>
                <p className="text-foreground/70 mb-2 text-center">Single Plinest treatment</p>
                <span className="text-2xl font-bold text-primary mb-1">£300</span>
                <div className="h-6 mb-2"></div>
                <span className="text-muted-foreground text-sm mb-4">45min</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={fullFaceRegenerationTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book One Session</a>
                </Button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Course of Three</h2>
                <p className="text-foreground/70 mb-2 text-center">Recommended initial course</p>
                <span className="text-2xl font-bold text-primary">£800</span>
                <p className="text-sm text-green-600 font-semibold mb-2">
                  <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '8px' }}>£900</span> (Save £100)
                </p>
                <span className="text-muted-foreground text-sm mb-4">45min per session</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={fullFaceRegenerationTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book Course of Three</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Full Face Regeneration Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Full Face Regeneration Journey</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">A comprehensive consultation to discuss your skin concerns and create a personalised treatment plan.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Treatment Plan</h3>
                <p className="text-sm text-foreground/70">A personalised treatment plan will be created, typically involving a course of 3-4 sessions.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">The Treatment</h3>
                <p className="text-sm text-foreground/70">The treatment involves a series of small injections into the targeted areas of the face.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Repeat Sessions</h3>
                <p className="text-sm text-foreground/70">Sessions are spaced 2-3 weeks apart to achieve the best possible results.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-semibold mb-2 text-center">Enjoy Rejuvenated Skin</h3>
                <p className="text-sm text-foreground/70">Enjoy firmer, more hydrated, and youthful-looking skin. Maintenance sessions may be recommended.</p>
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
                <div className="mb-2 font-semibold text-base text-primary">How long do results last?</div>
                <p className="text-base text-foreground/80 mb-0">Results can last up to a year. A course of treatments is recommended for optimal, long-lasting results.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is there any downtime?</div>
                <p className="text-base text-foreground/80 mb-0">Downtime is minimal. You may experience some redness, swelling, or bruising at the injection sites, which typically resolves within a few days.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Will I look different?</div>
                <p className="text-base text-foreground/80 mb-0">Plinest provides a natural-looking improvement to your skin's health and appearance without altering your facial features.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How soon will I see results?</div>
                <p className="text-base text-foreground/80 mb-0">You may see some initial improvement after the first session, with optimal results visible after completing the recommended course of treatments.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Does it hurt?</div>
                <p className="text-base text-foreground/80 mb-0">Discomfort is minimal. We use fine needles and can apply a topical numbing cream to ensure your comfort during the treatment.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Who isn’t suitable?</div>
                <p className="text-base text-foreground/80 mb-0">Plinest is not suitable for pregnant or breastfeeding women, or those with certain medical conditions. A full consultation will be carried out to ensure suitability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Ready to regenerate your skin?</h2>
            </div>
            <p className="text-base text-foreground/80 text-center mb-8">Book your Full Face Regeneration consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/consultations?type=skin" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href={fullFaceRegenerationTreatment.bookingUrl} variant="secondary" className="w-full">
                  Book Full Face Regeneration
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For returning customers</span>
              </div>
            </div>
          </div>
        </section>
      </TreatmentLayout>
    </>
  );
}
