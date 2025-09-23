import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "wouter";
import SEO from "@/components/SEO";
import { signatureOffers } from "@/data/signatureOffers";
import { treatmentCategories, Treatment } from "@/data/treatments";

export default function Treatments() {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState<null | "skin" | "mind">(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Measure the pills nav so we can offset scroll correctly
  useEffect(() => {
    const setNavHeightVar = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty("--nav-h", `${navRef.current.offsetHeight}px`);
      }
    };
    setNavHeightVar();
    window.addEventListener("resize", setNavHeightVar);
    return () => window.removeEventListener("resize", setNavHeightVar);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const skin = document.getElementById("skin");
      const mind = document.getElementById("mind");
      if (!skin || !mind) return;

      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
      const navH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 56;
      const visualLift = navH / 2;

      const current = window.scrollY + headerH + navH - visualLift;

      if (current >= mind.offsetTop) setActiveSection("mind");
      else if (current >= skin.offsetTop) setActiveSection("skin");
      else setActiveSection(null);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = (treatment: Treatment) => {
    window.open(treatment.bookingUrl, "_blank");
  };

  const handleSignatureOfferBook = (bookingUrl: string) => {
    window.open(bookingUrl, "_blank");
  };

  // Scroll to an in-page anchor on load or hash change, with proper offsets
  useEffect(() => {
    const scrollFromHash = () => {
      const raw = window.location.hash || "";
      if (!raw) return;
      const slug = decodeURIComponent(raw.replace("#", ""));
      const el = document.getElementById(slug);
      if (!el) return;

      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
      const navH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 56;
      const visualLift = navH / 2;

      const yOffset = -(headerH + navH - visualLift);
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection("skin");
    };

    const id = window.setTimeout(scrollFromHash, 0);
    window.addEventListener("hashchange", scrollFromHash);
    return () => {
      clearTimeout(id);
      window.removeEventListener("hashchange", scrollFromHash);
    };
  }, []);

  // Smooth scroll helper for the pills
  const scrollToSection = (section: "skin" | "mind") => {
    const el = document.getElementById(section);
    if (!el) return;

    const headerH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
    const navH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 56;
    const visualLift = navH / 2;

    const yOffset = -(headerH + navH - visualLift);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(section);
  };

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
              Discover our range of professional treatments designed to enhance your natural beauty and
              well-being.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-4">
          {/* Floating pills nav */}
          <nav
            ref={navRef}
            className="sticky z-30 flex justify-center mt-9"
            style={{ top: "calc(var(--header-h, 80px) + 1.5rem)" }}
          >
            <div className="flex gap-2 px-2 py-1 rounded-full border border-muted-foreground/10 bg-white/80 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60 -translate-y-1/2">
              {[
                { id: "skin", label: "Skin" },
                { id: "mind", label: "Mind" },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id as "skin" | "mind");
                  }}
                  aria-current={activeSection === id ? "true" : undefined}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:bg-primary/10",
                    activeSection === id ? "bg-primary text-primary-foreground shadow" : "text-primary"
                  )}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* Signature Offers */}
          <div id="signature-offers" className="mb-20" style={{ scrollMarginTop: topGap }}>
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-3 tracking-wider text-primary">
                Signature Offers
              </h2>
              <p className="text-lg text-muted-foreground">
                Our most-booked combinations for natural, lasting results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {signatureOffers.map((offer) => {
                const [mainTitle, subtitle] = offer.name.split("\n");
                const hasBooking = Boolean(offer.bookingUrl && offer.bookingUrl !== "#");
                const ctaText = hasBooking ? "Book Treatment" : "Book Consultation";
                return (
                  <div
                    key={offer.name}
                    className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-full text-center border border-[#e0ddd9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    <div className="flex-1 flex flex-col items-center">
                      <h3 className="text-2xl font-serif font-bold mb-1">{mainTitle}</h3>
                      {subtitle && (
                        <p className="text-base text-foreground/60 font-normal mb-2">{subtitle}</p>
                      )}
                      <span className="text-primary font-bold text-2xl mb-1">{offer.price}</span>
                      <p className="text-foreground/70 mb-4">{offer.description}</p>
                      <ul className="space-y-2 text-foreground/70 text-sm text-left mx-auto max-w-xs mb-3">
                        {offer.features.map((feature) => (
                          <li key={feature} className="relative pl-6 leading-relaxed">
                            <Check className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <hr className="border-t border-[#e0ddd9] my-4 w-3/4 mx-auto" />
                      <div className="text-xs text-muted-foreground">
                        Normally {offer.normalPrice}. A medical consultation is required before any
                        prescription treatment.
                      </div>
                    </div>
                    <Button
                      onClick={() =>
                        hasBooking
                          ? handleSignatureOfferBook(offer.bookingUrl)
                          : (window.location.href = "/go/skin_consultations")
                      }
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                    >
                      {ctaText}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SKIN */}
          <div id="skin" style={{ scrollMarginTop: topGap }} className="mb-20 bg-muted py-12 px-6 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-2 tracking-wider font-serif">SKIN</h2>
              <p className="text-lg text-muted-foreground">
                Professional skin rejuvenation treatments and consultations
              </p>
            </div>

            {treatmentCategories
              .filter((cat) => cat.category !== "Performance & Transformative Coaching")
              .sort((a, b) => {
                // Keep your preferred order
                const order: Record<string, number> = {
                  "skin-consultation": 5,
                  "anti-wrinkle": 10,
                  "skin-boosters": 20,
                  polynucleotides: 30,
                  "bio-voluminisation": 40,
                  microneedling: 50,
                  "clinical-peels": 60,
                };
                const ai = order[a.slug] ?? 1000;
                const bi = order[b.slug] ?? 1000;
                return ai - bi;
              })
              .map((cat) => {
                // Explicit rule: if this category is the Skin Consultations category, always show Book Consultation
                const isSkinConsultationsCategory =
                  cat.slug === "skin-consultation" || /consult/i.test(cat.category);

                return (
                  <div key={cat.category} id={cat.slug} style={{ scrollMarginTop: topGap }} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-2 text-center sm:text-left">{cat.category}</h2>
                    {cat.description && (
                      <p className="mb-6 text-muted-foreground text-center sm:text-left">{cat.description}</p>
                    )}
                    <div className="divide-y divide-gray-200 bg-white rounded-lg">
                      {cat.treatments.map((treatment) => {
                        const hasBooking = Boolean(treatment.bookingUrl && treatment.bookingUrl !== "#");

                        // Decide label and click behavior
                        const label = isSkinConsultationsCategory
                          ? "Book Consultation"
                          : hasBooking
                          ? "Book Treatment"
                          : "Book Consultation";

                        const onClick = () => {
                          if (isSkinConsultationsCategory || !hasBooking) {
                            window.location.href = "/go/skin_consultations";
                          } else {
                            handleBookNow(treatment);
                          }
                        };

                        return (
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
                                {treatment.description.split("\n").map((line, idx, arr) => (
                                  <span key={idx}>
                                    {line}
                                    {idx !== arr.length - 1 && <br />}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-end sm:w-[30%] mt-4 sm:mt-0">
                              <span className="text-primary font-medium mb-3 text-sm">
                                {treatment.price} · {treatment.duration}
                                {treatment.slug === "lower-face-contour-duo" ? " · 2 services" : ""}
                              </span>
                              <Button
                                variant="ghost"
                                onClick={onClick}
                                className="text-primary border border-primary hover:bg-primary/10 text-sm px-3 py-1 rounded-full"
                              >
                                {label}
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* MIND */}
          <div id="mind" style={{ scrollMarginTop: topGap }} className="bg-muted py-12 px-6 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-2 tracking-wider font-serif">MIND</h2>
              <p className="text-lg text-muted-foreground">Transformative coaching for high-performers</p>
            </div>
            {treatmentCategories
              .filter((cat) => cat.category === "Performance & Transformative Coaching")
              .map((cat) => (
                <div key={cat.category} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-2 text-center sm:text-left">{cat.category}</h2>
                  {cat.description && (
                    <p className="mb-6 text-muted-foreground text-center sm:text-left">{cat.description}</p>
                  )}
                  <div className="divide-y divide-gray-200 bg-white rounded-lg">
                    {cat.treatments.map((treatment) => (
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
                            {treatment.description.split("\n").map((line, idx, arr) => (
                              <span key={idx}>
                                {line}
                                {idx !== arr.length - 1 && <br />}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-end sm:w-[30%] mt-4 sm:mt-0">
                          <span className="text-primary font-medium mb-3 text-sm">
                            {treatment.price} • {treatment.duration}
                            {treatment.slug === "lower-face-contour-duo" ? " • 2 services" : ""}
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
