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
import skinBoosterDiagram from "@assets/diagrams/skin-booster-1.png";


export default function SunekosPage() {
  const skinBoosterCategory = treatmentCategories.find(cat => cat.slug === "skin-boosters");
  const sunekosTreatment = skinBoosterCategory?.treatments.find(t => t.slug === "sunekos");

  if (!sunekosTreatment) return null; // Handle case where treatment is not found

  return (
    <>
      <SEO title="Sunekos® Treatment | The Aevia" description="Stimulate collagen and elastin production with Sunekos®, a unique treatment that combines hyaluronic acid with amino acids to regenerate your skin from within." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Sunekos® Treatment
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Stimulates collagen and elastin production using a unique combination of hyaluronic acid and amino acids.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£250</span>
                  <span className="mx-2">•</span>
                  <span>45 mins</span>
                </div>
                <BookingButton
                  href={sunekosTreatment.bookingUrl}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Sunekos® Treatment
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
                      srcSet={`/assets/treatment_images/model-2-320w.avif 320w, /assets/treatment_images/model-2-640w.avif 640w, /assets/treatment_images/model-2-1280w.avif 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`/assets/treatment_images/model-2-320w.webp 320w, /assets/treatment_images/model-2-640w.webp 640w, /assets/treatment_images/model-2-1280w.webp 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src="/assets/treatment_images/model-2-640w.webp"
                      alt="Sunekos treatment example"
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg ${getHeroImageClassName('sunekos')}`}
                      style={{ objectPosition: getHeroImageObjectPosition('sunekos') }}
                      loading="eager"
                     
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
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Why Choose Sunekos® at Aevia Skin?</h2>
              <div className="space-y-4 text-center">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Regenerates the Skin:</span>
                  <p className="text-base text-foreground/80 mb-0">Provides the skin with the building blocks it needs to regenerate and repair itself.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Improves Fine Lines & Wrinkles:</span>
                  <p className="text-base text-foreground/80 mb-0">Effectively reduces the appearance of fine lines, wrinkles, and volume loss.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Versatile Treatment:</span>
                  <p className="text-base text-foreground/80 mb-0">Can be used to treat various areas, including the face, neck, décolletage, and hands.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Natural Results:</span>
                  <p className="text-base text-foreground/80 mb-0">Achieve a natural, youthful appearance by stimulating your skin's own regenerative processes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Sunekos® Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Sunekos® Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                Sunekos® is a unique injectable treatment that combines hyaluronic acid with a patented formula of amino acids. This powerful combination stimulates the production of collagen and elastin, helping to regenerate the skin from within.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                The treatment helps to restore volume, improve skin elasticity, and reduce the appearance of fine lines and wrinkles. It is particularly effective for treating tired, dull-looking skin and can be used on various areas of the face and body.
              </p>
              <p className="text-base text-foreground/80">
                A course of 3-4 treatments spaced 7-10 days apart is typically recommended for optimal results. Maintenance treatments may be required to sustain the effects.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src={skinBoosterDiagram}
                alt="Sunekos treatment diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">Skin regeneration from Sunekos</p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Sunekos® treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">One Session</h2>
                <p className="text-foreground/70 mb-2 text-center">Single Sunekos® treatment</p>
                <span className="text-2xl font-bold text-primary mb-1">£250</span>
                <div className="h-6 mb-2"></div>
                <span className="text-muted-foreground text-sm mb-4">45min</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={sunekosTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book One Session</a>
                </Button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Course of Four</h2>
                <p className="text-foreground/70 mb-2 text-center">Recommended course</p>
                <span className="text-2xl font-bold text-primary">£800</span>
                <p className="text-sm text-green-600 font-semibold mb-2">
                  <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '8px' }}>£1000</span> (Save £200)
                </p>
                <span className="text-muted-foreground text-sm mb-4">45min per session</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={sunekosTreatment.bookingUrl} target="_blank" rel="noopener noreferrer">Book Course of Four</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Sunekos® Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Sunekos® Journey</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">We'll discuss your skin concerns and goals to ensure Sunekos® is the right treatment for you.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Treatment Plan</h3>
                <p className="text-sm text-foreground/70">A personalised treatment plan will be created, typically involving a course of 3-4 sessions.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">The Treatment</h3>
                <p className="text-sm text-foreground/70">The treatment involves a series of small injections into the targeted areas.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Repeat Sessions</h3>
                <p className="text-sm text-foreground/70">Sessions are spaced 7-10 days apart to achieve the best possible results.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-semibold mb-2 text-center">Enjoy Revitalised Skin</h3>
                <p className="text-sm text-foreground/70">Enjoy healthier, more youthful-looking skin. Maintenance sessions may be recommended.</p>
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
                <p className="text-base text-foreground/80 mb-0">Results can last up to six months. A course of treatments is recommended for optimal, long-lasting results.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is there any downtime?</div>
                <p className="text-base text-foreground/80 mb-0">Downtime is minimal. You may experience some redness, swelling, or bruising at the injection sites, which typically resolves within a few days.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Will I look different?</div>
                <p className="text-base text-foreground/80 mb-0">Sunekos® provides a natural-looking improvement to your skin's health and appearance without altering your facial features.</p>
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
                <p className="text-base text-foreground/80 mb-0">Sunekos® is not suitable for pregnant or breastfeeding women, or those with certain medical conditions. A full consultation will be carried out to ensure suitability.</p>
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
            <p className="text-base text-foreground/80 text-center mb-8">Book your Sunekos® consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href={sunekosTreatment.bookingUrl} variant="secondary" className="w-full">
                  Book Sunekos® Treatment
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
