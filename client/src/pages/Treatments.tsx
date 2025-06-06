import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";

interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: string;
  bookingUrl: string;
}

interface TreatmentCategory {
  category: string;
  description?: string;
  treatments: Treatment[];
}

interface SignatureOffer {
  name: string;
  price: string;
  description: string;
  features: string[];
  normalPrice: string;
  bookingUrl: string;
}

const treatmentCategories: TreatmentCategory[] = [
  {
    category: "Performance & Transformative Coaching",
    description: "Transformative coaching for high-performers: athletes, executives, and other leaders dedicated to fulfilling their potential. Coached by Dr Manu Sidhu - integrating insights from mental health, peak performance science, and psychological flourishing.",
    treatments: [
      {
        name: "Discovery Call",
        description: "A 30-minute call to explore your goals, challenges, and whether we're the right fit to work together.",
        duration: "30min",
        price: "Complimentary",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711298&share&pId=2507365"
      },
      {
        name: "Clarity & Strategy Session",
        description: "A 60-minute analytic deep dive to understand your goals, obstacles, and systems. You'll receive a written summary with an implementation strategy. The £250 fee is credited if you continue into a coaching programme.",
        duration: "1h",
        price: "£250",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A23067524&share&pId=2507365"
      },
      {
        name: "Momentum 6",
        description: "A focused 6-session coaching programme over 8 weeks to sharpen your mindset, build momentum, and shift your approach to performance. Includes tools and support between sessions. (Split payment of 2 x £675 available).",
        duration: "1h (per session)",
        price: "£1,350",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711336&share&pId=2507365"
      },
      {
        name: "Transformation 12",
        description: "A deep 12-session journey over 3 months to rewire mindset, strengthen identity, and improve performance across work and life. For clients ready to commit to rich internal growth. (Split payment of 3 x £950 available).",
        duration: "1h (per session)",
        price: "£2,450",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711383&share&pId=2507365"
      },
      {
        name: "Elite Retainer",
        description: "Sustained coaching for high-performers dedicated to consistently improving, cultivating, and optimising their performance. Includes 4 sessions/month, quarterly/yearly reviews, and end-to-end goal fulfilment.",
        duration: "1h (per session)",
        price: "£12,000",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711403&share&pId=2507365"
      },
    ]
  },
  {
    category: "Aevia Skin Consultation",
    description: "Services to guide new clients through their skin treatment journey with us. Fee redeemable against first treatment.",
    treatments: [
      {
        name: "Virtual Consultation",
        description: "A full-face skin consultation for first-time clients. Includes clinical discussion, skin assessment and tailored treatment planning. *Consultation fee 100% redeemable against future treatments booked within 14 days.",
        duration: "20min",
        price: "Complimentary",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23069103&share&pId=2507365"
      },
      {
        name: "In Clinic Consultation",
        description: "A full-face skin consultation for first-time clients. Includes clinical facial mapping and treatment planning. Option to proceed with treatment during same visit. *Consultation fee 100% redeemable against future treatments booked within 14 days.",
        duration: "20min",
        price: "£50",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23094023&share&pId=2507365"
      },
    ]
  },
  {
    category: "Anti-Wrinkle Treatments (Smooth & Refine)",
    description: "Targeted muscle-relaxing treatments to soften lines, improve facial tension, and reduce sweating.",
    treatments: [
      {
        name: "One Area (Forehead, Frown or Crow's Feet)",
        description: "Choose one area to target. Designed to reduce lines while maintaining natural expression.",
        duration: "30min",
        price: "£180",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418601&share&pId=2507365"
      },
      {
        name: "Two Areas (Forehead, Frown or Crow's Feet)",
        description: "Choose two areas to target. Designed to reduce lines while maintaining natural expression.",
        duration: "45min",
        price: "£230",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418602&share&pId=2507365"
      },
      {
        name: "Three Areas (Forehead, Frown or Crow's Feet)",
        description: "Choose three areas to target. Designed to reduce lines while maintaining natural expression.",
        duration: "45min",
        price: "£280",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418603&share&pId=2507365"
      },
      {
        name: "Jawline Slimming (Masseter Reduction)",
        description: "Anti-wrinkle injections to relax the masseter muscles, helping slim the lower face and reduce jaw tension. Great when paired with a Nefertiti Neck Lift to sculpt the jaw.",
        duration: "45min",
        price: "£300",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22417788&share&pId=2507365"
      },
      {
        name: "Smile Lift (DAO Treatment)",
        description: "Subtle lift to corners of the mouth to soften downturned smile lines.",
        duration: "30min",
        price: "£120",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418524&share&pId=2507365"
      },
      {
        name: "Neck Lift (Nefertiti)",
        description: "Defined jawline and smoother neck contours using targeted lower-face injections - without surgery. A great addition to Masseter Reduction for ultimate jaw slimming.",
        duration: "45min",
        price: "£270",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23160548&share&pId=2507365"
      },
      {
        name: "Sweat Control",
        description: "Underarm treatment to reduce excessive sweating for up to 9 months.",
        duration: "1h",
        price: "£350",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418468&share&pId=2507365"
      },
    ]
  },
  {
    category: "Skin Boosters (Hydration & Glow)",
    description: "Advanced injectables to improve skin hydration, firmness, and radiance.",
    treatments: [
      {
        name: "Profhilo ®",
        description: "Remodels skin quality using hyaluronic acid spread across key zones, improving skin elasticity, collagen production and firmness. Best for dehydrated, crepey or ageing skin.",
        duration: "45min",
        price: "£300",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421064&share&pId=2507365"
      },
      {
        name: "Sunekos",
        description: "Stimulates collagen and elastin production using amino acids and HA. Ideal for dull or tired-looking skin.",
        duration: "45min",
        price: "£250",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421090&share&pId=2507365"
      },
    ]
  },
  {
    category: "Polynucleotides (Skin Repair & Regeneration)",
    description: "Injectable skin treatments that use purified DNA fragments to support long-term repair and tissue regeneration.",
    treatments: [
      {
        name: "Eye Rejuvenation (Plinest Eye)",
        description: "Targets under-eye hollowness, texture and dark circles with regenerative polynucleotides.",
        duration: "45min",
        price: "£250",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421332&share&pId=2507365"
      },
      {
        name: "Full Face Regeneration (Plinest)",
        description: "DNA-based injectable to improve skin density, elasticity and hydration. Suitable for early signs of ageing or post-inflammatory texture issues.",
        duration: "45min",
        price: "£300",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421256&share&pId=2507365"
      },
    ]
  },
];

const signatureOffers: SignatureOffer[] = [
  {
    name: "Anti-Wrinkle (3 Areas) + Polynucleotides",
    price: "£400",
    description: "Signature rejuvenation: smooth dynamic lines, revive tired skin, and stimulate natural skin repair - all in one visit.",
    features: [
      "Anti-wrinkle treatment for 3 areas (e.g. forehead, frown, crow's feet)",
      "Full-face polynucleotide skin booster",
      "One appointment, one seamless price",
    ],
    normalPrice: "£580",
    bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1627420&share&pId=2507365"
  },
  {
    name: "Advanced Skin Booster (Profhilo)",
    price: "£200",
    description: "Experience deep, lasting hydration and natural radiance with our award-winning injectable moisturiser.",
    features: [
      "First session of Profhilo",
      "Suitable for face, neck, or hands",
      "Ideal for dull, tired, or ageing skin",
      "Second session recommended in 4 weeks for optimal results"
    ],
    normalPrice: "£300",
    bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23323400&share&pId=2507365"
  }
];

export default function Treatments() {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState<null | 'skin' | 'mind'>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Step 2: Measure the pills nav
  useEffect(() => {
    const setNavHeightVar = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--nav-h",
          `${navRef.current.offsetHeight}px`
        );
      }
    };

    setNavHeightVar();
    window.addEventListener("resize", setNavHeightVar);
    return () => window.removeEventListener("resize", setNavHeightVar);
  }, []);

  // Step 4: Use both variables for scroll math
  useEffect(() => {
    const handleScroll = () => {
      const skin = document.getElementById("skin");
      const mind = document.getElementById("mind");
      if (!skin || !mind) return;

      const headerH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--header-h")
      ) || 80;
      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h")
      ) || 56;
      const visualLift = navH / 2; // Account for the floating effect

      const current = window.scrollY + headerH + navH - visualLift;

      if (current >= mind.offsetTop) setActiveSection("mind");
      else if (current >= skin.offsetTop) setActiveSection("skin");
      else setActiveSection(null);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = (treatment: Treatment) => {
    window.open(treatment.bookingUrl, "_blank");
  };

  const handleSignatureOfferBook = (bookingUrl: string) => {
    window.open(bookingUrl, "_blank");
  };

  // Step 4: Use both variables for smooth scroll
  const scrollToSection = (section: 'skin' | 'mind') => {
    const el = document.getElementById(section);
    if (!el) return;

    const headerH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--header-h")
    ) || 80;
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-h")
    ) || 56;
    const visualLift = navH / 2; // Account for the floating effect

    const yOffset = -(headerH + navH - visualLift);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(section);
  };

  // Step 5 & 6: Define topGap for consistent spacing (no buffer)
  const buffer = 0;
  const topGap = "calc(var(--header-h, 80px) + var(--nav-h, 56px))";

  return (
    <>
      <SEO 
        title="Medical Aesthetics Treatments - The Aevia"
        description="Discover our range of doctor-led medical aesthetics treatments. From polynucleotides to skin boosters, experience science-backed treatments for natural, lasting results."
        image="/hero_images/skin-model-2.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Our <span className="text-primary">Treatments</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover our range of professional treatments designed to enhance your natural beauty and well-being.
            </p>
          </div>
        </section>
        <div className="container mx-auto px-4 py-4">
          {/* Step 3: Stick the nav under the header with floating effect */}
          <nav
            ref={navRef}
            className="sticky z-30 flex justify-center mt-9"
            style={{ top: "calc(var(--header-h, 80px) + 1.5rem)" }}
          >
            <div className="flex gap-2 px-2 py-1 rounded-full border border-muted-foreground/10 bg-white/80 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60 -translate-y-1/2">
              {([
                { id: "skin", label: "Skin" },
                { id: "mind", label: "Mind" },
              ] as const).map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  aria-current={activeSection === id ? "true" : undefined}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:bg-primary/10",
                    activeSection === id
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-primary"
                  )}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* Signature Offers Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-3 tracking-wider text-primary">Signature One-Time Offers</h2>
              <p className="text-lg text-muted-foreground">Exclusive one-time experiences to refresh, restore, and revitalise</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {signatureOffers.map((offer) => (
                <div key={offer.name} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full text-center border border-[#e0ddd9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="flex-1 flex flex-col items-center">
                    <h3 className="text-2xl font-serif font-bold mb-2">{offer.name}</h3>
                    <span className="text-primary font-bold text-2xl mb-1">{offer.price}</span>
                    <p className="text-foreground/70 mb-4">{offer.description}</p>
                    <ul className="space-y-2 text-foreground/70 text-sm text-left mx-auto max-w-xs mb-3">
                      {offer.features.map(feature => (
                        <li key={feature} className="relative pl-6 leading-relaxed">
                          <Check className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <hr className="border-t border-[#e0ddd9] my-4 w-3/4 mx-auto" />
                    <div className="text-xs text-muted-foreground">Normally {offer.normalPrice} — exclusive introductory offer. A medical consultation is required before any prescription treatment.</div>
                  </div>
                  <Button 
                    onClick={() => handleSignatureOfferBook(offer.bookingUrl)}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                  >
                    Book Signature Offer
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Step 5: Add scroll margin to sections */}
          <div
            id="skin"
            style={{ scrollMarginTop: topGap }}
            className="mb-20 bg-muted py-12 px-6 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-2 tracking-wider font-serif">SKIN</h2>
              <p className="text-lg text-muted-foreground">Professional skin rejuvenation treatments and consultations</p>
            </div>
            {treatmentCategories
              .filter(cat => cat.category !== "Performance & Transformative Coaching")
              .map((cat) => (
                <div key={cat.category} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-2 text-center sm:text-left">{cat.category}</h2>
                  {cat.description && <p className="mb-6 text-muted-foreground text-center sm:text-left">{cat.description}</p>}
                  <div className="divide-y divide-gray-200 bg-white rounded-lg">
                    {cat.treatments.map((treatment, idx) => (
                      <div
                        key={treatment.name}
                        className="flex flex-col sm:flex-row py-6 px-4 transition-all duration-200 sm:hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                      >
                        <div className="flex-1 pr-8 sm:w-[70%]">
                          <div className="font-semibold text-lg mb-2">{treatment.name}</div>
                          <div className="text-muted-foreground text-sm">{treatment.description}</div>
                        </div>
                        <div className="flex flex-col justify-center items-end sm:w-[30%] mt-4 sm:mt-0">
                          <span className="text-primary font-medium mb-3 text-sm">
                            {treatment.price} · {treatment.duration}
                          </span>
                          <Button
                            variant="ghost"
                            onClick={() => handleBookNow(treatment)}
                            className="text-primary border border-primary hover:bg-primary/10 text-sm px-3 py-1 rounded-full"
                          >
                            {cat.category === "Anti-Wrinkle Treatments (Smooth & Refine)" || 
                             cat.category === "Skin Boosters (Hydration & Glow)" || 
                             cat.category === "Polynucleotides (Skin Repair & Regeneration)" 
                             ? "Book Treatment" 
                             : "Book Consultation"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div
            id="mind"
            style={{ scrollMarginTop: topGap }}
            className="bg-muted py-12 px-6 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-2 tracking-wider font-serif">MIND</h2>
              <p className="text-lg text-muted-foreground">Transformative coaching for high-performers</p>
            </div>
            {treatmentCategories
              .filter(cat => cat.category === "Performance & Transformative Coaching")
              .map((cat) => (
                <div key={cat.category} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-2 text-center sm:text-left">{cat.category}</h2>
                  {cat.description && <p className="mb-6 text-muted-foreground text-center sm:text-left">{cat.description}</p>}
                  <div className="divide-y divide-gray-200 bg-white rounded-lg">
                    {cat.treatments.map((treatment, idx) => (
                      <div
                        key={treatment.name}
                        className="flex flex-col sm:flex-row py-6 px-4 transition-all duration-200 sm:hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                      >
                        <div className="flex-1 pr-8 sm:w-[70%]">
                          <div className="font-semibold text-lg mb-2">{treatment.name}</div>
                          <div className="text-muted-foreground text-sm">{treatment.description}</div>
                        </div>
                        <div className="flex flex-col justify-center items-end sm:w-[30%] mt-4 sm:mt-0">
                          <span className="text-primary font-medium mb-3 text-sm">
                            {treatment.price} · {treatment.duration}
                          </span>
                          <Button
                            variant="ghost"
                            onClick={() => handleBookNow(treatment)}
                            className="text-primary border border-primary hover:bg-primary/10 text-sm px-3 py-1 rounded-full"
                          >
                            Book Session
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
} 