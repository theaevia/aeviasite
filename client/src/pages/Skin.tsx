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
import masseterImage from "@assets/before_afters/masseter-1.png";
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
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                  Aevia Skin: <span className="text-primary">Regenerative Aesthetics</span>
                </h1>
                {/* Trust bar */}
                <p className="text-sm md:text-base text-foreground/70 mb-4">
                  Doctor-led • King’s Cross • Subtle, natural results
                </p>
                <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                  Non-invasive skin longevity treatments that enhance your natural beauty through regenerative medicine, without the need for fillers.
                </p>
                <div className="w-full sm:w-auto text-center">
                  <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full sm:w-auto">
                    Book Consultation
                  </BookingButton>
                  <div className="mt-3 text-sm text-center">
                    <Link href="/treatments#skin" className="text-primary/80 hover:text-primary underline underline-offset-4">
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
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg loading:blur-sm loading:animate-pulse"
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
        <section className="py-12 md:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-3 tracking-wider text-primary">Signature Offers</h2>
              <p className="text-lg text-muted-foreground">Our most-booked combinations for natural, lasting results.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div key={offer.name} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full text-center border border-[#e0ddd9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <div className="flex-1 flex flex-col items-center">
                      <h3 className="text-2xl font-serif font-bold mb-1">{mainTitle}</h3>
                      {subtitle && <p className="text-base text-foreground/60 font-normal mb-2">{subtitle}</p>}
                      <span className="text-primary font-normal text-2xl mb-1">{offer.price}</span>
                      <p className="text-foreground/70 mb-4">{offer.description}</p>
                      <ul className="space-y-2 text-foreground/70 text-sm text-left mx-auto max-w-xs mb-3">
                        {offer.features.map(feature => (
                          <li key={feature} className="relative pl-6 leading-relaxed">
                            <Check size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <hr className="border-t border-[#e0ddd9] my-4 w-3/4 mx-auto" />
                      <div className="text-xs text-muted-foreground">Normally {offer.normalPrice}. A medical consultation is required before any prescription treatment.</div>
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
                <p className="text-primary font-medium mb-2">From £250</p>
                <p className="text-foreground/70 text-sm mb-3">DNA-based therapy that stimulates natural skin regeneration and hydration</p>
                <span className="text-sm text-primary underline underline-offset-4">Learn more</span>
              </Link>
              
              <Link href="/categories/skin-boosters" className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl block">
                <Droplet className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-1">Skin Boosters</h3>
                <p className="text-primary font-medium mb-2">From £250</p>
                <p className="text-foreground/70 text-sm mb-3">Hyaluronic acid injections for deep hydration and improved skin quality</p>
                <span className="text-sm text-primary underline underline-offset-4">Learn more</span>
              </Link>
              
              <Link href="/categories/anti-wrinkle" className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl block">
                <Sparkles className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-1">Anti-Wrinkle Injections</h3>
                <p className="text-primary font-medium mb-2">From £160</p>
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
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-200"
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
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">The Aevia Skin Consultation</h2>
              <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">20-Minute Clinical Session</h3>
                <p className="text-lg text-foreground/80 mb-6">
                  A comprehensive virtual clinical session including facial mapping, injectable options review, and tailored treatment plan using polynucleotides, boosters or anti-wrinkle injections.
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
                        <span>Free (usually £30, now complimentary for first-time clients)</span>
                      </li>
                      <li className="grid grid-cols-[20px_1fr] gap-3 items-start">
                        <Camera className="h-5 w-5 text-primary" />
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
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-2">How should I book?</h2>
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Transform Your Skin?</h2>
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
