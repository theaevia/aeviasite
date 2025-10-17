import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dna, Droplet, Sparkles, Check, Gift, Camera, Star } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { SKIN_CONSULTATION_URL, SQUARE_SITE_URL } from "@/lib/bookingUrls";
import skinHeroImage from "@assets/hero_images/royalty-free-skin3.webp";
import SEO from "@/components/SEO";
import TestimonialCard from "@/components/TestimonialCard";
import { signatureOffers } from "@/data/signatureOffers";
import { testimonials } from "@/data/testimonials";
import underEyeImage from "@assets/before_afters/under-eye-no-logo.png";
import masseterImage from "@assets/before_afters/masseter-no-logo.png";
import foreheadImage from "@assets/before_afters/forehead-no-logo.png";

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
        title="Aevia Skin | Medical Aesthetics | King's Cross, London"
        description="Experience regenerative, science-backed skin treatments led by doctors. For those who value natural results and long-term skin health. King's Cross, London."
        image="/hero_images/royalty-free-skin4.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32 text-[#111]">
          <div className="hero-safe-padding">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
              <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Aevia Skin: <span className="text-primary">Regenerative Aesthetics</span></h1>
                <p className="eyebrow mb-4 text-primary/80">
                  Doctor-led • King’s Cross • Subtle, natural results
                </p>
                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                  Non-invasive skin longevity treatments that enhance your natural beauty through regenerative medicine, without the need for fillers.
                </p>
                <div className="mt-10 w-full sm:w-auto text-center lg:text-left">
                  <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full sm:w-auto lg:self-start">
                    Book Consultation
                  </BookingButton>
                  <div className="mt-3 text-sm text-center lg:text-left">
                    <Link href="/treatments#skin" className="uppercase tracking-[0.16em] text-primary transition-colors duration-150 hover:text-primary/80">
                      View all treatments & prices
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 w-full">
                <div className="relative w-full pb-[75%]">
                  <picture>
                    <source
                      srcSet={skinHeroImage}
                      type="image/webp"
                    />
                    <img
                      src={skinHeroImage}
                      alt="Aevia Skin clinic showcasing skin treatments"
                      className="absolute inset-0 h-full w-full border border-[#d9d0c4] object-cover loading:animate-pulse loading:blur-sm"
                      loading="eager"
                     
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

        {/* Signature Offers - surfaced high */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="hero-safe-padding">
            <div className="mx-auto mb-10 max-w-6xl text-center">
              <p className="eyebrow text-primary/80">Signature Offers</p>
              <h2 className="section-heading normal-case mt-4">Our Most-Booked Combinations</h2>
              <p className="mt-4 text-sm sm:text-base text-[#3f3a33]">
                Doctor-curated pairings that deliver natural, lasting results with fewer visits.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {signatureOffers.map((offer) => {
                const [mainTitle, subtitle] = offer.name.split('\n');
                const isAntiWrinkle = offer.name.toLowerCase().includes('anti-wrinkle');
                const ctaText = isAntiWrinkle ? 'Book Consultation' : (offer.bookingUrl === '#' ? offer.ctaText : 'Book Now');
                const onCtaClick = () => {
                  if (isAntiWrinkle) {
                    window.location.href = SKIN_CONSULTATION_URL;
                  } else if (offer.bookingUrl !== '#') {
                    window.open(offer.bookingUrl, '_blank');
                  }
                };
                return (
                  <div
                    key={offer.name}
                    className="card-surface flex h-full flex-col border border-[#d9d0c4] bg-white/95 p-8 text-center transition-all duration-300 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex flex-1 flex-col items-center">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111]">
                        {mainTitle}
                      </h3>
                      {subtitle && (
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-primary/80">
                          {subtitle}
                        </p>
                      )}
                      <span className="mt-4 text-xl font-semibold uppercase tracking-[0.1em] text-primary">
                        {offer.price}
                      </span>
                      <p className="mt-4 text-sm leading-relaxed text-[#3f3a33]">{offer.description}</p>
                      <ul className="mt-6 mb-4 space-y-2 text-left text-sm leading-relaxed text-[#3f3a33]/80">
                        {offer.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 leading-relaxed">
                            <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <hr className="my-4 border-[#d9d0c4]/80" />
                      <div className="text-[0.7rem] tracking-[0.18em] text-[#3f3a33]/70">
                        Normally {offer.normalPrice}. Consultation required before any prescription treatment.
                      </div>
                    </div>
                    <Button onClick={onCtaClick} variant="primary" className="mt-6 w-full">
                      {ctaText}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section className="bg-white py-16 md:py-24">
          <div className="hero-safe-padding">
            <div className="mx-auto mb-12 max-w-5xl text-center">
              <p className="eyebrow text-primary/80">Clinical Outcomes</p>
              <h2 className="section-heading normal-case mt-4">Before & Afters</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                Real client journeys guided by our doctors. Subtle shifts, refreshed structure, and skin that still feels unmistakably you.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {beforeAfterCases.map((result) => {
                return (
                  <figure
                    key={result.title}
                    className="group card-surface flex h-full flex-col border border-[#d9d0c4] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                  >
                    <div className="relative aspect-[4/5] w-full border-b border-[#d9d0c4] bg-secondary transition-transform duration-300 group-hover:scale-[1.015]">
                      <img
                        src={result.image}
                        alt={result.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="flex flex-1 flex-col gap-3 p-6">
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-primary/80">
                        {result.timeframe}
                      </p>
                      <h3 className="text-sm uppercase tracking-[0.2em] text-[#111]">
                        {result.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#3f3a33] flex-1">{result.summary}</p>
                      <div className="space-y-1 text-[0.7rem] uppercase tracking-[0.2em] text-[#3f3a33]/70">
                        <p className="text-[#111]">Protocol</p>
                        <p className="normal-case tracking-normal text-[#3f3a33]">{result.protocol}</p>
                      </div>
                      <Link
                        href={result.href}
                        className="text-xs tracking-[0.18em] text-primary transition-colors duration-150 hover:text-primary/80"
                      >
                        View treatment details
                      </Link>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <p className="mt-10 text-[0.7rem] tracking-[0.18em] text-center text-[#3f3a33]/60">
              Individual results vary; consultation required to determine the safest, most effective plan for you.
            </p>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-heading normal-case mb-6">Our Regenerative Treatments</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Science-backed procedures that work with your body's natural healing processes</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Link
                href="/categories/polynucleotides"
                className="card-surface block border border-[#d9d0c4] p-6 text-center transition-all duration-200 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
              >
                <Dna className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="text-sm uppercase tracking-[0.2em] text-[#111]">Polynucleotides</h3>
                <p className="mt-2 text-xs tracking-[0.18em] text-primary/80">From £250</p>
                <p className="mt-4 text-sm leading-relaxed text-[#3f3a33]">
                  DNA-based therapy that stimulates natural skin regeneration and hydration.
                </p>
                <span className="mt-5 inline-flex items-center justify-center text-xs tracking-[0.18em] text-primary">
                  Learn more
                </span>
              </Link>
              
              <Link
                href="/categories/skin-boosters"
                className="card-surface block border border-[#d9d0c4] p-6 text-center transition-all duration-200 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
              >
                <Droplet className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="text-sm uppercase tracking-[0.2em] text-[#111]">Skin Boosters</h3>
                <p className="mt-2 text-xs tracking-[0.18em] text-primary/80">From £250</p>
                <p className="mt-4 text-sm leading-relaxed text-[#3f3a33]">
                  Hyaluronic acid injections for deep hydration and improved skin quality.
                </p>
                <span className="mt-5 inline-flex items-center justify-center text-xs tracking-[0.18em] text-primary">
                  Learn more
                </span>
              </Link>
              
              <Link
                href="/categories/anti-wrinkle"
                className="card-surface block border border-[#d9d0c4] p-6 text-center transition-all duration-200 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
              >
                <Sparkles className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="text-sm uppercase tracking-[0.2em] text-[#111]">Anti-Wrinkle Injections</h3>
                <p className="mt-2 text-xs tracking-[0.18em] text-primary/80">From £160</p>
                <p className="mt-4 text-sm leading-relaxed text-[#3f3a33]">
                  Precision muscle relaxation for natural-looking wrinkle softening.
                </p>
                <span className="mt-5 inline-flex items-center justify-center text-xs tracking-[0.18em] text-primary">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Client Transformations */}
        <section className="bg-white py-16 md:py-24">
          <div className="hero-safe-padding">
            <div className="mx-auto mb-8 max-w-5xl text-center">
              <p className="eyebrow text-primary/80">Client Transformations</p>
              <h2 className="section-heading normal-case mt-4">Natural results led by doctors</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                Stories from clients who chose regenerative treatments for skin that looks rested, lifted, and unmistakably theirs.
              </p>
            </div>
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-4 border border-[#d9d0c4] px-6 py-3 tracking-[0.18em] text-[#111]">
                <div className="flex items-center gap-1 text-primary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <span className="text-sm text-primary">5.0</span>
                <span className="text-[0.68rem] text-[#3f3a33]/80">Verified Google reviews</span>
              </div>
            </div>
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                variant="primary"
                className="min-w-[220px]"
              >
                <a
                  href="https://maps.app.goo.gl/jpQNgXg92eiBesPD8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more client stories
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-heading normal-case mb-6">The Aevia Skin Consultation</h2>
              <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">20-Minute Clinical Session</h3>
                <p className="text-lg text-foreground/80 mb-6">
                  A comprehensive virtual clinical session including facial mapping, injectable options review, and tailored treatment plan using polynucleotides, boosters or anti-wrinkle injections.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Perfect for:</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-3">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                        First-time clients
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                        Unsure clients seeking guidance
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                        Personalised treatment planning
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Pricing:</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-3">
                        <Gift className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Free (usually £30, now complimentary for first-time clients)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Camera className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Virtual consultation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full sm:w-auto">
                    Book Your Consultation
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
                <h3 className="font-semibold mb-2">Book Consultation</h3>
                <p className="text-sm text-foreground/70">Schedule your Aevia Skin Consultation</p>
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

        {/* Booking Decision (binary) */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="section-heading normal-case mb-2">How should I book?</h2>
            <p className="text-foreground/70 mb-8">We guide first-timers to the right plan. Returning clients can book specific treatments directly.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">New to Aevia?</h3>
                <p className="text-sm text-foreground/70 mb-4">Start with a consultation.</p>
                <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full">
                  Book Consultation
                </BookingButton>
              </div>
              <div className="bg-accent/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Returning client?</h3>
                <p className="text-sm text-foreground/70 mb-4">Book a specific treatment.</p>
                <BookingButton href={SQUARE_SITE_URL} variant="primary" className="w-full">
                  Book Treatment
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* Removed Treatment Fees section per request */}

        {/* CTA */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="section-heading normal-case mb-6">Ready to Transform Your Skin?</h2>
            <p className="text-lg text-foreground/70 mb-8">Book your FREE Aevia Skin Consultation</p>
            <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full sm:w-auto">
              Book Your Aevia Skin Consultation
            </BookingButton>
          </div>
        </section>
      </div>
    </>
  );
}
