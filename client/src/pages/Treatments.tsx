import { useEffect } from "react";
import { Check } from "lucide-react";

import SEO from "@/components/SEO";
import { pricing } from "@/data/pricing";
import { PriceMenuItem, regenerativeSingleSessions, treatmentPriceMenu } from "@/data/treatmentMenu";
import { SQUARE_SITE_URL, whatsappEnquiryUrl } from "@/lib/bookingUrls";
import treatmentsHeroImage from "@assets/hero_images/skin-model-2.webp";

const protocolCards = [
  {
    id: "single-session",
    name: "A Focused Treatment",
    eyebrow: "Single session",
    price: `From ${pricing.antiWrinkle.oneArea.display}`,
    note: "One treatment, chosen for one priority.",
    examples: [
      `Anti-wrinkle treatment, from ${pricing.antiWrinkle.oneArea.display}`,
      `Polynucleotides (eye or full face), from ${pricing.regenerative.plinestEye.display}`,
      `Profhilo, ${pricing.regenerative.profhilo.display}`,
    ],
    features: [
      "Doctor-led suitability check",
      "Complimentary 2-week review with anti-wrinkle treatments",
      "Written aftercare",
    ],
    featured: false,
    cta: "View treatments & book",
    href: "#price-menu",
  },
  {
    id: "glow-protocol",
    name: "The Glow Protocol",
    eyebrow: "Two-session protocol",
    price: pricing.protocols.glow.display,
    note: pricing.protocols.glow.paymentDisplay,
    features: [
      "Two staged Profhilo sessions (weeks 0 and 4)",
      "Photo review and adjustment at week two",
      "A maintenance recommendation at completion",
    ],
    featured: true,
    cta: "Discuss this plan",
    href: whatsappEnquiryUrl("The Glow Protocol"),
  },
  {
    id: "aevia-plan",
    name: "The Aevia Plan",
    eyebrow: "Doctor-designed journey",
    price: pricing.protocols.aeviaPlan.display,
    note: "A doctor-designed plan across three or more months, combining treatments where useful.",
    features: [
      "Consultation and full-face priorities",
      "More than one treatment approach where useful",
      "Progress reviews and long-term maintenance plan",
    ],
    featured: false,
    example: "Example: anti-wrinkle treatment, a Profhilo course and under-eye polynucleotides staged across 12 weeks.",
    cta: "Discuss on WhatsApp",
    href: whatsappEnquiryUrl("The Aevia Plan"),
  },
];

function PriceMenuRow({ item, child = false }: { item: PriceMenuItem; child?: boolean }) {
  return (
    <>
      <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-1 border-t border-[#d9d0c4] py-3 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:gap-4 sm:py-5 ${item.recommended ? "bg-[#f7f1e7] px-3 sm:px-5" : ""} ${child ? "ml-3 border-l border-l-[#d2b582]/50 py-2.5 pl-3 sm:ml-8 sm:pl-7" : ""}`}>
        <div className="row-span-2 min-w-0 sm:row-span-1">
          {item.label && <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#806234]">{item.label}</p>}
          <h4 className={`${item.recommended ? "font-serif text-lg font-medium sm:text-xl" : child ? "text-sm font-medium sm:text-base" : "text-base font-medium sm:text-lg"} leading-snug`}>{item.name}</h4>
          {item.note && <p className="mt-0.5 line-clamp-1 text-[13px] leading-snug text-[#6a6259] sm:mt-1 sm:line-clamp-none sm:text-sm sm:leading-relaxed">{item.note}</p>}
        </div>
        <p className="col-start-2 row-start-1 text-right text-sm font-medium tabular-nums text-[#806234] sm:col-start-2 sm:row-auto sm:px-5 sm:text-base">{item.price}</p>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-2 row-start-2 inline-flex min-h-8 items-center justify-center justify-self-end border border-[#806234] px-3 text-xs font-medium text-[#806234] transition-colors hover:bg-[#806234] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806234] sm:col-start-3 sm:row-auto sm:min-h-10 sm:min-w-24 sm:px-4 sm:text-sm"
        >
          {item.action ?? "Book"}
        </a>
      </div>
      {item.children?.map((childItem) => <PriceMenuRow key={`${item.name}-${childItem.name}`} item={childItem} child />)}
    </>
  );
}

function RegenerativePriceMenu({ items }: { items: PriceMenuItem[] }) {
  return (
    <div>
      <p className="max-w-[72ch] text-sm leading-relaxed text-[#5d564d] sm:text-base">Most regenerative treatments work best as a planned course. Your clinician will confirm the right plan during consultation.</p>
      <div className="mt-7 grid gap-px bg-[#d8cfc2] sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.name} className="flex min-h-[16rem] flex-col bg-[#f7f1e7] p-6 sm:min-h-[18rem] sm:p-8">
            <h4 className="max-w-[18ch] font-serif text-2xl font-medium leading-tight sm:text-[1.7rem]">{item.name}</h4>
            {item.note && <p className="mt-3 text-sm text-[#625b52]">{item.note}</p>}
            <p className="mt-5 text-3xl font-medium tabular-nums text-[#806234]">{item.price}</p>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center justify-center border border-[#806234] px-4 text-center text-sm font-medium text-[#806234] transition-colors hover:bg-[#806234] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806234] sm:mt-auto">{item.action}</a>
          </article>
        ))}
      </div>

      <div className="mt-10 border-t border-[#cfc4b5] pt-7">
        <div className="grid gap-3 sm:grid-cols-[0.75fr_1.25fr] sm:items-end">
          <div><p className="eyebrow">Single sessions</p><h4 className="mt-3 font-serif text-2xl font-medium">A quieter maintenance option.</h4></div>
          <p className="max-w-[62ch] text-sm leading-relaxed text-[#625b52] sm:justify-self-end">Available for maintenance, top-ups, staged treatment, or where advised after consultation.</p>
        </div>
        <div className="mt-6 border-y border-[#d9d0c4]">
          {regenerativeSingleSessions.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4 border-b border-[#d9d0c4] py-3 last:border-b-0 sm:py-4">
              <p className="text-sm leading-snug sm:text-base">{item.name}</p>
              <p className="shrink-0 text-sm font-medium tabular-nums text-[#806234] sm:text-base">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <a href={SQUARE_SITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center border border-[#806234] px-5 text-sm font-medium text-[#806234] transition-colors hover:bg-[#806234] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806234]">Book a single session</a>
        </div>
      </div>
    </div>
  );
}

export default function Treatments() {
  useEffect(() => {
    const scrollFromHash = () => {
      const slug = decodeURIComponent((window.location.hash || "").replace("#", ""));
      if (!slug) return;
      const element = document.getElementById(slug);
      if (!element) return;
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
      const y = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    const timer = window.setTimeout(scrollFromHash, 0);
    window.addEventListener("hashchange", scrollFromHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollFromHash);
    };
  }, []);

  const topGap = "var(--header-h, 80px)";

  return (
    <>
      <SEO
        title="Aesthetic Treatments in King's Cross, London | Aevia Skin"
        description="Compare doctor-led anti-wrinkle, skin booster and polynucleotide treatments in King's Cross, with clear single-session, protocol and signature appointment prices."
        image="/hero_images/skin-model-2.webp"
      />
      <div className="min-h-screen bg-white text-[#171512]">
        <section className="pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="hero-safe-padding">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.07fr_0.93fr]">
              <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                <p className="eyebrow text-primary/80">Doctor-led · King’s Cross</p>
                <h1 className="page-title mt-4 max-w-[11ch]">Treat your concern. Plan your journey.</h1>
                <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[#3f3a33] sm:text-lg">Start with what you want to change. Your doctor will turn that concern into a proportionate plan, with clear costs and no pressure to over-treat.</p>
              </div>
              <div className="order-1 w-full lg:order-2">
                <div className="relative w-full border border-[#d9d0c4] bg-secondary pb-[75%]">
                  <img src={treatmentsHeroImage} alt="Aevia treatment room prepared for a client session" className="absolute inset-0 h-full w-full object-cover" loading="eager" width="1600" height="1200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="protocols" style={{ scrollMarginTop: topGap }} className="border-y border-[#d9d0c4] bg-[#f2ede5] py-16 md:py-24">
          <div className="hero-safe-padding">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 max-w-3xl">
                <p className="eyebrow">Doctor-planned options</p>
                <h2 className="mt-4 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Start focused. Build only when it is useful.</h2>
                <p className="mt-5 max-w-[62ch] leading-relaxed text-[#514b43]">The tiers help you choose a level of care. The complete menu and individual booking links sit directly below.</p>
              </div>
              <div className="grid items-stretch gap-px bg-[#d8cfc2] lg:grid-cols-3">
                {protocolCards.map((protocol) => (
                  <article id={protocol.id} key={protocol.name} style={{ scrollMarginTop: topGap }} className={`relative flex flex-col p-7 sm:p-10 lg:min-h-[38rem] ${protocol.featured ? "bg-[#1d1b18] text-white xl:-my-4 xl:min-h-[40rem] xl:py-14" : "bg-[#fbf9f5] text-[#171512]"}`}>
                    {protocol.featured && <span className="mb-5 inline-flex w-fit border border-[#d2b582] bg-[#d2b582] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#171512]">Most chosen</span>}
                    <p className={`text-xs font-medium uppercase tracking-[0.2em] ${protocol.featured ? "text-[#d2b582]" : "text-[#806234]"}`}>{protocol.eyebrow}</p>
                    <h3 className="mt-7 max-w-[14ch] text-3xl font-medium leading-tight sm:text-4xl">{protocol.name}</h3>
                    <p className={`mt-7 text-4xl font-medium tabular-nums ${protocol.featured ? "text-white" : "text-[#806234]"}`}>{protocol.price}</p>
                    <p className={`mt-3 text-sm leading-relaxed ${protocol.featured ? "text-white/65" : "text-[#6a6259]"}`}>{protocol.note}</p>
                    {protocol.id !== "single-session" && <p className={`mt-3 text-xs leading-relaxed ${protocol.featured ? "text-[#d2b582]" : "text-[#806234]"}`}>Flexible payment options are available for eligible treatment plans.</p>}
                    {protocol.examples && <div className="mt-6 space-y-2 text-sm leading-relaxed text-[#514b43]">{protocol.examples.map((example) => <p key={example}>{example}</p>)}</div>}
                    <ul className={`mt-8 space-y-4 border-t pt-7 text-sm leading-relaxed ${protocol.featured ? "border-white/20 text-white/80" : "border-[#d8cfc2] text-[#514b43]"}`}>
                      {protocol.features.map((feature) => <li key={feature} className="flex gap-3"><Check className={`mt-1 h-4 w-4 shrink-0 ${protocol.featured ? "text-[#d2b582]" : "text-[#9a7742]"}`} /><span>{feature}</span></li>)}
                    </ul>
                    {protocol.example && <p className="mt-6 text-xs leading-relaxed text-[#6a6259]">{protocol.example}</p>}
                    <a href={protocol.href} {...(protocol.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })} className={`mt-8 inline-flex min-h-12 items-center justify-center border px-5 text-center text-sm font-medium transition-colors max-sm:mr-14 lg:mt-auto ${protocol.featured ? "border-[#d2b582] bg-[#d2b582] text-[#171512] hover:border-white hover:bg-white" : "border-[#806234] text-[#806234] hover:bg-[#806234] hover:text-white"}`}>{protocol.cta}</a>
                  </article>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[#6a6259]">Your doctor confirms the included treatments, total price and timing before you commit.</p>
            </div>
          </div>
        </section>

        <section id="price-menu" style={{ scrollMarginTop: topGap }} className="bg-white py-16 md:py-24">
          <div className="hero-safe-padding">
            <div className="mx-auto max-w-6xl">
              <div className="mb-14 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
                <div><p className="eyebrow">Prices and booking</p><h2 className="mt-4 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Choose your treatment.</h2></div>
                <p className="max-w-[62ch] leading-relaxed text-[#514b43] md:justify-self-end">The menu is grouped in the same order clients move through care: start with advice, compare skin-quality treatments, review anti-wrinkle options, then consider same-visit combinations.</p>
              </div>
              <aside className="mb-12 border-l-2 border-[#9a7742] bg-[#f7f1e7] px-6 py-6 sm:px-8" aria-label="Course guidance">
                <h3 className="font-serif text-2xl font-medium">Courses are the usual starting point for regenerative treatments.</h3>
                <p className="mt-3 max-w-[78ch] text-sm leading-relaxed text-[#514b43] sm:text-base">Skin boosters and polynucleotides usually work best as a planned course rather than a one-off treatment. Your clinician will confirm the right plan for your skin during consultation. If you start with a single session and a course is recommended, the price of that session can be put towards your course when booked within 30 days.</p>
              </aside>
              <div className="space-y-14">
                {treatmentPriceMenu.map((category, index) => (
                  <section id={category.id} key={category.id} style={{ scrollMarginTop: topGap }} aria-labelledby={`${category.id}-heading`}>
                    <div className="mb-5 flex flex-col gap-2 border-b-2 border-[#1d1b18] pb-5 sm:flex-row sm:items-end sm:justify-between">
                      <h3 id={`${category.id}-heading`} className="text-2xl font-medium sm:text-3xl"><span className="mr-4 font-mono text-xs text-[#967544]">0{index + 1}</span>{category.name}</h3>
                      <p className="text-sm text-[#6a6259]">{category.gloss}</p>
                    </div>
                    {category.id === "skin-quality-regeneration" ? <RegenerativePriceMenu items={category.items} /> : <div>{category.items.map((item) => <PriceMenuRow key={item.name} item={item} />)}</div>}
                    {category.footer && <p className="border-t border-[#d9d0c4] pt-5 text-sm font-medium text-[#5d564d]">{category.footer}</p>}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d9d0c4] bg-[#f2ede5] py-16 sm:py-20" aria-labelledby="payment-options">
          <div className="hero-safe-padding">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_1.35fr]">
              <div><p className="eyebrow">Plan + payment</p><h2 id="payment-options" className="mt-4 text-balance text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.04] tracking-[-0.03em]">Useful details before you book.</h2></div>
              <div className="border-t border-[#cfc4b5]">
                <div className="border-b border-[#cfc4b5] py-6"><h3 className="text-xl font-medium">Can a single session count towards a course?</h3><p className="mt-3 max-w-[65ch] leading-relaxed text-[#5d564d]">Yes. When your clinician recommends continuing as a course, the single-session price can be put towards that course if you book it within 30 days.</p></div>
                <div className="border-b border-[#cfc4b5] py-6"><h3 className="text-xl font-medium">Can I split the cost of treatment?</h3><p className="mt-3 max-w-[65ch] leading-relaxed text-[#5d564d]">Eligible clients may be able to use Clearpay at checkout for selected treatment plans. Approval and repayment terms are managed by Clearpay. Please only proceed with a treatment plan if the repayments are manageable for you.</p></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
