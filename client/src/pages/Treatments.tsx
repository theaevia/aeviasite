import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";
import { signatureOffers, SignatureOffer } from "@/data/signatureOffers";
import { Link } from "wouter";
import { treatmentCategories, Treatment, TreatmentCategory } from "@/data/treatments";

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
        title="The Aevia | Aesthetic & Coaching Services | King's Cross, London"
        description="Discover our range of doctor-led medical aesthetics treatments. With a focus on regenerative aesthetics, experience science-backed treatments for natural, lasting results."
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
              <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-3 tracking-wider text-primary">Signature Offers</h2>
              <p className="text-lg text-muted-foreground">Our most popular treatments to refresh, restore, and revitalise</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {signatureOffers.map((offer) => {
                const [mainTitle, subtitle] = offer.name.split('\n');
                return (
                  <div key={offer.name} className={`bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full text-center border border-[#e0ddd9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ${signatureOffers.length === 3 ? 'lg:col-span-1' : ''}`}>
                    <div className="flex-1 flex flex-col items-center">
                      <h3 className="text-2xl font-serif font-bold mb-1">{mainTitle}</h3>
                      {subtitle && <p className="text-base text-foreground/60 font-normal mb-2">{subtitle}</p>}
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
              })}
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
                          <div className="font-semibold text-lg mb-2">
                            <Link href={`/treatments/${treatment.slug}`} className="hover:underline text-primary">
                              {treatment.name}
                            </Link>
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {treatment.description.split('\n').map((line, idx) => (
                              <span key={idx}>
                                {line}
                                {idx !== treatment.description.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </div>
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
                          <div className="font-semibold text-lg mb-2">
                            <Link href={`/treatments/${treatment.slug}`} className="hover:underline text-primary">
                              {treatment.name}
                            </Link>
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {treatment.description.split('\n').map((line, idx) => (
                              <span key={idx}>
                                {line}
                                {idx !== treatment.description.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </div>
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