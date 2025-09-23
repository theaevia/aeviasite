import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { treatmentCategories } from "@/data/treatments";
import { getHeroImageClassName, getHeroImageObjectPosition } from "@/lib/treatmentImageUtils";

// Assets
import profhiloHero from "@assets/hero_images/profhilo.jpg";
import skinBoosterDiagram from "@assets/diagrams/skin-booster-1.png";


export default function ProfhiloPage() {
  const skinBoosterCategory = treatmentCategories.find(cat => cat.slug === "skin-boosters");
  const profhiloTreatment = skinBoosterCategory?.treatments.find(t => t.slug === "profhilo");

  if (!profhiloTreatment) return null; // Handle case where treatment is not found

  return (
    <>
      <SEO title="Profhilo® Treatment | The Aevia" description="Remodel skin quality with Profhilo®, a unique hyaluronic acid injectable that improves elasticity, boosts collagen, and enhances firmness for a naturally refreshed look." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Profhilo® Treatment
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Remodels skin quality using hyaluronic acid to improve elasticity, boost collagen, and enhance firmness.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£300</span>
                  <span className="mx-2">•</span>
                  <span>45 mins</span>
                </div>
                <BookingButton
                  href={profhiloTreatment.bookingUrl}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Profhilo® Treatment
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
                      type="image/avif"
                      srcSet={`/assets/treatment_images/profhilo-320w.avif 320w, /assets/treatment_images/profhilo-640w.avif 640w, /assets/treatment_images/profhilo-1280w.avif 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`/assets/treatment_images/profhilo-320w.webp 320w, /assets/treatment_images/profhilo-640w.webp 640w, /assets/treatment_images/profhilo-1280w.webp 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src="/assets/treatment_images/profhilo-640w.webp"
                      alt="Profhilo treatment example"
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg ${getHeroImageClassName('profhilo')}`}
                      style={{ objectPosition: getHeroImageObjectPosition('profhilo') }}
                      loading="eager"
                      fetchPriority="high"
                      width={1280}
                      height={960}
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
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Why Choose Profhilo® at Aevia Skin?</h2>
              <div className="space-y-4 text-center">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Deep Hydration:</span>
                  <p className="text-base text-foreground/80 mb-0">Provides intense hydration from within, improving skin texture and tone.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Stimulates Collagen & Elastin:</span>
                  <p className="text-base text-foreground/80 mb-0">Promotes the production of four types of collagen and elastin for firmer, more youthful skin.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Natural-Looking Results:</span>
                  <p className="text-base text-foreground/80 mb-0">Achieve a refreshed, radiant look without altering your facial features.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Minimal Downtime:</span>
                  <p className="text-base text-foreground/80 mb-0">A quick and effective treatment with minimal downtime, allowing you to return to your daily activities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Profhilo® Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Profhilo® Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                Profhilo® is not a dermal filler, but a unique bio-remodelling treatment that works to improve skin quality from within. It contains a high concentration of hyaluronic acid, which is injected into specific points on the face.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                Once injected, Profhilo® spreads like honey under the skin, providing intense hydration and stimulating the production of collagen and elastin. This results in improved skin firmness, elasticity, and an overall rejuvenated appearance.
              </p>
              <p className="text-base text-foreground/80">
                The treatment involves two sessions spaced four weeks apart. Results are gradual, with optimal results visible after the second session. To maintain the results, a top-up session is recommended every six months.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src={skinBoosterDiagram}
                alt="Profhilo treatment diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">Deep hydration from Profhilo</p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Profhilo® treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">One Session</h2>
                <p className="text-foreground/70 mb-2 text-center">Single Profhilo® treatment</p>
                <span className="text-2xl font-bold text-primary mb-1">£300</span>
                <div className="h-6 mb-2"></div>
                <span className="text-muted-foreground text-sm mb-4">45min</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={profhiloTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book One Session</a>
                </Button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Two Sessions</h2>
                <p className="text-foreground/70 mb-2 text-center">Recommended course</p>
                <span className="text-2xl font-bold text-primary">£550</span>
                <p className="text-sm text-green-600 font-semibold mb-2">
                  <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '8px' }}>£600</span> (Save £50)
                </p>
                <span className="text-muted-foreground text-sm mb-4">45min per session</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={profhiloTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book Two Sessions</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Profhilo® Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Profhilo® Journey</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">A thorough consultation to discuss your skin concerns and determine if Profhilo® is right for you.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">BAP Technique</h3>
                <p className="text-sm text-foreground/70">The treatment involves injecting Profhilo® into five specific Bio-Aesthetic Points (BAPs) on each side of the face.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Quick & Comfortable</h3>
                <p className="text-sm text-foreground/70">The injections are quick and relatively painless, with minimal discomfort.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Second Session</h3>
                <p className="text-sm text-foreground/70">A second session is recommended four weeks after the first to achieve optimal results.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-semibold mb-2 text-center">Enjoy Radiant Skin</h3>
                <p className="text-sm text-foreground/70">Enjoy improved skin quality for up to six months. A top-up session is recommended to maintain your glow.</p>
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
                <p className="text-base text-foreground/80 mb-0">Results typically last for around six months. A top-up session is recommended to maintain the results.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is there any downtime?</div>
                <p className="text-base text-foreground/80 mb-0">There is minimal downtime. You may experience some redness, swelling, or small bumps at the injection sites, which usually resolve within 24 hours.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Will I look different?</div>
                <p className="text-base text-foreground/80 mb-0">Profhilo® provides a natural-looking improvement to your skin quality without altering your facial features.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How soon will I see results?</div>
                <p className="text-base text-foreground/80 mb-0">You may notice an immediate improvement in hydration, with optimal results visible after your second treatment.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Does it hurt?</div>
                <p className="text-base text-foreground/80 mb-0">The injections are quick and discomfort is minimal. We can use a topical numbing cream to enhance your comfort.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Who isn’t suitable?</div>
                <p className="text-base text-foreground/80 mb-0">Profhilo® is not suitable for pregnant or breastfeeding women, or those with certain medical conditions. A full consultation will be carried out to ensure suitability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Ready to reveal your inner glow?</h2>
            </div>
            <p className="text-base text-foreground/80 text-center mb-8">Book your Profhilo® consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/go/skin_consultations" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href={profhiloTreatment.bookingUrl} variant="secondary" className="w-full">
                  Book Profhilo® Treatment
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
