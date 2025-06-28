import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Brain, Star, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import { BookingButton } from "@/components/BookingButton";
import SEO from "@/components/SEO";
import clinicImage from "@assets/hero_images/aevia-clinic3.webp";
import clinicImage800 from "@assets/hero_images/aevia-clinic3-800w.webp";
import mindCoachingStairs from "@assets/hero_images/mind-coaching-water.webp";
import skinModel4 from "@assets/hero_images/royalty-free-skin4.webp";
import Map from "@/components/Map";

// Signature offers data
const signatureOffers = [
  {
    name: "Wrinkle Reset\nAnti-Wrinkle (3 Areas) + Polynucleotides",
    price: "£400",
    description: "Signature rejuvenation: smooth dynamic lines, revive tired skin, and stimulate natural skin repair - all in one visit.",
    features: [
      "Smooth fine lines, wrinkles and tired skin",
      "Anti-wrinkle treatment for 3 areas (e.g. forehead, frown, crow's feet)",
      "Full-face polynucleotide skin booster",
      "One appointment, one seamless price",
    ],
    normalPrice: "£580",
    bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1627420&share&pId=2507365",
    ctaText: "Book My Wrinkle Reset"
  },
  {
    name: "Glow Revival\nFull-Face Profhilo + Under-Eye Polynucleotides",
    price: "£450",
    description: "Experience deep, lasting hydration and under-eye radiance with a pairing of Profhilo and under-eye Polynucleotides.",
    features: [
      "Face and eyes treated in a single session",
      "High-definition glow and hydration from Profhilo",
      "Under-eye brightening and rejuvenation from Polynucleotides",
      "Second session recommended in 4 weeks for optimal results"
    ],
    normalPrice: "£550",
    bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1638856&share&pId=2507365",
    ctaText: "Book My Glow Revival"
  },
  {
    name: "The Perfect Tone Protocol\nComing Soon",
    price: "TBA",
    description: "A comprehensive, doctor-led protocol for even tone and stubborn pigmentation. Combines advanced clinical peels, microneedling, and targeted skincare for visible, lasting results.",
    features: [
      "Multi-step protocol for hyperpigmentation",
      "Doctor-led assessment and monitoring",
      "Combination of peels, microneedling, and prescription skincare",
      "Personalised aftercare and support",
      "Results-driven, safe for all skin types"
    ],
    normalPrice: "TBA",
    bookingUrl: "#",
    ctaText: "Join Waitlist"
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSignatureOfferBook = (bookingUrl: string) => {
    if (bookingUrl !== "#") {
      window.open(bookingUrl, "_blank");
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % signatureOffers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + signatureOffers.length) % signatureOffers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const renderOfferCard = (offer: any, index: number) => {
    const [mainTitle, subtitle] = offer.name.split('\n');
    return (
      <div key={offer.name} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full text-center border border-[#e0ddd9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-2xl font-serif font-bold mb-1">{mainTitle}</h3>
          {subtitle && <p className="text-base text-foreground/60 font-normal mb-2">{subtitle}</p>}
          <span className="text-primary font-bold text-2xl mb-1">{offer.price}</span>
          <p className="text-foreground/70 mb-4">{offer.description}</p>
          <ul className="space-y-2 text-foreground/70 text-sm text-left mx-auto max-w-xs mb-3 md:block hidden">
            {offer.features.map((feature: string) => (
              <li key={feature} className="relative pl-6 leading-relaxed">
                <Check className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <hr className="border-t border-[#e0ddd9] my-4 w-3/4 mx-auto" />
          <div className="text-xs text-muted-foreground">Normally {offer.normalPrice}. A medical consultation is required before any prescription treatment.</div>
        </div>
        <Button 
          onClick={() => handleSignatureOfferBook(offer.bookingUrl)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
        >
          {offer.ctaText}
        </Button>
      </div>
    );
  };

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
                Doctor-Led Transformation for{" "}
                <span className="text-primary">Skin and Mind</span>
              </h1>
              <p className="text-lg lg:text-xl text-foreground/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              Medical aesthetics and performance coaching for those who value natural, regenerative and long-lasting results. Based in Kings Cross, London.
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
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8 md:mb-16">
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
            <div className="grid md:grid-cols-3 gap-8 mb-8 md:mb-16">
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
                    fetchPriority="high"
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
        <section className="py-12 md:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <ServiceCard
                title="Aevia Skin"
                subtitle="Medical Aesthetics"
                description="Science-backed, regenerative approaches that restore your skin's natural quality. Results that feel like you, only fresher."
                image={skinModel4}
                features={["The Aevia Skin Consultation", "Polynucleotides", "Skin Boosters", "Anti-wrinkle Injections"]}
                ctaText="Learn More About Skin Treatments"
                onCtaClick={() => window.location.href = "/skin"}
                imagePositionTop={false}
                objectPosition="center 30%"
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

        {/* Signature Offers Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-3 tracking-wider text-primary">Signature Offers</h2>
              <p className="text-lg text-muted-foreground">Our most popular treatments to refresh, restore, and revitalise</p>
            </div>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {signatureOffers.map((offer) => renderOfferCard(offer, 0))}
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden">
              <div className="relative px-8">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {signatureOffers.map((offer, index) => (
                      <div key={offer.name} className="w-full flex-shrink-0">
                        {renderOfferCard(offer, index)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                  aria-label="Previous offer"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                  aria-label="Next offer"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {signatureOffers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-primary w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-2 text-sm text-muted-foreground">
                  {currentSlide + 1} of {signatureOffers.length}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram-Style Testimonials */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Client Transformations</h2>
              <p className="text-lg text-foreground/70">Real results from our community</p>
            </div>
            
            {/* Trust Metric */}
            <div className="text-center mb-4 md:mb-6">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 md:py-4">
                <div className="flex items-center space-x-1 mr-3">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <Star className="w-5 h-5 text-primary fill-current" />
                </div>
                <span className="text-xl font-bold text-primary">5.0</span>
                <span className="text-foreground/70 ml-2 font-medium">from our clients</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-12">
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
        <section className="py-12 md:py-20 bg-white">
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
                  <p className="text-foreground/70">
                    Daily: 12:00 PM - 7:00 PM
                  </p>
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
    </>
  );
}