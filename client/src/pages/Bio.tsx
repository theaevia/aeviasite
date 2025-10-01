import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryItems } from "@/data/galleryItems";
import { SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

type Intent = "quiz" | "consult";

const UTM_SOURCE_DEFAULT = "bio";
const UTM_CAMPAIGN_DEFAULT = "bio";
const UTM_MEDIUM_FALLBACK = "bio";

function track(event: string, data?: Record<string, any>) {
  try {
    // Push to dataLayer if present; otherwise log as a fallback
    const payload = { event, ...(data || {}) };
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push(payload);
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.debug("track:", payload);
    }
  } catch (_) {
    // no-op
  }
}

export default function BioPage() {
  const [intent, setIntent] = useState<Intent>("quiz");
  const [utmSource, setUtmSource] = useState<string>(UTM_SOURCE_DEFAULT);
  const [utmMedium, setUtmMedium] = useState<string>(UTM_MEDIUM_FALLBACK);
  const [utmCampaign, setUtmCampaign] = useState<string>(UTM_CAMPAIGN_DEFAULT);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [isGalleryActive, setIsGalleryActive] = useState(false);
  const [hasTrackedImpression, setHasTrackedImpression] = useState(false);
  const seeAllResultsHref = "/gallery";
  const featuredGalleryItems = useMemo(() => galleryItems.slice(0, 4), []);

  // Parse URL query once on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qIntent = params.get("intent");
    const source = params.get("utm_source") || UTM_SOURCE_DEFAULT;
    let medium = params.get("utm_medium") || null;

    if (!medium || medium === "bio") {
      if (source === "instagram") medium = "instagram";
      else if (source === "tiktok") medium = "tiktok";
    }

    if (!medium || medium === "bio") {
      const referrer = typeof document !== "undefined" ? document.referrer.toLowerCase() : "";
      if (referrer.includes("instagram")) medium = "instagram";
      else if (referrer.includes("tiktok")) medium = "tiktok";
    }

    if (!medium || medium === "bio") {
      const ua = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
      if (ua.includes("instagram")) medium = "instagram";
      else if (ua.includes("tiktok")) medium = "tiktok";
    }

    if (!medium) {
      medium = UTM_MEDIUM_FALLBACK;
    }

    const campaign = params.get("utm_campaign") || UTM_CAMPAIGN_DEFAULT;

    setUtmSource(source);
    setUtmMedium(medium);
    setUtmCampaign(campaign);

    if (qIntent === "consult") setIntent("consult");
    else if (qIntent === "quiz") setIntent("quiz");
    else if (medium === "instagram") setIntent("consult");
    else setIntent("quiz");

    // page_view with UTM context
    track("page_view", {
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
    });
  }, []);

  const sourcePlatform = useMemo(() => {
    return utmMedium === "instagram" || utmMedium === "tiktok" ? utmMedium : "bio";
  }, [utmMedium]);

  const quizHref = useMemo(() => {
    const u = new URL("https://quiz.theaevia.co.uk/");
    u.searchParams.set("utm_source", UTM_SOURCE_DEFAULT);
    u.searchParams.set("utm_medium", utmMedium);
    u.searchParams.set("utm_campaign", utmCampaign);
    u.searchParams.set("utm_source_platform", sourcePlatform);
    return u.toString();
  }, [utmMedium, utmCampaign, sourcePlatform]);

  const consultHref = useMemo(() => {
    const params = new URLSearchParams({
      utm_source: UTM_SOURCE_DEFAULT,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    });
    params.set("utm_source_platform", sourcePlatform);
    return `${SKIN_CONSULTATION_URL}?${params.toString()}`;
  }, [utmMedium, utmCampaign, sourcePlatform]);

  const primaryHref = intent === "consult" ? consultHref : quizHref;
  const primaryLabel = intent === "consult" ? "Book a free consult" : "Get your 60-sec Skin Plan";
  const secondaryHref = intent === "consult" ? quizHref : consultHref;
  const secondaryLabel = intent === "consult" ? "Prefer guidance? Take the 60-sec quiz" : "Already decided? Book a free consult";

  const isConsultPrimary = intent === "consult";
  const heroMain = isConsultPrimary ? "Book a free consult" : "60-sec Skin Plan";
  const heroSub = isConsultPrimary ? "or get your 60-sec Skin Plan" : "or book a free consult";

  const concerns = useMemo(
    () => [
      { label: "Frown lines", href: "/treatments/anti-wrinkle" },
      { label: "Forehead lines", href: "/treatments/anti-wrinkle" },
      { label: "Crow’s feet", href: "/treatments/anti-wrinkle" },
      { label: "Jawline slimming", href: "/treatments/jawline-slimming" },
      { label: "Neck bands", href: "/treatments/neck-lift" },
      { label: "Hydration & glow", href: "/treatments/profhilo" },
    ],
    []
  );

  useEffect(() => {
    const node = galleryRef.current;
    if (!node || isGalleryActive) {
      return;
    }

    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setIsGalleryActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.4 || entry.isIntersecting) {
          setIsGalleryActive(true);
        }
      },
      {
        threshold: [0, 0.25, 0.4],
        rootMargin: "0px 0px -35% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isGalleryActive]);

  useEffect(() => {
    if (!isGalleryActive || hasTrackedImpression) {
      return;
    }

    track("mini_gallery_impression", {
      items: featuredGalleryItems.map((item, index) => ({
        id: item.id,
        title: item.title,
        position: index,
      })),
    });
    setHasTrackedImpression(true);
  }, [featuredGalleryItems, hasTrackedImpression, isGalleryActive]);

  const handleMiniGalleryTileClick = useCallback((id: string, index: number) => {
    const item = featuredGalleryItems[index];
    track("mini_gallery_tile_click", { id, title: item?.title, position: index });
  }, [featuredGalleryItems]);

  const handleSeeAllClick = useCallback(() => {
    track("mini_gallery_cta_click", { action: "see_all_results" });
  }, []);

  return (
    <>
      <SEO
        title="The Aevia — 60-sec Skin Plan & Free Doctor-Led Consult"
        description="Doctor-led, discreet studio in King’s Cross. Start with a 60‑sec Skin Plan or book a free consult. Natural, evidence-based results."
      />

      {/* Page Shell */}
      <div className="min-h-screen bg-white flex flex-col">
        {/* 2) Hero */}
        <section className="bg-secondary">
          <div className="max-w-4xl mx-auto px-4 py-5 sm:py-12">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif font-bold leading-snug text-balance text-center">
              {heroMain}
              <span className="block text-xl md:text-3xl lg:text-4xl">{heroSub}</span>
            </h1>
            <p className="mt-3 text-foreground/80 text-center max-w-3xl mx-auto">
              We’ll guide you to suitable options like anti-wrinkle treatment, skin boosters, or polynucleotides - tailored to your goals.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 items-center justify-center">
              {/* Primary CTA */}
              {/* Use <a> to preserve UTMs; wouter <Link> for internal nav is fine too */}
              <a
                href={primaryHref}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto")}
                onClick={() => {
                  track("cta_click", { cta: intent === "consult" ? "consult" : "quiz", placement: "hero" });
                  if (intent !== "consult") track("quiz_start", { placement: "hero" });
                }}
              >
                {primaryLabel}
              </a>
              {/* Secondary CTA */}
              <a
                href={secondaryHref}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
                onClick={() => {
                  track("cta_click", { cta: intent === "consult" ? "quiz" : "consult", placement: "hero" });
                  if (intent === "consult") track("quiz_start", { placement: "hero" });
                }}
              >
                {secondaryLabel}
              </a>
            </div>

            {/* Micro trust bullets removed for simplicity */}
          </div>
        </section>

        {/* 3) Path cards */}
        <section>
          <div className="max-w-3xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {isConsultPrimary ? (
              <>
                {/* Card A — Consult (Recommended) */}
                <a
                  href={consultHref}
                  onClick={() => track("cta_click", { cta: "consult", placement: "cards" })}
                  className="group block rounded-2xl border border-muted-foreground/20 bg-white p-4 hover:shadow-md smooth-transition focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Consult</h3>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">Recommended</span>
                  </div>
                  <ul className="text-sm text-foreground/80 space-y-1 list-disc pl-5">
                    <li>Best if you’re ready to proceed</li>
                    <li>20 min virtual or in-clinic</li>
                    <li>Doctor-led, bespoke plan & pricing</li>
                    <li>Priority booking for treatment</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">Tap to continue →</div>
                </a>

                {/* Card B — Quiz */}
                <a
                  href={quizHref}
                  onClick={() => {
                    track("cta_click", { cta: "quiz", placement: "cards" });
                    track("quiz_start", { placement: "cards" });
                  }}
                  className="group block rounded-2xl border border-muted-foreground/20 bg-white p-4 hover:shadow-md smooth-transition focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Quiz</h3>
                  </div>
                  <ul className="text-sm text-foreground/80 space-y-1 list-disc pl-5">
                    <li>Perfect if you’re new or undecided</li>
                    <li>Personalised guidance in under a minute</li>
                    <li>See if anti-wrinkle, boosters or polynucleotides suit you</li>
                    <li>Results via email (save & compare)</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">Tap to continue →</div>
                </a>
              </>
            ) : (
              <>
                {/* Card A — Quiz (Recommended) */}
                <a
                  href={quizHref}
                  onClick={() => {
                    track("cta_click", { cta: "quiz", placement: "cards" });
                    track("quiz_start", { placement: "cards" });
                  }}
                  className="group block rounded-2xl border border-muted-foreground/20 bg-white p-4 hover:shadow-md smooth-transition focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Quiz</h3>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">Recommended</span>
                  </div>
                  <ul className="text-sm text-foreground/80 space-y-1 list-disc pl-5">
                    <li>Perfect if you’re new or undecided</li>
                    <li>Personalised guidance in under a minute</li>
                    <li>See if anti-wrinkle, boosters or polynucleotides suit you</li>
                    <li>Results via email (save & compare)</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">Tap to continue →</div>
                </a>

                {/* Card B — Consult */}
                <a
                  href={consultHref}
                  onClick={() => track("cta_click", { cta: "consult", placement: "cards" })}
                  className="group block rounded-2xl border border-muted-foreground/20 bg-white p-4 hover:shadow-md smooth-transition focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Consult</h3>
                  </div>
                  <ul className="text-sm text-foreground/80 space-y-1 list-disc pl-5">
                    <li>Best if you’re ready to proceed</li>
                    <li>10–15 min virtual or in-clinic</li>
                    <li>Doctor-led, bespoke plan & pricing</li>
                    <li>Priority booking for treatment</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">Tap to continue →</div>
                </a>
              </>
            )}
          </div>
        </section>

        {/* Mini results gallery */}
        <section
          ref={galleryRef}
          className="bg-white border-y border-muted-foreground/20 py-10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">Recent results from Aevia Skin</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  See what our doctors achieve with tailored skin protocols.
                </p>
              </div>
              <div className="hidden md:flex flex-col items-end text-right gap-1">
                <Link href={seeAllResultsHref}>
                  <a
                    onClick={handleSeeAllClick}
                    className="text-sm font-semibold text-[#B89A6A] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded"
                  >
                    See all results →
                  </a>
                </Link>
                <span className="text-[11px] text-muted-foreground">
                  Representative outcomes; individual results vary.
                </span>
              </div>
            </div>

            {isGalleryActive ? (
              <Carousel
                opts={{ align: "start" }}
                className="relative"
                tabIndex={0}
              >
                <CarouselContent className="-ml-4">
                   {featuredGalleryItems.map((item, index) => (
                     <CarouselItem
                       key={item.id}
                       className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/4"
                     >
                      <Link href={item.href}>
                        <a
                          onClick={() => handleMiniGalleryTileClick(item.id, index)}
                          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-2xl"
                          aria-label={item.title}
                        >
                          <figure className="rounded-2xl border border-muted-foreground/20 bg-white shadow-sm group-hover:shadow-md smooth-transition overflow-hidden">
                            <div className="relative w-full aspect-[4/3] bg-muted/40">
                              {item.kind === "publicWebP" ? (
                                <picture>
                                  <source
                                    type="image/avif"
                                    srcSet={`${item.src.replace('-640w.webp','-640w.avif')} 640w, ${item.src.replace('-640w.webp','-1280w.avif')} 1280w`}
                                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 240px"
                                  />
                                  <source
                                    type="image/webp"
                                    srcSet={`${item.src.replace('-640w.webp','-640w.webp')} 640w, ${item.src.replace('-640w.webp','-1280w.webp')} 1280w`}
                                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 240px"
                                  />
                                  <img
                                    src={item.src}
                                    alt={`${item.title} before and after`}
                                    loading="lazy"
                                    decoding="async"
                                    width={640}
                                    height={480}
                                    className="absolute inset-0 h-full w-full object-cover"
                                  />
                                </picture>
                              ) : (
                                <picture>
                                  <source srcSet={item.src} type={item.kind === "importedPng" ? "image/png" : "image/jpeg"} />
                                  <img
                                    src={item.src}
                                    alt={`${item.title} before and after`}
                                    loading="lazy"
                                    decoding="async"
                                    width={1600}
                                    height={1200}
                                    className="absolute inset-0 h-full w-full object-cover"
                                  />
                                </picture>
                              )}
                            </div>
                            <figcaption className="px-4 py-3">
                              <span className="block text-sm font-medium text-foreground text-center">
                                {item.title}
                              </span>
                              <span className="mt-1 block text-xs text-muted-foreground text-center">
                                {item.caption}
                              </span>
                            </figcaption>
                          </figure>
                        </a>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white text-primary border-primary/20 shadow-md hover:bg-primary/10" />
                <CarouselNext className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-primary border-primary/20 shadow-md hover:bg-primary/10" />
              </Carousel>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={`mini-gallery-skeleton-${idx}`}
                    className="rounded-2xl border border-muted-foreground/20 bg-white shadow-sm overflow-hidden"
                  >
                    <div className="aspect-[4/3] w-full bg-muted animate-pulse" />
                    <div className="p-4 space-y-2">
                      <div className="h-3 w-3/4 bg-muted/80 rounded-full" />
                      <div className="h-3 w-1/2 bg-muted/60 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-col items-center gap-1 md:hidden">
              <Link href={seeAllResultsHref}>
                <a
                  onClick={handleSeeAllClick}
                  className="text-sm font-semibold text-[#B89A6A] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded"
                >
                  See all results →
                </a>
              </Link>
              <span className="text-[11px] text-muted-foreground text-center">
                Representative outcomes; individual results vary.
              </span>
            </div>
          </div>
        </section>

        {/* 4) Popular concerns */}
        <section>
          <div className="max-w-3xl mx-auto px-4 py-6">
            <h3 className="font-semibold mb-3">Popular concerns</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {concerns.map((c) => (
                <Link key={c.label} href={c.href}>
                  <a className="block text-sm text-center rounded-full border border-muted-foreground/30 bg-white py-2 px-3 hover:border-primary hover:text-primary smooth-transition">
                    {c.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5) Location & reassurance strip */}
        <section className="mt-6">
          <div className="max-w-3xl mx-auto px-4">
            <div className="rounded-2xl border border-muted-foreground/20 bg-secondary p-4 sm:p-5">
              <p className="text-sm sm:text-base text-foreground/90">
                Visit us at Minsony, King’s Cross — 2 mins from the station. Discreet, appointment-only studio.
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-2">
                <a
                  className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto")}
                  href="https://www.google.com/maps/place/The+Aevia/@51.5310793,-0.1203023,17z/data=!4m18!1m9!3m8!1s0x48761be0d6318279:0x6231887d02d12d6b!2sThe+Aevia!8m2!3d51.5310793!4d-0.1203023!9m1!1b1!16s%2Fg%2F11ycs1_g7t!3m7!1s0x48761be0d6318279:0x6231887d02d12d6b!8m2!3d51.5310793!4d-0.1203023!9m1!1b1!16s%2Fg%2F11ycs1_g7t!5m1!1e2?hl=en-GB&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
                <a
                  className={cn(buttonVariants({ variant: "default" }), "w-full sm:w-auto")}
                  href={consultHref}
                  onClick={() => track("cta_click", { cta: "consult", placement: "cards" })}
                >
                  Book a consult
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6) FAQs */}
        <section className="mt-8">
          <div className="max-w-3xl mx-auto px-4">
            <Accordion type="single" collapsible className="bg-white rounded-2xl border border-muted-foreground/20">
              <AccordionItem value="faq-1" className="px-4">
                <AccordionTrigger>Is the consult really free?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-foreground/80">
                    Yes. Virtual consults are free; in-clinic consults may be redeemable against treatment. We’ll confirm what’s best for you.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="px-4">
                <AccordionTrigger>What treatments do you offer?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-foreground/80">
                    Doctor-led anti-wrinkle treatment, jawline slimming, neck lift, sweat reduction, skin boosters (Profhilo®, Sunekos), and polynucleotides (Plinest Eye / Full Face).
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="px-4">
                <AccordionTrigger>Will you tell me exactly what to get?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-foreground/80">
                    We’ll assess suitability and discuss options, benefits, and risks so you can decide. No pressure, ever.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 7) Compliance note */}
        <section className="mt-6 mb-24 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed">
              General information only. A medical consultation is required to assess suitability prior to any treatment. Botulinum toxin is a prescription-only medicine; this page does not advertise POMs.”
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
