import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";

import neckLiftDiagram from "@assets/diagrams/platysmal-bands-1.png";
const neckHero = "/assets/treatment_images/neck-2-640w.webp";
import neckLiftBeforeAfter from "@assets/before_afters/neck-lift-placeholder.png";

export default function NeckLiftPage() {
  return (
    <>
      <SEO title="Neck Lift (Nefertiti) | The Aevia" description="Defined jawline and smoother neck contours using targeted lower-face injections - without surgery. Doctor-led, natural results in King's Cross, London at Aevia Skin." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Neck Lift (Nefertiti)
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Get rid of "turkey neck" and smooth your neck contours using targeted lower-face injections.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£270</span>
                  <span className="mx-2">•</span>
                  <span>45 mins</span>
                </div>
                <BookingButton
                  href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23160548&share&pId=2507365"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Neck Lift
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
                      srcSet={`${neckHero.replace('-640w.webp','-320w.avif')} 320w, ${neckHero.replace('-640w.webp','-640w.avif')} 640w, ${neckHero.replace('-640w.webp','-1280w.avif')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`${neckHero.replace('-640w.webp','-320w.webp')} 320w, ${neckHero.replace('-640w.webp','-640w.webp')} 640w, ${neckHero.replace('-640w.webp','-1280w.webp')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src={neckHero}
                      alt="Nefertiti Neck Lift treatment example"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
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
                  <source srcSet={neckLiftBeforeAfter} type="image/webp" />
                  <img
                    src={neckLiftBeforeAfter}
                    alt="Neck lift (Nefertiti) before and after"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                    width="1600"
                    height="1200"
                    sizes="(max-width: 1024px) 100vw, 1600px"
                  />
                </picture>
              </div>
              <p className="text-muted-foreground text-center text-sm mt-4">The Nefertiti Neck Lift procedure.</p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Why Choose Neck Lift at Aevia Skin?</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Defined Jawline:</span>
                  <p className="text-base text-foreground/80 mb-0">Achieve a more sculpted and V-shaped facial contour.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Smoother Neck Contours:</span>
                  <p className="text-base text-foreground/80 mb-0">Reduce the appearance of neck bands and sagging skin.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Non-Surgical Solution:</span>
                  <p className="text-base text-foreground/80 mb-0">A minimally invasive alternative to surgical neck lift.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Quick & Convenient:</span>
                  <p className="text-base text-foreground/80 mb-0">Treatment typically takes less than an hour with minimal downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Neck Lift Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Neck Lift Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                The Nefertiti Neck Lift is a non-surgical procedure that uses muscle relaxants to redefine the jawline and neck. It targets the platysma muscles, which are thin, sheet-like muscles in the neck that can pull down the jawline and create vertical bands.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                By strategically injecting muscle relaxants into these muscles along the jawline and into the platysmal bands, their downward pull is relaxed. This allows the upper facial muscles to lift the jawline, creating a smoother, more defined contour and reducing the appearance of neck wrinkles and sagging.
              </p>
              <p className="text-base text-foreground/80">
                The procedure is quick, with minimal discomfort and no downtime. Results typically become visible within 1-2 weeks and last between 3 to 5 months. It's an excellent option for those seeking a non-surgical way to achieve a more youthful and elegant neck and jawline profile.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src={neckLiftDiagram}
                alt="Neck Lift diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">The platysma muscles</p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Neck Lift treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Neck Lift</h2>
                <p className="text-foreground/70 mb-2 text-center">For a softer, tighter-looking neck.</p>
                <span className="text-2xl font-bold text-primary mb-1">£270</span>
                <span className="text-muted-foreground text-sm mb-4">45min</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23160548&share&pId=2507365" target="_blank" rel="noopener noreferrer">Book Neck Lift</a>
                </Button>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Lower-Face Contour Duo</h2>
                <p className="text-foreground/70 mb-2 text-center">Pair with Masseter Reduction</p>
                <div className="flex items-baseline justify-center my-1">
                  <span className="text-2xl font-bold text-primary">£520</span>
                  <span className="text-xl font-medium text-gray-500 line-through ml-2">£570</span>
                </div>
                <p className="text-sm font-semibold text-green-600 mb-2">Save £50</p>
                <span className="text-muted-foreground text-sm mb-4">1h</span>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1640076&share&pId=2507365" target="_blank" rel="noopener noreferrer">Book Lower-Face Contour Duo</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Neck Lift Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Neck Lift Journey</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">Evaluate your neck and jawline, and discuss your aesthetic goals.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Strategic Injections</h3>
                <p className="text-sm text-foreground/70">Subtle muscle relaxant is precisely injected along the jawline and into neck bands.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Gradual Improvement</h3>
                <p className="text-sm text-foreground/70">Results become visible over 1-2 weeks as muscles relax and contours refine.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Follow-Up</h3>
                <p className="text-sm text-foreground/70">A review appointment to ensure desired outcomes are achieved.</p>
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
                <div className="mb-2 font-semibold text-base text-primary">What is a Nefertiti Neck Lift?</div>
                <p className="text-base text-foreground/80 mb-0">It's a non-surgical procedure using botulinum toxin to relax muscles in the lower face and neck, creating a lifting and contouring effect.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How long do results last?</div>
                <p className="text-base text-foreground/80 mb-0">Typically 3-5 months, depending on individual factors.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is it painful?</div>
                <p className="text-base text-foreground/80 mb-0">Discomfort is minimal, similar to other anti-wrinkle injections.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Can it be combined with other treatments?</div>
                <p className="text-base text-foreground/80 mb-0">Yes, it can be combined with jawline slimming for enhanced results, which can be booked under the treatment "Lower Face Contour Duo".</p>
              </div>
              <div className="mb-2 font-semibold text-base text-primary">Why is it called a Nefertiti Neck Lift?</div>
              <div>
                <p className="text-base text-foreground/80 mb-0">The treatment is named after the Egyptian Queen Nefertiti, who was well known for her sculpted neck and jawline.</p>
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
            <p className="text-base text-foreground/80 text-center mb-8">Book your Neck Lift consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/consultations?type=skin" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23160548&share&pId=2507365" variant="secondary" className="w-full">
                  Book Neck Lift Treatment
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
