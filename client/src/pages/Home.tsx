import { Link } from "wouter";
import { MIND_DISCOVERY_URL, SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";
import SEO from "@/components/SEO";
import HomeHero from "@/components/HomeHero";
import clinicImage from "@assets/hero_images/aevia-clinic3.webp";
import clinicImage800 from "@assets/hero_images/aevia-clinic3-800w.webp";
import heroImageDefault from "@assets/hero_images/homepage/homepage-hero.webp";
import heroImage768 from "@assets/hero_images/homepage/homepage-hero-768w.webp";
import heroImage1280 from "@assets/hero_images/homepage/homepage-hero-1280w.webp";
import heroImage1920 from "@assets/hero_images/homepage/homepage-hero-1920w.webp";
import heroImage2560 from "@assets/hero_images/homepage/homepage-hero-2560w.webp";
import logoGold from "@assets/logos/logo-gold-transparent.webp";
import Map from "@/components/Map";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { clinicOpeningHours } from "@/data/openingHours";

export default function Home() {
  const heroImageSources = [
    { src: heroImage768, width: 768 },
    { src: heroImage1280, width: 1280 },
    { src: heroImage1920, width: 1920 },
    { src: heroImage2560, width: 2560 },
    { src: heroImageDefault, width: 4088 },
  ];

  return (
    <>
      <SEO 
        title="The Aevia | Aesthetics & Coaching Clinic | King's Cross, London"
        description="Doctor-led non-surgical treatments and performance coaching for those wishing to look and feel their best, with natural and lasting results. Visit The Aevia in King's Cross, London."
        image="/aevia-clinic3.webp"
      />
      <div className="min-h-screen">
        <HomeHero
          backgroundImage={heroImageDefault}
          backgroundSources={heroImageSources}
          logoSrc={logoGold}
          logoWidth={916}
          logoHeight={500}
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="hero-safe-padding mx-auto max-w-6xl text-[#111]">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">THE AEVIA PATHWAYS</p>
            <h2 className="mt-6 text-3xl sm:text-4xl uppercase tracking-[0.12em]">
              Choose your <span className="text-primary">focus</span>
            </h2>
            <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-[#3f3a33]">
              Every journey at The Aevia starts with clarity. Decide whether your next chapter centres on skin longevity,
              mindset performance, or an integration of both. Each pathway is architected by doctors so the science,
              coaching, and rituals move in synchrony.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <article className="border border-primary/20 bg-white px-8 py-10 transition-colors duration-300 hover:border-primary/40">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary">Aevia Skin</span>
                <h3 className="mt-5 text-2xl uppercase tracking-[0.12em] text-[#111]">Regenerative Skin Medicine</h3>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4c463d]">
                  Doctor-led injectables and regenerative protocols that honour your unique facial identity while
                  extending cellular longevity.
                </p>
                <ul className="mt-8 space-y-4 text-sm text-[#4c463d]">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                    Tailored collagen stimulation mapped to your biology and event cadence.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                    Subtle refinements that read as &ldquo;well-rested&rdquo; instead of obviously treated.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                    Doctor consultations with data-led treatment plans and ongoing reviews.
                  </li>
                </ul>
                <Link
                  href="/skin"
                  className="mt-10 inline-flex h-11 min-w-[170px] items-center justify-center rounded-none border border-primary bg-primary px-6 text-xs font-medium uppercase tracking-[0.08em] text-primary-foreground transition duration-200 hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-99 sm:text-sm lg:min-w-[220px] lg:px-8"
                >
                  Explore Skin
                </Link>
              </article>
              <article className="border border-primary/20 bg-white px-8 py-10 transition-colors duration-300 hover:border-primary/40">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary">Aevia Mind</span>
                <h3 className="mt-5 text-2xl uppercase tracking-[0.12em] text-[#111]">Strategic Mind Coaching</h3>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4c463d]">
                  Bespoke performance coaching for founders, creatives, and leaders who require sharp thinking without
                  sacrificing nervous-system calm.
                </p>
                <ul className="mt-8 space-y-4 text-sm text-[#4c463d]">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                    Diagnostic sessions that reveal patterns, blind spots, and leverage points.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                    Habit architecture combining neuroscience, mindset strategy, and accountability.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                    Integrated plans that align professional demands with restorative rituals.
                  </li>
                </ul>
                <Link
                  href="/mind"
                  className="mt-10 inline-flex h-11 min-w-[170px] items-center justify-center rounded-none border border-primary bg-white px-6 text-xs font-medium uppercase tracking-[0.08em] text-primary transition duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-99 sm:text-sm lg:min-w-[220px] lg:px-8"
                >
                  Explore Mind
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 sm:py-24 text-[#111]">
          <div className="hero-safe-padding mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">THE EXPERIENCE</p>
              <h2 className="text-3xl sm:text-4xl uppercase tracking-[0.12em]">Sanctuary-level calm, clinical precision</h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                Our King&rsquo;s Cross sanctuary is designed to lower cortisol before the first conversation begins.
                Each treatment or coaching session runs on an unhurried rhythm so results land deeper and last longer.
              </p>
              <ul className="space-y-4 text-sm text-[#4c463d]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                  Zoned treatment rooms for injectables, regenerative protocols, and coaching intensives.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                  Evidence-led products paired with sensory rituals that anchor nervous system balance.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 block h-2 w-2 bg-primary" aria-hidden />
                  Integration touchpoints between visits: journal prompts, micro-practices, skincare resets.
                </li>
              </ul>
            </div>
            <div className="order-2 overflow-hidden border border-primary/20 bg-white lg:order-2">
              <picture>
                <source srcSet={`${clinicImage800} 800w, ${clinicImage} 1600w`} type="image/webp" />
                <img
                  src={clinicImage}
                  srcSet={`${clinicImage800} 800w, ${clinicImage} 1600w`}
                  alt="The Aevia clinic interior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width="1600"
                  height="1200"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24 text-[#111]">
          <div className="hero-safe-padding mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">LED BY DOCTORS</p>
            <h2 className="mt-6 text-3xl sm:text-4xl uppercase tracking-[0.12em]">The team behind The Aevia</h2>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#3f3a33]">
              Three doctors with complementary specialisms collaborate on every plan. Your skin medicine, mindset
              strategy, and ongoing regeneration are held by people who understand how biology and behaviour work
              together.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Dr. Terrell Okhiria",
                  title: "Aesthetic Doctor & GP Trainee",
                  focus:
                    "Precision injectables, regenerative protocols, and holistic treatment mapping tailored to your lifestyle.",
                },
                {
                  name: "Dr. Renée Okhiria",
                  title: "Aesthetic & Medical Doctor",
                  focus:
                    "Skin longevity programmes, polynucleotides, and skincare therapeutics rooted in medical expertise.",
                },
                {
                  name: "Dr. Manu Sidhu",
                  title: "Medical Doctor & Performance Coach",
                  focus:
                    "Strategic coaching frameworks that marry mindset clarity, nervous system regulation, and execution.",
                },
              ].map((doctor) => (
                <article key={doctor.name} className="flex h-full flex-col border border-primary/20 bg-white px-8 py-10">
                  <h3 className="text-lg uppercase tracking-[0.16em] text-primary">{doctor.name}</h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#111]">{doctor.title}</p>
                  <p className="mt-6 text-sm leading-relaxed text-[#4c463d]">{doctor.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 sm:py-24 text-[#111]">
          <div className="hero-safe-padding mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">Begin</p>
            <h2 className="mt-6 text-3xl sm:text-4xl uppercase tracking-[0.12em]">Secure your consultation</h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3f3a33]">
              Availability is limited so every visit feels personal and meticulously prepared. Based in
              King&rsquo;s Cross, London.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={SKIN_CONSULTATION_URL}
                className="inline-flex h-11 w-full items-center justify-center rounded-none border border-primary bg-primary px-8 text-xs font-normal uppercase tracking-[0.08em] text-primary-foreground transition duration-200 hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-99 sm:text-sm sm:w-[320px]"
              >
                Book Skin Consultation
              </a>
              <a
                href={MIND_DISCOVERY_URL}
                className="inline-flex h-11 w-full items-center justify-center rounded-none border border-primary bg-white px-8 text-xs font-normal uppercase tracking-[0.08em] text-primary transition duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-99 sm:text-sm sm:w-[320px]"
              >
                Book Mind Session
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24 text-[#111]">
          <div className="hero-safe-padding mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">Visit</p>
              <h2 className="mt-6 text-3xl sm:text-4xl uppercase tracking-[0.12em]">The Aevia clinic</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                Find us inside Minsony, 260 Pentonville Road, King&rsquo;s Cross. Clinic appointments are by prior
                booking only.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="space-y-8">
                <article className="border border-primary/20 bg-white px-8 py-10">
                  <h3 className="text-sm uppercase tracking-[0.28em] text-primary/70">Location</h3>
                  <a
                    href="https://maps.app.goo.gl/KUyjk1sRrauncTx49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-md uppercase tracking-[0.08em] text-primary hover:text-primary/80"
                  >
                    Minsony<br />
                    260 Pentonville Road<br />
                    N1 9JY, London
                  </a>
                </article>
                <article className="border border-primary/20 bg-white px-8 py-10">
                  <h3 className="text-sm uppercase tracking-[0.28em] text-primary/70">Opening Hours</h3>
                  <div className="mt-4 space-y-3 text-sm text-[#4c463d]">
                    {clinicOpeningHours.map(({ day, hours }) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className="uppercase tracking-[0.12em] text-primary/70">{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </article>
                <article className="border border-primary/20 bg-white px-8 py-10">
                  <h3 className="text-sm uppercase tracking-[0.28em] text-primary/70">Contact</h3>
                  <div className="mt-4 space-y-3 text-sm text-[#4c463d]">
                    <a href="tel:+447448012556" className="block text-primary hover:text-primary/80">
                      +44 7448 012556
                    </a>
                    <a href="mailto:hello@theaevia.co.uk" className="block text-primary hover:text-primary/80">
                      hello@theaevia.co.uk
                    </a>
                  </div>
                </article>
              </div>
              <Map className="border border-primary/20 bg-white" />
            </div>
          </div>
        </section>
      </div>
      <WhatsAppWidget />
    </>
  );
}
