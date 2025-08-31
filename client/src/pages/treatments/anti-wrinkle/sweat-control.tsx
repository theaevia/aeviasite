import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";


import sweatControlDiagram from "@assets/diagrams/sweat-control-1.png";
const sweatHero = "/assets/treatment_images/armpit-2-640w.webp";
import { getHeroImageClassName, getHeroImageObjectPosition } from "@/lib/treatmentImageUtils";

export default function SweatControlPage() {
  return (
    <>
      <SEO title="Sweat Control | The Aevia" description="Underarm treatment to reduce excessive sweating for up to 9 months. Doctor-led, natural results in King's Cross, London at Aevia Skin." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Sweat Control
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Underarm and palms treatment to reduce excessive sweating for up to 9 months.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£350</span>
                  <span className="mx-2">•</span>
                  <span>1h</span>
                </div>
                <BookingButton
                  href="https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services?buttonTextColor=000000&color=c5a87a&locale=en-GB&service_id=WKPVKNLVYWDO5QXYASJBRDG3"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Sweat Control
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
                      srcSet={`${sweatHero.replace('-640w.webp','-320w.avif')} 320w, ${sweatHero.replace('-640w.webp','-640w.avif')} 640w, ${sweatHero.replace('-640w.webp','-1280w.avif')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`${sweatHero.replace('-640w.webp','-320w.webp')} 320w, ${sweatHero.replace('-640w.webp','-640w.webp')} 640w, ${sweatHero.replace('-640w.webp','-1280w.webp')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src={sweatHero}
                      alt="Sweat Control treatment example"
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg ${getHeroImageClassName('sweat-control')}`}
                      style={{ objectPosition: getHeroImageObjectPosition('sweat-control') }}
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
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Why Choose Sweat Control at Aevia Skin?</h2>
              <div className="space-y-4 text-center">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Significant Sweat Reduction:</span>
                  <p className="text-base text-foreground/80 mb-0">Effectively minimizes excessive underarm sweating (hyperhidrosis).</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Long-Lasting Relief:</span>
                  <p className="text-base text-foreground/80 mb-0">Enjoy dryness and confidence for up to 9 months.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Non-Invasive:</span>
                  <p className="text-base text-foreground/80 mb-0">A simple, quick injection treatment with no surgery required.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Improved Quality of Life:</span>
                  <p className="text-base text-foreground/80 mb-0">Eliminate concerns about sweat stains and body odor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Sweat Control Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Sweat Control Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                Excessive sweating, or <span className="text-primary font-bold">hyperhidrosis</span>, is a common condition that can cause significant discomfort and embarrassment. While sweating is a natural bodily function to regulate temperature, hyperhidrosis involves <span className="text-primary font-bold">sweating beyond what is necessary for thermoregulation.</span>
              </p>
              <p className="text-base text-foreground/80 mb-4">
                <span className="text-primary font-bold">Botulinum toxin injections are a highly effective treatment for hyperhidrosis</span>, particularly in the underarm area. The treatment works by <span className="text-primary font-bold">temporarily blocking the nerve signals that stimulate the sweat glands.</span> This significantly <span className="text-primary font-bold">reduces sweat production</span> in the treated area.
              </p>
              <p className="text-base text-foreground/80">
                The procedure is <span className="text-primary font-bold">quick, typically taking about 30 minutes, with minimal discomfort.</span> Results usually become <span className="text-primary font-bold">noticeable within a week</span> and can <span className="text-primary font-bold">last for up to 9 months</span>, providing <span className="text-primary font-bold">long-lasting relief from excessive sweating.</span> It's a <span className="text-primary font-bold">safe and well-tolerated option</span> for those seeking to manage hyperhidrosis and improve their quality of life.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src={sweatControlDiagram}
                alt="Sweat control diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">Armpit sweating</p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Sweat Control treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Sweat Control</h2>
                <p className="text-foreground/70 mb-2 text-center">Underarms</p>
                <span className="text-2xl font-bold text-primary mb-1">£350</span>
                <span className="text-muted-foreground text-sm mb-4">1h</span>
                <BookingButton
                  href="https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services?buttonTextColor=000000&color=c5a87a&locale=en-GB&service_id=WKPVKNLVYWDO5QXYASJBRDG3"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Sweat Control
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* Sweat Control Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Sweat Control Journey</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">Discuss your concerns and medical history to confirm suitability.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Quick Injections</h3>
                <p className="text-sm text-foreground/70">Multiple small injections into the underarm area. Minimal discomfort.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Enjoy Dryness</h3>
                <p className="text-sm text-foreground/70">Results typically appear within a week, providing long-lasting relief.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Rebook for a Refresh</h3>
                <p className="text-sm text-foreground/70">Maintain your results with a repeat treatment every 6-9 months.</p>
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
                <div className="mb-2 font-semibold text-base text-primary">How does it work?</div>
                <p className="text-base text-foreground/80 mb-0">A purified neuromodulator temporarily blocks the nerve signals responsible for sweat production in the treated area. This means less sweating from the underarms, and an improvement in quality of life.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is it painful?</div>
                <p className="text-base text-foreground/80 mb-0">Discomfort is minimal. A very fine needle is used, and ice can be applied to numb the area.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How long do results last?</div>
                <p className="text-base text-foreground/80 mb-0">Results typically last 6-9 months, varying by individual.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is it safe?</div>
                <p className="text-base text-foreground/80 mb-0">It is a safe and FDA-approved treatment for hyperhidrosis when performed by a qualified professional.</p>
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
            <p className="text-base text-foreground/80 text-center mb-8">Book your Sweat Control consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/consultations/skin" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services?buttonTextColor=000000&color=c5a87a&locale=en-GB&service_id=WKPVKNLVYWDO5QXYASJBRDG3" variant="secondary" className="w-full">
                  Book Sweat Control Treatment
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
