import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";


import smileLiftDiagram from "@assets/diagrams/smile-lift-1.png";
const smileHero = "/assets/treatment_images/dao-640w.webp";
import { getHeroImageClassName, getHeroImageObjectPosition } from "@/lib/treatmentImageUtils";

export default function SmileLiftPage() {
  return (
    <>
      <SEO title="Smile Lift (DAO Treatment) | The Aevia" description="Subtly lift the corners of the mouth to soften downturned smile lines. Doctor-led, natural results in King's Cross, London at Aevia Skin." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Smile Lift
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Reverse that “sad mouth” look with a gentle lift to the downturned corners of your mouth.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£120</span>
                  <span className="mx-2">•</span>
                  <span>30 mins</span>
                </div>
                <BookingButton
                  href="https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/UHWQSUZOAETSA4MYBHWGU3QR"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Smile Lift
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
                      srcSet={`${smileHero.replace('-640w.webp','-320w.avif')} 320w, ${smileHero.replace('-640w.webp','-640w.avif')} 640w, ${smileHero.replace('-640w.webp','-1280w.avif')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`${smileHero.replace('-640w.webp','-320w.webp')} 320w, ${smileHero.replace('-640w.webp','-640w.webp')} 640w, ${smileHero.replace('-640w.webp','-1280w.webp')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src={smileHero}
                      alt="Smile Lift treatment example"
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg ${getHeroImageClassName('smile-lift')}`}
                      style={{ objectPosition: getHeroImageObjectPosition('smile-lift') }}
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
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Why Choose Smile Lift at Aevia Skin?</h2>
              <div className="space-y-4 text-center">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Uplifted Smile:</span>
                  <p className="text-base text-foreground/80 mb-0">Subtly raises the corners of the mouth for a more positive expression.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Reduced Marionette Lines:</span>
                  <p className="text-base text-foreground/80 mb-0">Softens the lines that run from the corners of the mouth downwards.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Natural-Looking Results:</span>
                  <p className="text-base text-foreground/80 mb-0">Enhances your natural smile without an artificial appearance.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Quick Procedure:</span>
                  <p className="text-base text-foreground/80 mb-0">A fast and effective treatment with minimal discomfort.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Smile Lift Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Smile Lift Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                The Depressor Anguli Oris (DAO) muscles are <span className="text-primary font-bold">small muscles located at the corners of your mouth.</span> When these muscles are <span className="text-primary font-bold">overactive, they can pull the corners of the mouth downwards</span>, creating a perpetually sad or angry appearance, even when you're not feeling that way.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                Our Smile Lift treatment involves <span className="text-primary font-bold">precise injections of muscle relaxants into the DAO muscles.</span> By relaxing these muscles, their <span className="text-primary font-bold">downward pull is reduced, allowing the corners of the mouth to subtly lift.</span> This can <span className="text-primary font-bold">soften the appearance of marionette lines</span> and create a more positive and approachable expression.
              </p>
              <p className="text-base text-foreground/80">
                The procedure is <span className="text-primary font-bold">quick, minimally invasive, and requires no downtime.</span> Results typically become <span className="text-primary font-bold">noticeable within a few days</span> and <span className="text-primary font-bold">last between 3 to 4 months.</span> It's a popular option for those seeking a <span className="text-primary font-bold">non-surgical way to rejuvenate their lower face</span> and achieve a more cheerful appearance.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src={smileLiftDiagram}
                alt="DAO muscle diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">The DAO muscles</p>
            </div>
          </div>
        </section>

        {/* Smile Lift Journey Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Smile Lift Journey</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">Assess your facial anatomy and discuss desired outcomes.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Precise Injections</h3>
                <p className="text-sm text-foreground/70">Small injections into the DAO muscles to relax them.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Subtle Enhancement</h3>
                <p className="text-sm text-foreground/70">Results gradually appear over a few days, revealing an uplifted smile.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Review</h3>
                <p className="text-sm text-foreground/70">Follow-up to ensure optimal results and satisfaction.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing & Options */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Smile Lift treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Smile Lift</h2>
                <p className="text-foreground/70 mb-2 text-center">DAO Treatment</p>
                <span className="text-2xl font-bold text-primary mb-1">£120</span>
                <span className="text-muted-foreground text-sm mb-4">30min</span>
                <BookingButton
                  href="https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/UHWQSUZOAETSA4MYBHWGU3QR"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Smile Lift
                </BookingButton>
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
                <div className="mb-2 font-semibold text-base text-primary">What are DAO muscles?</div>
                <p className="text-base text-foreground/80 mb-0">Depressor Anguli Oris (DAO) muscles pull down the corners of the mouth. Relaxing them can create an uplifting effect.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How long does it take?</div>
                <p className="text-base text-foreground/80 mb-0">The injection process is very quick, usually under 15 minutes.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How long do results last?</div>
                <p className="text-base text-foreground/80 mb-0">Typically 3-4 months, depending on individual muscle activity.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is it safe?</div>
                <p className="text-base text-foreground/80 mb-0">When performed by an experienced medical professional, it is a safe procedure.</p>
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
            <p className="text-base text-foreground/80 text-center mb-8">Book your Smile Lift consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="https://app.squareup.com/appointments/buyer/widget/flwwunfdy1hm72/L1TKSRMBS3N9H" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/UHWQSUZOAETSA4MYBHWGU3QR" variant="secondary" className="w-full">
                  Book Smile Lift Treatment
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
