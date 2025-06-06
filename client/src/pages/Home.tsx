import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Brain, Star } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import { BookingButton } from "@/components/BookingButton";
import SEO from "@/components/SEO";
import clinicImage from "@assets/hero_images/aevia-clinic3.webp";
import clinicImage800 from "@assets/hero_images/aevia-clinic3-800w.webp";
import mindCoachingStairs from "@assets/hero_images/mind-coaching-water.webp";
import skinModel2 from "@assets/hero_images/skin-model-2.webp";

export default function Home() {
  return (
    <>
      <SEO 
        title="The Aevia - Doctor-Led Transformation for Skin and Mind"
        description="Medical aesthetics and performance coaching for professionals who demand excellence. Based in Kings Cross, London. Book your consultation today."
        image="/aevia-clinic3.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-gradient py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-balance">
                Doctor-Led Transformation for{" "}
                <span className="text-primary">Skin and Mind</span>
              </h1>
              <p className="text-lg lg:text-xl text-foreground/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Medical aesthetics and performance coaching for professionals who demand excellence. Based in Kings Cross, London.
              </p>
              <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                <div className="w-full sm:w-64">
                  <BookingButton href="/consultations?type=skin" variant="skin" className="w-full">
                    Book Skin Consultation
                  </BookingButton>
                </div>
                <div className="w-full sm:w-64">
                  <BookingButton href="/consultations?type=mind" variant="mind" className="w-full">
                    Book Mind Discovery Call
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Offer Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">The Aevia Difference</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
The Aevia offers two distinct, doctor-led services:&nbsp;
<span className="font-semibold text-accent inline">
  Medical&nbsp;Aesthetics
</span>{" "}
for natural, science-backed skin rejuvenation, and&nbsp;
<span className="font-semibold text-accent inline sm:hidden">
  Performance&nbsp;Coaching
</span>
<span className="font-semibold text-accent hidden sm:inline">
  Performance&nbsp;and&nbsp;Transformative&nbsp;Coaching
</span>{" "}
for professionals seeking clarity, confidence, and agency. Whether you're
drawn to one or both, each path is designed to deliver focused, expert-led
transformation.
</p>
            </div>
            
            {/* Doctors Introduction */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-3 flex justify-center mb-12">
                <picture>
                  <source
                    srcSet={`${clinicImage800} 800w, ${clinicImage} 1600w`}
                    type="image/webp"
                  />
                  <img
                    src={clinicImage}
                    srcSet={`${clinicImage800} 800w, ${clinicImage} 1600w`}
                    alt="Dr. Terrell, Dr. Renee, and Dr. Manu - The Aevia medical team"
                    className="rounded-2xl shadow-lg w-full max-w-2xl h-auto object-cover"
                    loading="eager"
                    fetchPriority="high"
                    width="1600"
                    height="1200"
                    sizes="(max-width: 1024px) 100vw, 1600px"
                  />
                </picture>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-2">Dr. Terrell Okhiria</h3>
                <p className="text-foreground/70">Aesthetic Medicine Doctor & GP Trainee</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-2">Dr. Renee Okhiria</h3>
                <p className="text-foreground/70">Aesthetic Medicine Doctor</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-2">Dr. Manu Sidhu</h3>
                <p className="text-foreground/70">Medical Doctor & Performance Coach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <ServiceCard
                title="Aevia Skin"
                subtitle="Medical Aesthetics"
                description="Science-backed, regenerative approaches that restore your skin's natural quality. Results that feel like you, only fresher."
                image={skinModel2}
                features={["The Aevia Skin Consultation", "Polynucleotides", "Skin Boosters", "Anti-wrinkle Injections"]}
                ctaText="Learn More About Skin Treatments"
                onCtaClick={() => window.location.href = "/skin"}
                imagePositionTop={false}
                objectPosition="center 20%"
              />

              <ServiceCard
                title="Aevia Mind"
                subtitle="Performance & Transformative Coaching"
                description="Coaching designed for professionals ready to think sharper, act with confidence, and create meaningful change."
                image={mindCoachingStairs}
                features={["Performance optimization", "Decision-making clarity", "Transformative mindset shifts", "Strategic life planning"]}
                ctaText="Explore Mind Coaching"
                onCtaClick={() => window.location.href = "/mind"}
                imagePositionTop={false}
                objectPosition="center 40%"
              />
            </div>
          </div>
        </section>

        {/* Instagram-Style Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Client Transformations</h2>
              <p className="text-lg text-foreground/70">Real results from our community</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <TestimonialCard
                name="Joan H."
                service="Aevia Skin"
                quote="It's been a few weeks since I had my fantastic experience at The Aevia with Dr Renée and Dr Terrell. They addressed the dark circles under my eyes with polynucleotide injections, and the results have been magical."
                image=""
                likes={127}
                comments={8}
                reviewUrl="https://maps.app.goo.gl/jpQNgXg92eiBesPD8"
              />

              <TestimonialCard
                name="Michelle C."
                service="Aevia Skin"
                quote="Thank you once again to both doctors. Really satisfied with everything. I will most definitely highly recommend you to my friends and colleagues. I look forward to my next session with you."
                image=""
                likes={89}
                comments={12}
                reviewUrl="https://maps.app.goo.gl/Cqjt1Rcym1uQ9ByB6"
              />

              <TestimonialCard
                name="Maria A."
                service="Aevia Skin"
                quote="A great experience at The Aevia! Dr Terrell is so friendly and explains everything thoroughly! Will definitely be back again!"
                image=""
                likes={203}
                comments={24}
                reviewUrl="https://maps.app.goo.gl/HVS56S8yDgGuCeqC9"
              />

              {/* <TestimonialCard
                name="Sarah M."
                service="Aevia Skin"
                quote="The skin consultation was incredibly thorough. Dr. Renee took the time to understand my concerns and created a personalised plan."
                image=""
                likes={156}
                comments={15}
                reviewUrl="https://maps.app.goo.gl/your-review-id"
              />

              <TestimonialCard
                name="David L."
                service="Aevia Mind"
                quote="The performance coaching sessions have been transformative. I've gained clarity in my career decisions and personal life."
                image=""
                likes={92}
                comments={10}
                reviewUrl="https://maps.app.goo.gl/your-review-id"
              />

              <TestimonialCard
                name="Sophie T."
                service="Both Services"
                quote="Starting with skin treatments and then adding coaching was the perfect combination. The results have been life-changing."
                image=""
                likes={178}
                comments={20}
                reviewUrl="https://maps.app.goo.gl/your-review-id"
              /> */}
            </div>

            <div className="text-center">
              <a 
                href="https://www.google.com/maps/place/The+Aevia/@51.5310793,-0.1203023,17z/data=!4m18!1m9!3m8!1s0x48761be0d6318279:0x6231887d02d12d6b!2sThe+Aevia!8m2!3d51.5310793!4d-0.1203023!9m1!1b1!16s%2Fg%2F11ycs1_g7t!3m7!1s0x48761be0d6318279:0x6231887d02d12d6b!8m2!3d51.5310793!4d-0.1203023!9m1!1b1!16s%2Fg%2F11ycs1_g7t!5m1!1e2?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="group">
                  <Star className="w-4 h-4 mr-2 text-yellow-600" />
                  Read Client Stories
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Begin Your Transformation</h2>
            <p className="text-lg text-foreground/70">Limited availability for our exclusive, doctor-led approach</p>
            <p className="text-lg text-foreground/70 mb-8">Based in Kings Cross, London</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center">
              <div className="w-full sm:w-64">
                <BookingButton href="/consultations?type=skin" variant="skin" className="w-full">
                  Book Skin Consultation
                </BookingButton>
              </div>
              <div className="w-full sm:w-64">
                <BookingButton href="/consultations?type=mind" variant="mind" className="w-full">
                  Book Mind Discovery Call
                </BookingButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
