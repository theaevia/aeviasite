import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Check } from "lucide-react";

import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { treatmentCategories, Treatment } from "@/data/treatments";
import { signatureOffers } from "@/data/signatureOffers";
import {
  MICRONEEDLING_REG_URL,
  MICRONEEDLING_REGEN_URL,
  SKIN_CONSULTATION_URL,
} from "@/lib/bookingUrls";
import treatmentsHeroImage from "@assets/hero_images/skin-model-2.webp";

const sections: Array<{ id: "skin" | "mind"; label: string }> = [
  { id: "skin", label: "Skin" },
  { id: "mind", label: "Mind" },
];

export default function Treatments() {
  const [activeSection, setActiveSection] = useState<null | "skin" | "mind">(null);

  useEffect(() => {
    const handleScroll = () => {
      const skin = document.getElementById("skin");
      const mind = document.getElementById("mind");
      if (!skin || !mind) return;

      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
      const navH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 0;
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
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 0;
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

  const scrollToSection = (section: "skin" | "mind") => {
    const el = document.getElementById(section);
    if (!el) return;

    const headerH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
    const navH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 0;
    const visualLift = navH / 2;

    const yOffset = -(headerH + navH - visualLift);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(section);
  };

  const topGap = "var(--header-h, 80px)";

  return (
    <>
      <SEO
        title="The Aevia | Aesthetic & Coaching Services | King's Cross, London"
        description="Discover our range of doctor-led medical aesthetics treatments. With a focus on regenerative aesthetics, experience science-backed treatments for natural, lasting results."
        image="/hero_images/skin-model-2.webp"
      />
      <div className="min-h-screen">
        <section className="bg-white py-20 lg:py-28 text-[#111]">
          <div className="hero-safe-padding">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.07fr_0.93fr]">
              <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                <p className="eyebrow text-primary/80">Doctor-led • King’s Cross</p>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold normal-case mt-4 leading-tight">
                  Our Treatments
                </h1>
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                  Regenerative aesthetics, advanced injectables, and mindset coaching delivered by doctors.
                  Each plan is built around longevity, subtle definition, and how you want to feel.
                </p>
                <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:items-center">
                  {sections.map(({ id, label }) => {
                    const isActive = activeSection === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => scrollToSection(id)}
                        aria-pressed={isActive}
                        className={cn(
                          "w-full sm:w-auto inline-flex items-center justify-center rounded-none border px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                          isActive
                            ? "border-transparent bg-primary text-primary-foreground shadow"
                            : "border-[#d9d0c4] text-primary hover:bg-primary/10"
                        )}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="order-1 w-full lg:order-2">
                <div className="relative w-full border border-[#d9d0c4] bg-secondary pb-[75%]">
                  <picture>
                    <source srcSet={treatmentsHeroImage} type="image/webp" />
                    <img
                      src={treatmentsHeroImage}
                      alt="Aevia treatment room prepared for a client session"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="eager"
                      width={1600}
                      height={1200}
                      sizes="(max-width: 1024px) 100vw, 1600px"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="signature-offers"
          style={{ scrollMarginTop: topGap }}
          className="bg-secondary py-16 md:py-24"
        >
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
                const [mainTitle, subtitle] = offer.name.split("\n");
                const isWaitlist = !offer.bookingUrl || offer.bookingUrl === "#";
                const ctaText = isWaitlist ? offer.ctaText : offer.ctaText || "Book Now";
                const onCtaClick = () => {
                  if (isWaitlist) {
                    window.location.href = SKIN_CONSULTATION_URL;
                    return;
                  }
                  handleSignatureOfferBook(offer.bookingUrl);
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
                      <hr className="my-4 w-full border-[#d9d0c4]/80" />
                      <div className="text-[0.7rem] tracking-[0.18em] text-[#3f3a33]/70">
                        Normally {offer.normalPrice}. Consultation required before any prescription
                        treatment.
                      </div>
                    </div>
                    <Button
                      onClick={onCtaClick}
                      className={cn(
                        "mt-6 w-full rounded-none px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                        isWaitlist
                          ? "border border-[#d9d0c4] bg-white text-primary hover:bg-primary/5"
                          : "border border-transparent bg-primary text-primary-foreground hover:bg-primary/85"
                      )}
                    >
                      {ctaText}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="skin"
          style={{ scrollMarginTop: topGap }}
          className="bg-white py-16 md:py-24"
        >
          <div className="hero-safe-padding">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="eyebrow text-primary/80">Aevia Skin</p>
                <h2 className="section-heading normal-case mt-4">Medical Aesthetics</h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                  Regenerative injectables, skin boosters, and contouring protocols designed for subtle
                  definition and long-term collagen health.
                </p>
              </div>
              {treatmentCategories
                .filter((cat) => cat.category !== "Performance & Transformative Coaching")
                .sort((a, b) => {
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
                  const isSkinConsultationsCategory =
                    cat.slug === "skin-consultation" || /consult/i.test(cat.category);

                  const treatmentsToRender =
                    cat.slug === "microneedling"
                      ? [
                          {
                            name: "Classic Microneedling (HA-Infused)",
                            description:
                              "Microneedling refined with a hyaluronic acid infusion to soften fine lines, smooth texture, and restore luminosity.",
                            duration: "60min",
                            price: "£200",
                            bookingUrl: MICRONEEDLING_REG_URL,
                            slug: "microneedling",
                          },
                          {
                            name: "Regenerative Microneedling (Exosomes + Polynucleotides)",
                            description:
                              "Regenerative microneedling that infuses purified polynucleotides plus the V-Tech exosome complex for deeper repair, faster recovery, and firmer skin.",
                            duration: "60min",
                            price: "£280",
                            bookingUrl: MICRONEEDLING_REGEN_URL,
                            slug: "microneedling",
                          },
                        ] satisfies Treatment[]
                      : cat.treatments;

                  return (
                    <div
                      key={cat.category}
                      id={cat.slug}
                      style={{ scrollMarginTop: topGap }}
                      className="mb-16"
                    >
                      <div className="mb-8 text-center sm:text-left">
                        <h3 className="section-heading normal-case text-[1.75rem] leading-tight">
                          {cat.category}
                        </h3>
                        {cat.description && (
                          <p className="mt-4 text-sm leading-relaxed text-[#3f3a33]">
                            {cat.description}
                          </p>
                        )}
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        {treatmentsToRender.map((treatment) => {
                          const hasBooking =
                            Boolean(treatment.bookingUrl && treatment.bookingUrl !== "#");

                          const label = isSkinConsultationsCategory
                            ? "Book consultation"
                            : hasBooking
                            ? "Book treatment"
                            : "Book consultation";

                          const onClick = () => {
                            if (isSkinConsultationsCategory || !hasBooking) {
                              window.location.href = SKIN_CONSULTATION_URL;
                            } else {
                              handleBookNow(treatment);
                            }
                          };

                          const priceDisplay = `${treatment.price} · ${treatment.duration}${
                            treatment.slug === "lower-face-contour-duo" ? " · 2 services" : ""
                          }`;

                          return (
                            <div
                              key={treatment.name}
                              className="card-surface flex h-full flex-col border border-[#d9d0c4] bg-white/95 p-6 transition-all duration-200 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
                            >
                              <div className="flex flex-1 flex-col gap-3 text-left">
                                <h4 className="text-base font-semibold text-[#111]">
                                  <Link
                                    href={`/treatments/${treatment.slug}`}
                                    className="text-[#111] transition-colors duration-150 hover:text-primary"
                                  >
                                    {treatment.name}
                                  </Link>
                                </h4>
                                <div className="text-sm leading-relaxed text-[#3f3a33]">
                                  {treatment.description.split("\n").map((line, idx, arr) => (
                                    <span key={`${treatment.slug}-${idx}`}>
                                      {line}
                                      {idx !== arr.length - 1 && <br />}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="mt-6 border-t border-[#d9d0c4]/80 pt-4">
                                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                                    {priceDisplay}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    onClick={onClick}
                                    className="border border-primary/70 px-5 py-2 text-sm normal-case tracking-normal text-primary hover:border-primary hover:text-primary"
                                  >
                                    {label}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        <section
          id="mind"
          style={{ scrollMarginTop: topGap }}
          className="bg-secondary py-16 md:py-24"
        >
          <div className="hero-safe-padding">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="eyebrow text-primary/80">Aevia Mind</p>
                <h2 className="section-heading normal-case mt-4">Coaching for High Performers</h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3f3a33]">
                  High-touch coaching programmes led by Dr Manu Sidhu to optimise mindset, performance,
                  and fulfilment beyond the clinic room.
                </p>
              </div>
              {treatmentCategories
                .filter((cat) => cat.category === "Performance & Transformative Coaching")
                .map((cat) => (
                  <div key={cat.category} className="mb-16">
                    <div className="grid gap-6 md:grid-cols-2">
                      {cat.treatments.map((treatment) => {
                        const priceDisplay = `${treatment.price} · ${treatment.duration}`;
                        return (
                          <div
                            key={treatment.name}
                            className="card-surface flex h-full flex-col border border-[#d9d0c4] bg-white p-6 transition-all duration-200 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
                          >
                            <div className="flex flex-1 flex-col gap-3 text-left">
                              <h4 className="text-base font-semibold text-[#111]">
                                <Link
                                  href={`/treatments/${treatment.slug}`}
                                  className="text-[#111] transition-colors duration-150 hover:text-primary"
                                >
                                  {treatment.name}
                                </Link>
                              </h4>
                              <div className="text-sm leading-relaxed text-[#3f3a33]">
                                {treatment.description.split("\n").map((line, idx, arr) => (
                                  <span key={`${treatment.slug}-${idx}`}>
                                    {line}
                                    {idx !== arr.length - 1 && <br />}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="mt-6 border-t border-[#d9d0c4]/80 pt-4">
                              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                                  {priceDisplay}
                                </span>
                                <Button
                                  variant="ghost"
                                  onClick={() => handleBookNow(treatment)}
                                  className="border border-primary/70 px-5 py-2 text-sm normal-case tracking-normal text-primary hover:border-primary hover:text-primary"
                                >
                                  Book session
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
