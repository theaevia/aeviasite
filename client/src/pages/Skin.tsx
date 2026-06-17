import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dna, Droplet, Sparkles, Check, Gift, Camera, Star } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import {
  CLINIC_WHATSAPP_ENQUIRE_URL,
  SKIN_CONSULTATION_URL,
  SQUARE_SITE_URL,
} from "@/lib/bookingUrls";
import clinicHeroImage from "@assets/hero_images/aevia-clinic3.webp";
import clinicHeroImage800 from "@assets/hero_images/aevia-clinic3-800w.webp";
import skinModel2Image from "@assets/hero_images/skin-model-2.webp";
import skinModel2Image800 from "@assets/hero_images/skin-model-2-800w.webp";
import terrellImage from "@assets/about_pics/terrell-pic3.webp";
import reneeImage from "@assets/about_pics/renee-pic.webp";
import SEO from "@/components/SEO";
import TestimonialCard from "@/components/TestimonialCard";
import BnplNotice from "@/components/BnplNotice";
import Map from "@/components/Map";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { signatureOffers } from "@/data/signatureOffers";
import { testimonials } from "@/data/testimonials";
import { clinicOpeningHours } from "@/data/openingHours";
import { openPeelsWaitlistForm } from "@/lib/mailerLite";
import underEyeImage from "@assets/before_afters/under-eye-no-logo.png";
import masseterImage from "@assets/before_afters/masseter-1.png";
import foreheadImage from "@assets/before_afters/forehead-no-logo.png";
import { GraduationCap, IdCard, Award } from "lucide-react";

export default function Skin() {

  const beforeAfterCases = [
    {
      title: "Under-eye Brightening",
      protocol: "Polynucleotide series + medical skincare",
      timeframe: "3 weeks between photos",
      summary: "Smoother tear troughs, improved hydration, and brighter tone without filler.",
      image: underEyeImage,
      alt: "Before and after showing brighter under-eye area after regenerative treatment",
      href: "/treatments/eye-rejuvenation",
    },
    {
      title: "Jawline Refinement",
      protocol: "Masseter relaxation",
      timeframe: "4 weeks between photos",
      summary: "Slimmed lower face with more definition through muscle contouring and tissue support.",
      image: masseterImage,
      alt: "Before and after image highlighting a more defined jawline following treatment",
      href: "/treatments/jawline-slimming",
    },
    {
      title: "Forehead Softening",
      protocol: "Targeted anti-wrinkle protocol",
      timeframe: "2 weeks between photos",
      summary: "Fine lines softened while maintaining natural movement and skin luminosity.",
      image: foreheadImage,
      alt: "Before and after image emphasising smoother forehead lines after treatment",
      href: "/treatments/anti-wrinkle",
    },
  ];
  return (
    <>
      <SEO
        title="Aevia Skin | Doctor-Led Aesthetics | King's Cross, London"
        description="Doctor-led preventative aesthetics in King's Cross. Regenerative treatments designed for natural, lasting results. Two doctors. Evidence-based protocols."
        image="/hero_images/aevia-clinic3.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                {/* Old copy preserved for reference:
                  Aevia Skin: Regenerative Aesthetics
                  Natural skin optimisation for professionals who want fresher, healthier and more polished skin through subtle, evidence-based treatments.
                */}
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                  Doctor-led preventative aesthetics in <span className="text-primary">King's Cross</span>
                </h1>
                <p className="text-sm md:text-base text-foreground/70 mb-4">
                  Two doctors. Regenerative protocols. Natural, lasting results.
                </p>
                <p className="text-xl text-foreground/70 mb-4 leading-relaxed">
                  Natural skin optimisation for professionals who want fresher, healthier and more polished skin through subtle, evidence-based treatments.
                </p>
                <p className="text-sm text-foreground/60 mb-8">
                  One of your doctors will confirm suitability at the start of your appointment.
                </p>
                <div className="flex w-full flex-col items-center gap-4 text-center sm:w-auto sm:items-start">
                  <BookingButton href={SQUARE_SITE_URL} variant="primary" className="w-full sm:w-auto">
                    Book Treatment
                  </BookingButton>
                  <a
                    href={CLINIC_WHATSAPP_ENQUIRE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    Unsure? WhatsApp us
                  </a>
                </div>
                <div className="w-full sm:w-auto text-center">
                  <BnplNotice className="mt-4" />
                </div>
              </div>
              <div className="order-1 lg:order-2 w-full">
                <div className="relative w-full pb-[75%]">
                  <picture>
                    <source
                      srcSet={`${clinicHeroImage800} 800w, ${clinicHeroImage} 1600w`}
                      type="image/webp"
                      sizes="(max-width: 1024px) 100vw, 640px"
                    />
                    <img
                      src={clinicHeroImage}
                      srcSet={`${clinicHeroImage800} 800w, ${clinicHeroImage} 1600w`}
                      alt="Aevia Skin clinic in King's Cross, London"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                      loading="eager"
                      width="1600"
                      height="1200"
                      sizes="(max-width: 1024px) 100vw, 640px"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Doctors */}
        <section className="py-16 md:py-24 bg-[#f8f6f2]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">LED BY DOCTORS</p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-bold">Meet your doctors</h2>
            </div>
            <div className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src={terrellImage}
                    alt="Dr. Terrell Okhiria"
                    width="600"
                    height="800"
                    loading="lazy"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4">Dr. Terrell Okhiria</h3>
                  <p className="text-lg text-primary mb-4">GP Trainee & Aesthetic Doctor</p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    Dr. Terrell Okhiria is a medical doctor and GP trainee based in North Central London. He holds an MBBS and intercalated BSc from Imperial College London and is certified in advanced aesthetic medicine. With a strong foundation in clinical medicine and a deep understanding of skin physiology, he specialises in regenerative, science-led treatments that support long-term skin health and natural rejuvenation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground/70">
                      <GraduationCap className="text-primary mr-3 h-5 w-5" />
                      MBBS, BSc, Imperial College London
                    </div>
                    <div className="flex items-center text-foreground/70">
                      <IdCard className="text-primary mr-3 h-5 w-5" />
                      GP Trainee, North Central London
                    </div>
                    <div className="flex items-center text-foreground/70">
                      <Award className="text-primary mr-3 h-5 w-5" />
                      Co-founder, Aevia Skin
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-last lg:order-first">
                  <h3 className="text-3xl font-serif font-bold mb-4">Dr. Renee Okhiria</h3>
                  <p className="text-lg text-primary mb-4">Medical & Aesthetic Doctor</p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    Dr. Renee Okhiria is a qualified medical doctor with an MBBS from the University of Manchester and a BSc from Imperial College London. She holds advanced certification in aesthetic medicine, with a focus on non-surgical facial rejuvenation. Known for her artistic eye and meticulous technique, Dr. Renee combines medical precision with creative vision to deliver refined, natural-looking results.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground/70">
                      <GraduationCap className="text-primary mr-3 h-5 w-5" />
                      MBBS, BSc, University of Manchester & Imperial College London
                    </div>
                    <div className="flex items-center text-foreground/70">
                      <IdCard className="text-primary mr-3 h-5 w-5" />
                      Resident Doctor, East of England
                    </div>
                    <div className="flex items-center text-foreground/70">
                      <Award className="text-primary mr-3 h-5 w-5" />
                      Co-founder, Aevia Skin
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={reneeImage}
                    alt="Dr. Renee Okhiria"
                    width="600"
                    height="800"
                    loading="lazy"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Experience (relocated from homepage) */}
        <section className="bg-white py-16 sm:py-24 text-[#111]">
          <div className="hero-safe-padding mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">THE EXPERIENCE</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Sanctuary-level calm, clinical precision</h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                Our King&rsquo;s Cross sanctuary is designed to lower cortisol before the first conversation begins.
                Each treatment runs on an unhurried rhythm so results land deeper and last longer.
              </p>
              <ul className="space-y-4 text-sm text-[#4c463d]">
                <li className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 flex-shrink-0 bg-primary" aria-hidden />
                  Zoned treatment rooms for injectables and regenerative protocols.
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 flex-shrink-0 bg-primary" aria-hidden />
                  Evidence-led products paired with sensory rituals that anchor nervous system balance.
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 flex-shrink-0 bg-primary" aria-hidden />
                  Integration touchpoints between visits: skincare resets and aftercare check-ins.
                </li>
              </ul>
            </div>
            <div className="order-2 overflow-hidden border border-primary/20 bg-white lg:order-2">
              <picture>
                <source srcSet={`${skinModel2Image800} 800w, ${skinModel2Image} 1600w`} type="image/webp" />
                <img
                  src={skinModel2Image}
                  srcSet={`${skinModel2Image800} 800w, ${skinModel2Image} 1600w`}
                  alt="Aevia Skin clinic interior"
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

        {/* Signature Offers */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-3 tracking-wider text-primary">Signature Offers</h2>
              <p className="text-lg text-muted-foreground">Our most-booked combinations for natural, lasting results.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signatureOffers.map((offer) => {
                const [mainTitle, subtitle] = offer.name.split('\n');
                const isWaitlist =
                  !offer.bookingUrl ||
                  offer.bookingUrl === '#' ||
                  offer.ctaText.toLowerCase().includes('waitlist');
                const ctaText = isWaitlist ? offer.ctaText : offer.ctaText || 'Book Treatment';
                const onCtaClick = () => {
                  if (isWaitlist) {
                    openPeelsWaitlistForm();
                    return;
                  }
                  if (offer.bookingUrl !== '#') {
                    window.open(offer.bookingUrl, '_blank');
                    return;
                  }
                  window.open(SQUARE_SITE_URL, '_blank');
                };
                return (
                  <div key={offer.name} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full text-center border border-[#e0ddd9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <div className="flex-1 flex flex-col items-center">
                      <h3 className="text-2xl font-serif font-bold mb-1">{mainTitle}</h3>
                      {subtitle && <p className="text-base text-foreground/60 font-normal mb-2">{subtitle}</p>}
                      <p className="text-foreground/70 mb-4">{offer.description}</p>
                      <ul className="space-y-2 text-foreground/70 text-sm text-left mx-auto max-w-xs mb-3">
                        {offer.features.map(feature => (
                          <li key={feature} className="relative pl-6 leading-relaxed">
                            <Check size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button onClick={onCtaClick} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4">{ctaText}</Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Before & Afters</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Real client journeys guided by our doctors. Subtle shifts, refreshed structure, and skin that still feels unmistakably you.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {beforeAfterCases.map((result) => {
                return (
                  <figure
                    key={result.title}
                    className="group bg-white rounded-3xl border border-[#e0ddd9] shadow-lg overflow-hidden flex flex-col h-full"
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden bg-secondary">
                      <img
                        src={result.image}
                        alt={result.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="p-6 flex-1 flex flex-col">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80 mb-3">{result.timeframe}</p>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{result.title}</h3>
                      <p className="text-sm text-foreground/70 mb-4 leading-relaxed flex-1">{result.summary}</p>
                      <div className="text-xs text-foreground/60 space-y-1 mb-4">
                        <p className="font-medium text-foreground/80 uppercase tracking-[0.25em] text-[0.65rem]">Protocol</p>
                        <p>{result.protocol}</p>
                      </div>
                      <Link
                        href={result.href}
                        className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                      >
                        View treatment details
                      </Link>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <p className="text-xs text-foreground/60 text-center mt-8">
              Individual results vary; consultation required to determine the safest, most effective plan for you.
            </p>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Our Regenerative Treatments</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Science-backed procedures that work with your body's natural healing processes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/categories/polynucleotides" className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl block">
                <Dna className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-1">Polynucleotides</h3>
                <p className="text-foreground/70 text-sm mb-3">DNA-based therapy that stimulates natural skin regeneration and hydration</p>
                <span className="text-sm text-primary underline underline-offset-4">Learn more</span>
              </Link>

              <Link href="/categories/skin-boosters" className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl block">
                <Droplet className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-1">Skin Boosters</h3>
                <p className="text-foreground/70 text-sm mb-3">Hyaluronic acid injections for deep hydration and improved skin quality</p>
                <span className="text-sm text-primary underline underline-offset-4">Learn more</span>
              </Link>

              <Link href="/categories/anti-wrinkle" className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl block">
                <Sparkles className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-1">Anti-Wrinkle Injections</h3>
                <p className="text-foreground/70 text-sm mb-3">Precision muscle relaxation for natural-looking wrinkle reduction</p>
                <span className="text-sm text-primary underline underline-offset-4">Learn more</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Client Transformations */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Client Transformations</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Stories from clients who chose regenerative treatments for skin that looks rested, lifted, and unmistakably theirs.
              </p>
            </div>
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 md:py-4">
                <div className="flex items-center space-x-1 mr-3">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                </div>
                <span className="text-xl font-bold text-primary">5.0</span>
                <span className="text-foreground/70 ml-2 font-medium">from verified Google reviews</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-12">
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/jpQNgXg92eiBesPD8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-white px-6 py-3 text-base font-medium text-primary shadow-lg smooth-transition transition-colors transition-shadow hover:bg-primary hover:text-primary-foreground hover:shadow-xl"
              >
                Read more client stories
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Not sure what to book?</h2>
              <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">Start with guidance</h3>
                <p className="text-lg text-foreground/80 mb-6">
                  If you already know which treatment you want, you can book it directly. If you would like guidance first, we can talk through your goals and recommend the best starting point.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Perfect for:</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center">
                        <Check size={16} className="text-primary mr-3 flex-shrink-0" />
                        First-time clients
                      </li>
                      <li className="flex items-center">
                        <Check size={16} className="text-primary mr-3 flex-shrink-0" />
                        Unsure clients seeking guidance
                      </li>
                      <li className="flex items-center">
                        <Check size={16} className="text-primary mr-3 flex-shrink-0" />
                        Personalised treatment planning
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Pricing:</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="grid grid-cols-[20px_1fr] gap-3 items-start">
                        <Gift className="h-5 w-5 text-primary" />
                        <span>Complimentary for first-time clients</span>
                      </li>
                      <li className="grid grid-cols-[20px_1fr] gap-3 items-start">
                        <Camera className="h-5 w-5 text-primary" />
                        <span>Virtual or phone guidance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <BookingButton href={SKIN_CONSULTATION_URL} variant="secondary" className="w-full sm:w-auto">
                    Get Guidance First
                  </BookingButton>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-serif font-bold mb-8">Your Journey to Radiant Skin</h3>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-foreground/70">We confirm your goals and suitability</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Facial Mapping</h3>
                <p className="text-sm text-foreground/70">Comprehensive clinical assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Treatment Plan</h3>
                <p className="text-sm text-foreground/70">Tailored recommendations for your goals</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Treatment</h3>
                <p className="text-sm text-foreground/70">Begin your regenerative journey</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">5</div>
                <h3 className="font-semibold mb-2">Results</h3>
                <p className="text-sm text-foreground/70">Experience natural, lasting transformation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Visit (relocated from homepage) */}
        <section className="bg-[#f8f6f2] py-16 sm:py-24 text-[#111]">
          <div className="hero-safe-padding mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">Visit</p>
              <h2 className="mt-6 text-3xl lg:text-4xl font-serif font-bold">Aevia Skin Clinic</h2>
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
                    className="mt-4 block text-base font-light tracking-[0.02em] text-primary hover:text-primary/80"
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

        {/* Booking Decision */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-2">How should I book?</h2>
            <p className="text-foreground/70 mb-8">Book the treatment you are interested in. We will confirm the right plan with you in clinic before treatment begins.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Know what you want?</h3>
                <p className="text-sm text-foreground/70 mb-4">Choose a treatment appointment directly.</p>
                <BookingButton href={SQUARE_SITE_URL} variant="primary" className="w-full">
                  Book Treatment
                </BookingButton>
              </div>
              <div className="bg-accent/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Unsure what to book?</h3>
                <p className="text-sm text-foreground/70 mb-4">Message us and we will guide you.</p>
                <BookingButton href={CLINIC_WHATSAPP_ENQUIRE_URL} variant="primary" className="w-full">
                  WhatsApp Us
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

      </div>
      <WhatsAppWidget />
    </>
  );
}
