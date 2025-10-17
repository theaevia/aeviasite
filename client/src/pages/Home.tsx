import { Link } from "wouter";
import { Leaf, Brain, Sparkles, Check, Infinity, Feather } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { BookingButton } from "@/components/BookingButton";
import { MIND_DISCOVERY_URL, SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";
import SEO from "@/components/SEO";
import clinicImage from "@assets/hero_images/aevia-clinic3.webp";
import clinicImage800 from "@assets/hero_images/aevia-clinic3-800w.webp";
import mindMonk from "@assets/hero_images/mind-monk.jpeg";
import skinModel4 from "@assets/hero_images/royalty-free-skin4.webp";
import Map from "@/components/Map";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { clinicOpeningHours } from "@/data/openingHours";

export default function Home() {
  return (
    <>
      <SEO 
        title="The Aevia | Aesthetics & Coaching Clinic | King's Cross, London"
        description="Doctor-led non-surgical treatments and performance coaching for those wishing to look and feel their best, with natural and lasting results. Visit The Aevia in King's Cross, London."
        image="/aevia-clinic3.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-gradient py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-balance">
                Excellence and longevity in{" "}
                <span className="text-primary">Skin and Mind</span>
              </h1>
              {/* Trust bar */}
              <p className="text-sm md:text-base text-foreground/70 mb-6">
                Doctor-led • King’s Cross • Subtle, natural results
              </p>
              <p className="text-lg lg:text-xl text-foreground/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Regenerative aesthetics and performance coaching for those who value industry-leading expertise and long-lasting results. Based in <span className="font-bold text-primary">Kings Cross, London</span>.
              </p>
              <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                <div className="w-full sm:w-72 text-center">
                  <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full whitespace-nowrap">
                    Book Free Skin Consultation
                  </BookingButton>
                </div>
                <div className="w-full sm:w-72">
                  <BookingButton href={MIND_DISCOVERY_URL} variant="secondary" className="w-full whitespace-nowrap">
                    Book Free Coaching Session
                  </BookingButton>
                </div>
              </div>
              <div className="mt-3 text-sm text-center">
                <Link href="/treatments#skin" className="text-primary/80 hover:text-primary underline underline-offset-4">
                  View all treatments & prices
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Pillars */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Wellness, Curated by Doctors</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Two dedicated pathways live under The Aevia umbrella so you can focus on regenerative skin medicine or strategic mindset coaching whenever you need it.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/skin"
                className="group rounded-3xl bg-gradient-to-br from-white via-white to-secondary/40 border border-[#e0ddd9] p-8 shadow-lg block hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <span className="block text-[0.65rem] font-medium tracking-[0.5em] text-primary/60 uppercase mb-4">
                  Aevia Skin
                </span>
                <Leaf className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-serif font-semibold mb-3">Regenerative Skin Wellness</h3>
                <p className="text-foreground/70 mb-5 leading-relaxed">
                  Advanced injectables and skin boosters mapped to your biology for results that stay true to your facial identity—crafted within the Aevia Skin programme.
                </p>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-start">
                    <Check size={16} className="mt-1 text-primary mr-3 flex-shrink-0" />
                    Tailored collagen-stimulating protocols administered exclusively by doctors.
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-1 text-primary mr-3 flex-shrink-0" />
                    Treatment timelines that respect seasonal shifts and your event calendar.
                  </li>
                </ul>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary underline underline-offset-4">
                  Discover Aevia Skin
                </span>
              </Link>
              <Link
                href="/mind"
                className="group rounded-3xl bg-white border border-[#e0ddd9] p-8 shadow-lg block hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <span className="block text-[0.65rem] font-medium tracking-[0.5em] text-primary/60 uppercase mb-4">
                  Aevia Mind
                </span>
                <Brain className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-serif font-semibold mb-3">Mindful Performance Coaching</h3>
                <p className="text-foreground/70 mb-5 leading-relaxed">
                  Structured coaching that builds clarity, resilience, and momentum for founders, creatives, and leaders through the Aevia Mind methodology.
                </p>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-start">
                    <Check size={16} className="mt-1 text-primary mr-3 flex-shrink-0" />
                    Nervous-system aware frameworks for calm decision-making and confident presence.
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-1 text-primary mr-3 flex-shrink-0" />
                    Measurable plans with weekly accountability to cement lasting change.
                  </li>
                </ul>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary underline underline-offset-4">
                  Discover Aevia Mind
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Dual Offer Introduction */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">The Aevia Difference</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              The Aevia offers two distinct services, both led by doctors:&nbsp;
<span className="font-semibold text-primary inline">
  Regenerative&nbsp;Aesthetics
</span>{" "}
for skin rejuvenation and longevity, and&nbsp;
<span className="font-semibold text-primary inline">
  Performance&nbsp;Coaching
</span>
{" "}
for clarity, confidence, and consistency. Whether you're drawn to one or both, each path is designed to deliver expert-led transformation.
</p>
            </div>
            
            {/* Doctors Introduction */}
            <div className="grid md:grid-cols-3 gap-6 mb-4 md:mb-4">
              <div className="md:col-span-3 flex justify-center mb-8 md:mb-12">
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
                   
                    width="1600"
                    height="1200"
                    sizes="(max-width: 1024px) 100vw, 1600px"
                  />
                </picture>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-2">Dr. Terrell Okhiria</h3>
                <p className="text-foreground/70">Aesthetic Doctor & GP Trainee</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-2">Dr. Renee Okhiria</h3>
                <p className="text-foreground/70">Aesthetic & Medical Doctor</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-2">Dr. Manu Sidhu</h3>
                <p className="text-foreground/70">Medical Doctor & Performance Coach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <ServiceCard
                title="Aevia Skin"
                subtitle="Regenerative Aesthetics"
                description="Science-backed, regenerative approaches that restore your skin's natural quality. Results that feel like you, only fresher."
                image={skinModel4}
                features={["The Aevia Skin Consultation", "Polynucleotides", "Skin Boosters", "Anti-Wrinkle Injections"]}
                ctaText="Learn More About Skin Treatments"
                onCtaClick={() => window.location.href = "/skin"}
                imagePositionTop={false}
                objectPosition="center 30%"
              />

              <ServiceCard
                title="Aevia Mind"
                subtitle="Performance Coaching for the Ambitious"
                description="A thinking partnership that brings about change through self-inquiry, peak performance strategies, and accountability."
                image={mindMonk}
                features={["Clarify what matters", "Become aware of what's holding you back", "Implement the strategies for sustainable change", "Execute a results-driven plan with accountability"]}
                ctaText="Learn More About Coaching"
                onCtaClick={() => window.location.href = "/mind"}
                imagePositionTop={false}
                objectPosition="center 0%"
              />
            </div>
          </div>
        </section>

        {/* Sanctuary Experience */}
        <section className="relative overflow-hidden py-12 md:py-20 bg-secondary">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent)]" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">A Calm, Clinical Sanctuary</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Purpose-built spaces that balance medical precision with restorative quiet, so every touchpoint supports nervous system ease and beautiful outcomes.
              </p>
            </div>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4">Inside the Sanctuary</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Our clinic flows from light-filled treatment rooms to a quiet coaching lounge, creating an unhurried rhythm for both skin and mind work.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <Feather className="text-primary mt-[2px] w-[18px] h-[18px] sm:w-[16px] sm:h-[16px] flex-shrink-0" />
                    <p className="ml-3 text-sm text-foreground/70">Sensory design that lowers cortisol before your appointment begins.</p>
                  </div>
                  <div className="flex items-start">
                    <Infinity className="text-primary mt-[2px] w-[18px] h-[18px] sm:w-[16px] sm:h-[16px] flex-shrink-0" />
                    <p className="ml-3 text-sm text-foreground/70">Seamless continuity between injectables, regenerative protocols, and coaching sessions.</p>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="text-primary mt-[2px] w-[18px] h-[18px] sm:w-[16px] sm:h-[16px] flex-shrink-0" />
                    <p className="ml-3 text-sm text-foreground/70">Premium formulations, mindful rituals, and measurable progress at every touchpoint.</p>
                  </div> 
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-lg shadow-lg p-8">
                  <h4 className="text-xl font-serif font-semibold mb-3">The Weekly Rhythm</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Alternate regenerative treatments with guided coaching to reinforce biochemistry with mindset — your tailored blueprint for sustainable glow.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-lg shadow-lg p-8">
                  <h4 className="text-xl font-serif font-semibold mb-3">The Aevia Circle</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Between visits we share journal prompts, breathwork micro-practices, and skincare adjustments so progress continues at home.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href="/skin" className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80">
                      Explore Aevia Skin
                    </Link>
                    <Link href="/mind" className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80">
                      Discover Aevia Mind
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Begin Your Transformation</h2>
            <p className="text-lg text-foreground/70">Limited availability for our exclusive, doctor-led approach</p>
            <p className="text-lg text-foreground/70 mb-8">Based in Kings Cross, London</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center">
              <div className="w-full sm:w-72">
                <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full whitespace-nowrap">
                  Book Skin Consultation
                </BookingButton>
              </div>
              <div className="w-full sm:w-72">
                <BookingButton href={MIND_DISCOVERY_URL} variant="secondary" className="w-full whitespace-nowrap">
                  Book Coaching Session
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Information Section */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Visit Our <span className="text-primary">Clinic</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Located in the heart of Kings Cross, London
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4">Location</h3>
                  <a
                    href="https://maps.app.goo.gl/KUyjk1sRrauncTx49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary smooth-transition block"
                  >
                    Minsony, 260 Pentonville Road<br />
                    N1 9JY, Kings Cross<br />
                    London
                  </a>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4">Opening Hours</h3>
                  <div className="space-y-2 text-foreground/70 text-sm md:text-base">
                    {clinicOpeningHours.map(({ day, hours }) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className="font-medium">{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+447448012556"
                      className="block text-foreground/70 hover:text-primary smooth-transition"
                    >
                      +44 7448 012556
                    </a>
                    <a
                      href="mailto:hello@theaevia.co.uk"
                      className="block text-foreground/70 hover:text-primary smooth-transition"
                    >
                      hello@theaevia.co.uk
                    </a>
                  </div>
                </div>
              </div>
              <Map />
            </div>
          </div>
        </section>
      </div>
      <WhatsAppWidget />
    </>
  );
}
