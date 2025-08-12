import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { IconBadge } from "@/components/IconBadge";
import { Leaf, ShieldCheck, Star } from "lucide-react";

import lowerFaceContourDuoDiagram from "@assets/diagrams/lower-face-1.png";
import lowerFaceHero from "@assets/treatment_images/lower-face-2.jpg"

export default function LowerFaceContourDuoPage() {
  return (
    <>
      <SEO title="Lower-Face Contour Duo | The Aevia" description="One appointment, two goals: relieve teeth-grinding and refine your jawline symmetry. Doctor-led, natural results in King's Cross, London at Aevia Skin." />
      <TreatmentLayout>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Lower-Face Contour Duo
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Combines Masseter Reduction with a Nefertiti Neck Lift, giving optimal lower face slimming results.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>£520</span>
                  <span className="mx-2">•</span>
                  <span>1h</span>
                </div>
                <BookingButton
                  href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1640076&share&pId=2507365"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Book Lower-Face Contour Duo
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
                      srcSet={lowerFaceHero}
                      type="image/webp"
                    />
                    <img
                      src={lowerFaceHero}
                      alt="Lower-Face Contour Duo treatment example"
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
        {/* Benefits Section */}
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="flex flex-col items-center order-2 md:order-1">
              <div className="relative w-full pb-[75%]">
                <picture>
                  <source
                    srcSet="/hero_images/royalty-free-skin1.webp"
                    type="image/webp"
                  />
                  <img
                    src="/hero_images/royalty-free-skin1.webp"
                    alt="Lower-Face Contour Duo benefits example"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                    width="1600"
                    height="1200"
                    sizes="(max-width: 1024px) 100vw, 1600px"
                  />
                </picture>
              </div>
              <p className="text-muted-foreground text-center text-sm mt-4">"This duo treatment is amazing! My jawline is so much more defined and I no longer grind my teeth."</p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Why Choose Lower-Face Contour Duo at Aevia Skin?</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <span className="font-semibold text-primary">Comprehensive Contouring:</span>
                  <p className="text-base text-foreground/80 mb-0">Addresses both jawline slimming and neck definition for a harmonious lower face.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Relief from Bruxism:</span>
                  <p className="text-base text-foreground/80 mb-0">Reduces teeth grinding and associated discomfort.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Enhanced Facial Harmony:</span>
                  <p className="text-base text-foreground/80 mb-0">Creates a more balanced and aesthetically pleasing lower facial contour.</p>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-primary">Minimally Invasive:</span>
                  <p className="text-base text-foreground/80 mb-0">Achieve significant results without the need for surgical intervention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Lower-Face Contour Duo Treatment Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center md:text-left">Understanding Lower-Face Contour Duo Treatment</h2>
              <p className="text-base text-foreground/80 mb-4">
                The Lower-Face Contour Duo combines two powerful treatments: <span className="text-primary font-bold">Masseter Reduction</span> and <span className="text-primary font-bold">Nefertiti Neck Lift</span>. Masseter Reduction targets the masseter muscles, which can become enlarged due to teeth grinding or genetics, leading to a square jawline. By relaxing these muscles, we achieve a slimmer, more V-shaped lower face and can alleviate jaw tension and teeth grinding.
              </p>
              <p className="text-base text-foreground/80 mb-4">
                The Nefertiti Neck Lift focuses on the platysma muscles in the neck. These muscles can pull down the jawline and create vertical bands, contributing to an aged appearance. By strategically injecting muscle relaxants into these muscles, we can create a smoother, more defined jawline and neck contour.
              </p>
              <p className="text-base text-foreground/80">
                Together, these treatments work synergistically to create a more harmonious and youthful lower facial profile. The procedure is <span className="text-primary font-bold">minimally invasive, with little to no downtime</span>, and results typically last <span className="text-primary font-bold">4-6 months</span>. It's an ideal solution for those seeking comprehensive lower face rejuvenation without surgery.
              </p>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center">
              <img
                src={lowerFaceContourDuoDiagram}
                alt="Lower-Face Contour Duo diagram"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-auto"
              />
              <p className="text-muted-foreground text-sm mt-2">Combined treatment areas</p>
            </div>
          </div>
        </section>

        {/* Pricing & Options */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Pricing and Packages</h2>
            <p className="text-base text-foreground/80 text-center mb-8">Transparent pricing for Lower-Face Contour Duo treatments at our London clinic.</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full">
                <h2 className="text-xl font-serif font-semibold mb-2 text-primary">Lower-Face Contour Duo</h2>
                <p className="text-foreground/70 mb-2 text-center">Masseter Reduction + Jawline Tightening</p>
                <span className="text-2xl font-bold text-primary mb-1">£520</span>
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

        {/* Lower-Face Contour Duo Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-black text-center">Your Lower-Face Contour Duo Journey</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2 text-center">Consultation</h3>
                <p className="text-sm text-foreground/70">Discuss your concerns, assess your jawline, and create a tailored treatment plan.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2 text-center">Combined Injections</h3>
                <p className="text-sm text-foreground/70">Precise injections for both masseter reduction and jawline tightening in one session.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2 text-center">Gradual Transformation</h3>
                <p className="text-sm text-foreground/70">Results unfold over several weeks, revealing a more refined lower face.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2 text-center">Review & Optimization</h3>
                <p className="text-sm text-foreground/70">Follow-up appointment to ensure optimal results and satisfaction.</p>
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
                <div className="mb-2 font-semibold text-base text-primary">What does this treatment involve?</div>
                <p className="text-base text-foreground/80 mb-0">It combines masseter reduction (for jawline slimming and bruxism relief) with injections for jawline tightening, creating a more contoured lower face.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">How long do results last?</div>
                <p className="text-base text-foreground/80 mb-0">Results typically last 4-6 months, depending on individual factors and muscle activity.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Is there any downtime?</div>
                <p className="text-base text-foreground/80 mb-0">Minimal to no downtime. You can resume most activities immediately.</p>
              </div>
              <div className="mb-4">
                <div className="mb-2 font-semibold text-base text-primary">Can I combine it with other treatments?</div>
                <p className="text-base text-foreground/80 mb-0">Yes, it can be part of a broader facial rejuvenation plan.</p>
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
            <p className="text-base text-foreground/80 text-center mb-8">Book your Lower-Face Contour Duo consultation in London today.</p>
            <div className="text-center flex flex-col sm:flex-row sm:justify-center gap-6 mt-8">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="/consultations?type=skin" variant="primary" className="w-full">
                  Book Aevia Skin Consultation
                </BookingButton>
                <span className="text-xs font-semibold text-muted-foreground mt-2">For new customers</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <BookingButton href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1640076&share&pId=2507365" variant="secondary" className="w-full">
                  Book Lower-Face Contour Duo Treatment
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
