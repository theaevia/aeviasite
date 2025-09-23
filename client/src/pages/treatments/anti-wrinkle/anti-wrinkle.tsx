import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BookingButton } from "@/components/BookingButton";
import { treatmentCategories } from "@/data/treatments";
import { getHeroImageClassName, getHeroImageObjectPosition } from "@/lib/treatmentImageUtils";

// Assets
const antiWrinkleDiagram = "/assets/diagrams/anti-wrinkle-1-640w.webp";
const antiWrinkleHero = "/assets/treatment_images/anti-wrinkle-hero-640w.webp";
// Use optimized public before/after variants


export default function AntiWrinklePage() {
  const [baIndex, setBaIndex] = useState(0);
  const baItems = [
    {
      src: "/assets/before_afters/forehead-640w.webp",
      alt: "Anti-wrinkle forehead treatment before and after",
      caption: "Forehead lines softened two weeks after treatment.",
    },
    {
      src: "/assets/before_afters/frown-640w.webp",
      alt: "Anti-wrinkle frown lines treatment before and after",
      caption: "Frown lines softened two weeks after treatment.",
    },
  ];
  const antiWrinkleCategory = treatmentCategories.find(cat => cat.slug === "anti-wrinkle");
  const oneAreaTreatment = antiWrinkleCategory?.treatments.find(t => t.name.includes("One Area"));

  if (!oneAreaTreatment) return null; // Handle case where treatment is not found

  return (
    <>
      <SEO title="Anti-Wrinkle Treatment (Forehead, Frown & Crow's Feet) | The Aevia" description="Targeted muscle-relaxing treatments to soften lines and improve facial tension. Doctor-led, natural results in King's Cross, London at Aevia Skin." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Forehead, Frown & Crow's Feet Treatment
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Targeted muscle-relaxing treatment to soften lines and improve facial tension.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>From £160</span>
                  <span className="mx-2">•</span>
                  <span>30 mins</span>
                </div>
                <BookingButton
                  href="/go/three_areas"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Anti-Wrinkle Treatment
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
                      srcSet={`${antiWrinkleHero.replace('-640w.webp','-320w.avif')} 320w, ${antiWrinkleHero.replace('-640w.webp','-640w.avif')} 640w, ${antiWrinkleHero.replace('-640w.webp','-1280w.avif')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`${antiWrinkleHero.replace('-640w.webp','-320w.webp')} 320w, ${antiWrinkleHero.replace('-640w.webp','-640w.webp')} 640w, ${antiWrinkleHero.replace('-640w.webp','-1280w.webp')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src={antiWrinkleHero}
                      alt="Anti-wrinkle treatment example"
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg ${getHeroImageClassName('anti-wrinkle')}`}
                      style={{ objectPosition: getHeroImageObjectPosition('anti-wrinkle') }}
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
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="flex flex-col items-center order-2 md:order-1">
              <div className="relative w-full pb-[75%]">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${baItems[baIndex].src.replace('-640w.webp','-640w.avif')} 640w, ${baItems[baIndex].src.replace('-640w.webp','-1280w.avif')} 1280w`}
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${baItems[baIndex].src.replace('-640w.webp','-640w.webp')} 640w, ${baItems[baIndex].src.replace('-640w.webp','-1280w.webp')} 1280w`}
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                  <img
                    src={baItems[baIndex].src}
                    alt={baItems[baIndex].alt}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                </picture>
                {/* Arrows */}
                {baItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 shadow bg-white/80 hover:bg-white"
                      onClick={() => setBaIndex((i) => (i - 1 + baItems.length) % baItems.length)}
                    >
                      <ChevronLeft className="w-4 h-4 text-accent" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 shadow bg-white/80 hover:bg-white"
                      onClick={() => setBaIndex((i) => (i + 1) % baItems.length)}
                    >
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </button>
                  </>
                )}
              </div>
              <p className="text-muted-foreground text-center text-sm mt-4">{baItems[baIndex].caption}</p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Why Choose Anti-Wrinkle at Aevia Skin?</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Smooth Away Lines:</span>
                  <p className="text-base text-foreground/80 mb-0">Effectively reduces the appearance of fine lines and wrinkles.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Prevent Future Wrinkles:</span>
                  <p className="text-base text-foreground/80 mb-0">Regular treatments can help prevent new lines from forming.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Natural-Looking Results:</span>
                  <p className="text-base text-foreground/80 mb-0">Achieve a refreshed look without appearing "frozen" or unnatural.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Quick & Convenient:</span>
                  <p className="text-base text-foreground/80 mb-0">Treatments are fast with minimal downtime, fitting easily into your schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Anti-Wrinkle Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Anti-Wrinkle Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                Anti-wrinkle injections use a purified protein to relax specific facial muscles responsible for dynamic wrinkles. These are the lines that appear when you make expressions like frowning, smiling, or raising your eyebrows.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                When injected into these muscles, the protein temporarily blocks nerve signals, preventing the muscle from contracting fully. This smooths out existing wrinkles and prevents them from deepening. Common treatment areas include the forehead lines, frown lines (between the eyebrows), and crow's feet (around the eyes).
              </p>
              <p className="text-base text-foreground/80">
                The procedure is quick, typically taking 15-30 minutes, with minimal discomfort and no downtime. Results usually become visible within 3-5 days, with the full effect appearing at 2 weeks. The effects typically last 3-4 months, after which repeat treatments are recommended to maintain a smooth, refreshed appearance.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${antiWrinkleDiagram.replace('-640w.webp','-640w.avif')} 640w, ${antiWrinkleDiagram.replace('-640w.webp','-1280w.avif')} 1280w`}
                  sizes="(max-width: 640px) 100vw, 640px"
                />
                <source
                  type="image/webp"
                  srcSet={`${antiWrinkleDiagram.replace('-640w.webp','-640w.webp')} 640w, ${antiWrinkleDiagram.replace('-640w.webp','-1280w.webp')} 1280w`}
                  sizes="(max-width: 640px) 100vw, 640px"
                />
                <img
                  src={antiWrinkleDiagram}
                  alt="Anti-wrinkle treatment diagram"
                  loading="lazy"
                  width={640}
                  height={480}
                  className="w-full h-auto"
                />
              </picture>
              <p className="text-muted-foreground text-sm mt-2">Forehead, frown and crow's feet lines</p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for anti-wrinkle treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">One Area</h2>
                <p className="text-foreground/70 mb-2 text-center">Forehead, Frown or Crow's Feet</p>
                <span className="text-2xl font-bold text-primary mb-1">£160</span>
                <span className="text-muted-foreground text-sm mb-4">30min</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/go/three_areas" target="_blank" rel="noopener noreferrer">Book One Area</a>
                </Button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Two Areas</h2>
                <p className="text-foreground/70 mb-2 text-center">Forehead, Frown or Crow's Feet</p>
                <span className="text-2xl font-bold text-primary mb-1">£220</span>
                <span className="text-muted-foreground text-sm mb-4">45min</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/go/three_areas" target="_blank" rel="noopener noreferrer">Book Two Areas</a>
                </Button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Three Areas</h2>
                <p className="text-foreground/70 mb-2 text-center">Forehead, Frown & Crow's Feet</p>
                <span className="text-2xl font-bold text-primary mb-1">£260</span>
                <span className="text-muted-foreground text-sm mb-4">45min</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/go/three_areas" target="_blank" rel="noopener noreferrer">Book Three Areas</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Anti-Wrinkle Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Anti-Wrinkle Journey</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">Virtual or in-clinic: discuss goals, medical history, and suitability.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Precision Mapping & Dosing</h3>
                <p className="text-sm text-foreground/70">Every face is unique, we mark injection points tailored to your anatomy.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Quick Treatment</h3>
                <p className="text-sm text-foreground/70">6–10 tiny injections, numbing cream applied. Most clients compare it to a brief scratch.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">After‑Care & Review</h3>
                <p className="text-sm text-foreground/70">Return to daily life immediately; peak results by day 14. Complimentary check-up via Whatsapp at two weeks.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-semibold mb-2 text-center">Enjoy Your Fresh Look</h3>
                <p className="text-sm text-foreground/70">Enjoy wrinkle-free confidence for 3-4 months. We'll send a friendly reminder when it's time for your next refresh.</p>
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
                <p className="text-base text-foreground/80 mb-0">Results typically last 3-4 months, depending on individual metabolism and the area treated.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is there any downtime?</div>
                <p className="text-base text-foreground/80 mb-0">There is generally minimal downtime with this treatment - you can return to work and social plans right away. You may experience slight redness or swelling for a few hours post-treatment. This may be slightly more pronounced if you have a lot of treatment in one area or are taking blood-thinning medication.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Will I look frozen?</div>
                <p className="text-base text-foreground/80 mb-0">No. We aim to achieve natural, minimal results - only you should realise you've had any treatment..</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How soon will I see results?</div>
                <p className="text-base text-foreground/80 mb-0">You'll notice softening from 3-5 days, with full effect at 2 weeks.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Does it hurt?</div>
                <p className="text-base text-foreground/80 mb-0">Most clients rate discomfort as very low. We use ultra‑fine needles and effective numbing cream to reduce any pain.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Who isn’t suitable?</div>
                <p className="text-base text-foreground/80 mb-0">Pregnant or breastfeeding individuals, those with certain neuromuscular disorders, and those with certain allergies. We undertake a medical consultation to help prevent any reactions.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Where is Aevia Skin located?</div>
                <p className="text-base text-foreground/80 mb-0">Aevia Skin is conveniently located in King’s Cross, Central London, right next to the underground station.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Ready to feel confidently refreshed?</h2>
            </div>
            <p className="text-base text-foreground/80 text-center mb-8">Book your anti-wrinkle consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/go/skin_consultations" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/go/three_areas" variant="secondary" className="w-full">
                  Book Anti-Wrinkle Treatment
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
