import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";

// Assets
import masseterDiagram from "@assets/diagrams/masseter-1.png";
const jawSlimHero = "/assets/treatment_images/jaw-slim-hero-640w.webp";
import jawlineBeforeAfter from "@assets/before_afters/jawline-placeholder.jpg";


export default function JawlineSlimmingPage() {
  return (
    <>
      <SEO title="Jawline Slimming (Masseter Reduction) | The Aevia" description="Relax the masseter for a slimmer, V-shaped lower face. Doctor-led, natural results in King's Cross, London at Aevia Skin." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Jawline Slimming
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Relax your masseters for relief from jaw tension & teeth grinding, and a slimmer lower face.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£300</span>
                  <span className="mx-2">•</span>
                  <span>45 mins</span>
                </div>
                <BookingButton
                  href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22417788&share&pId=2507365"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Jawline Slimming
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
                      srcSet={`${jawSlimHero.replace('-640w.webp','-320w.avif')} 320w, ${jawSlimHero.replace('-640w.webp','-640w.avif')} 640w, ${jawSlimHero.replace('-640w.webp','-1280w.avif')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`${jawSlimHero.replace('-640w.webp','-320w.webp')} 320w, ${jawSlimHero.replace('-640w.webp','-640w.webp')} 640w, ${jawSlimHero.replace('-640w.webp','-1280w.webp')} 1280w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src={jawSlimHero}
                      alt="Jawline Slimming treatment example"
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
                  <source srcSet={jawlineBeforeAfter} type="image/jpeg" />
                  <img
                    src={jawlineBeforeAfter}
                    alt="Jawline slimming treatment before and after"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                    width="1600"
                    height="1200"
                    sizes="(max-width: 1024px) 100vw, 1600px"
                  />
                </picture>
              </div>
              <p className="text-muted-foreground text-center text-sm mt-4">Jawline slimming.</p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Why Choose Jawline Slimming at Aevia Skin?</h2>
              <div className="space-y-4">
              <div className="mb-4">
                  <span className="font-semibold text-primary">Relief from Jaw Tension:</span>
                  <p className="text-base text-foreground/80 mb-0">Alleviate discomfort from teeth grinding.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Defined Jawline:</span>
                  <p className="text-base text-foreground/80 mb-0">Achieve a more sculpted and V-shaped facial contour.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Non-Surgical Solution:</span>
                  <p className="text-base text-foreground/80 mb-0">A minimally invasive alternative to surgical jaw reduction.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Quick & Convenient:</span>
                  <p className="text-base text-foreground/80 mb-0">Treatment typically takes less than an hour with minimal downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Jawline Slimming Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Jawline Slimming Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                The masseter is one of the powerful jaw muscles we use for chewing. When it becomes over active (from <span className="text-primary font-bold">stress-related clenching, teeth grinding, genetics</span>), it can enlarge, creating <span className="text-primary font-bold">jaw tension</span> and giving the face a <span className="text-primary font-bold">square outline.</span> 
              </p>
              <p className="text-base text-foreground/80 mb-4">
                In clinic, our doctors administer a series of <span className="text-primary font-bold">muscle-relaxant injections</span> into this muscle. The injection temporarily blocks the nerve signals that tell the masseter to contract. Within 1-2 weeks, you'll notice <span className="text-primary font-bold">reduced clenching</span> and, over 8-10 weeks, <span className="text-primary font-bold">softer jaw contour</span> as the muscle de-bulks. Many patients also benefit from a reduction in <span className="text-primary font-bold">teeth grinding</span> and <span className="text-primary font-bold">headaches</span> as a result of this reduction in activity. 
              </p>
              <p className="text-base text-foreground/80">
                The procedure is <span className="text-primary font-bold">quick, minimally invasive, and requires no downtime.</span> The effects usually last between <span className="text-primary font-bold">4 to 6 months</span>, after which we recommend a repeat treatment to maintain the desired outcome. It's a safe and effective option for those seeking to <span className="text-primary font-bold">reduce jaw pain</span> & <span className="text-primary font-bold">refine their jawline</span> without surgical intervention.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src={masseterDiagram}
                alt="Masseter muscle diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">The masseter muscle</p>
            </div>
          </div>
        </section>
        
        {/* Jawline Slimming Journey Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Jawline Slimming Journey</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">Discuss your aesthetic goals and medical history to ensure suitability.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Targeted Injections</h3>
                <p className="text-sm text-foreground/70">Precise injections into the masseter muscles to relax them.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Gradual Results</h3>
                <p className="text-sm text-foreground/70">Noticeable slimming and tension relief typically appear over 2-4 weeks.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Follow-Up</h3>
                <p className="text-sm text-foreground/70">Complimentary review to assess results and address any concerns.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing & Options */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Jawline Slimming treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Jawline Slimming</h2>
                <p className="text-foreground/70 mb-2 text-center">Masseter Reduction</p>
                <span className="text-2xl font-bold text-primary mb-1">£300</span>
                <span className="text-muted-foreground text-sm mb-4">45min</span>
                <BookingButton
                  href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22417788&share&pId=2507365"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Jawline Slimming
                </BookingButton>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Lower-Face Contour Duo</h2>
                <p className="text-foreground/70 mb-2 text-center">Pair with a Nefertiti Neck Lift</p>
                <div className="flex items-baseline justify-center my-1">
                  <span className="text-2xl font-bold text-primary">£520</span>
                  <span className="text-xl font-medium text-gray-500 line-through ml-2">£570</span>
                </div>
                <p className="text-sm font-semibold text-green-600 mb-2">Save £50</p>
                <span className="text-muted-foreground text-sm mb-4">1h</span>
                <BookingButton
                  href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1640076&share&pId=2507365"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Lower-Face Contour Duo
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-10">
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How does it work?</div>
                <p className="text-base text-foreground/80 mb-0">Neuromodulators are injected into the masseter muscles, reducing their size and strength, leading to a slimmer jawline and reduced teeth grinding.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is it painful?</div>
                <p className="text-base text-foreground/80 mb-0">Discomfort is minimal, often described as a quick pinch. Numbing cream is usually applied.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How long do results last?</div>
                <p className="text-base text-foreground/80 mb-0">Results typically last 4-6 months, varying by individual.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is there any downtime?</div>
                <p className="text-base text-foreground/80 mb-0">No significant downtime. You can resume normal activities immediately.</p>
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
            <p className="text-base text-foreground/80 text-center mb-8">Book your Jawline Slimming consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/consultations?type=skin" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22417788&share&pId=2507365" variant="secondary" className="w-full">
                  Book Jawline Slimming Treatment
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
