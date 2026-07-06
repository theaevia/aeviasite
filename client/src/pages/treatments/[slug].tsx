import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Check, Clock, ShieldCheck } from "lucide-react";

import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { pricing } from "@/data/pricing";
import { findTreatmentBySlug } from "@/data/treatments";
import { treatmentDetails, treatmentMappings, treatmentProfiles } from "@/data/treatmentProfiles";
import { whatsappEnquiryUrl } from "@/lib/bookingUrls";
import { getHeroImageClassName, getHeroImageObjectPosition } from "@/lib/treatmentImageUtils";

const treatmentDiagrams: Record<string, { src: string; alt: string }> = {
  "anti-wrinkle": { src: "/assets/diagrams/anti-wrinkle-1-1280w.webp", alt: "Facial muscles commonly assessed for anti-wrinkle treatment" },
  "jawline-slimming": { src: "/assets/diagrams/masseter-1-1280w.webp", alt: "Masseter muscle treatment anatomy" },
  "lower-face-contour-duo": { src: "/assets/diagrams/lower-face-1-1280w.webp", alt: "Lower-face muscle contouring anatomy" },
  "neck-lift": { src: "/assets/diagrams/platysmal-bands-1-1280w.webp", alt: "Platysmal bands and neck anatomy" },
  "smile-lift": { src: "/assets/diagrams/smile-lift-1-1280w.webp", alt: "DAO muscle smile-lift anatomy" },
  "sweat-control": { src: "/assets/diagrams/sweat-control-1-1280w.webp", alt: "Underarm sweat-control treatment field" },
  profhilo: { src: "/assets/diagrams/skin-booster-1-1280w.webp", alt: "Profhilo BAP injection point diagram" },
  sunekos: { src: "/assets/diagrams/skin-booster-1-1280w.webp", alt: "Sunekos skin booster placement diagram" },
  "full-face-regeneration": { src: "/assets/diagrams/skin-booster-1-1280w.webp", alt: "Full-face regenerative injectable placement diagram" },
};

const sectionHeadingClassName = "mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]";

type PriceLine = { label: string; price: string; note?: string };

const courseOffers: Record<string, { title: string; price: string; plan: string; singleTitle: string; singlePrice: string; singleNote: string }> = {
  profhilo: {
    title: "Profhilo® Glow Protocol",
    price: pricing.protocols.glow.display,
    plan: pricing.protocols.glow.paymentDisplay,
    singleTitle: "Single Profhilo® Session",
    singlePrice: pricing.regenerative.profhilo.display,
    singleNote: "For maintenance, top-ups, or where advised after consultation",
  },
  "full-face-regeneration": {
    title: "Plinest Full Face Regeneration Course",
    price: pricing.regenerative.plinestFace.courseDisplay,
    plan: pricing.regenerative.plinestFace.coursePaymentDisplay,
    singleTitle: "Single Plinest Full Face Session",
    singlePrice: pricing.regenerative.plinestFace.display,
    singleNote: "For maintenance, staged treatment, or where advised after consultation",
  },
  "eye-rejuvenation": {
    title: "Plinest Eye Revival Course",
    price: pricing.protocols.eyeRevival.display,
    plan: pricing.regenerative.plinestEye.coursePaymentDisplay,
    singleTitle: "Single Plinest Eye Session",
    singlePrice: pricing.regenerative.plinestEye.display,
    singleNote: "For maintenance, staged treatment, or where advised after consultation",
  },
  sunekos: {
    title: "Sunekos Skin Renewal Course",
    price: pricing.regenerative.sunekos.courseDisplay,
    plan: pricing.regenerative.sunekos.coursePaymentDisplay,
    singleTitle: "Single Sunekos Session",
    singlePrice: pricing.regenerative.sunekos.display,
    singleNote: "For maintenance, staged treatment, or where advised after consultation",
  },
};

export default function TreatmentPage({ slugOverride }: { slugOverride?: string; params?: Record<string, string> } = {}) {
  const params = useParams<{ slug?: string }>();
  const slug = slugOverride ?? params.slug ?? "";
  const treatment = findTreatmentBySlug(slug);
  const profile = treatmentProfiles[slug];
  const detail = treatmentDetails[slug];

  if (!treatment || !profile || !detail) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-medium">Treatment not found</h1>
        <Link href="/treatments" className="mt-8 inline-flex items-center gap-2 underline underline-offset-4">
          <ArrowLeft className="h-4 w-4" /> Back to treatments
        </Link>
      </section>
    );
  }

  const pageTitle = `${treatment.name} in King's Cross, London | Aevia Skin`;
  const courseOffer = courseOffers[slug];
  const priceLines: PriceLine[] = courseOffer
    ? [
        { label: courseOffer.title, price: courseOffer.price },
        { label: courseOffer.singleTitle, price: courseOffer.singlePrice },
      ]
    : treatment.priceTiers?.length
      ? treatment.priceTiers
      : [{ label: "Treatment", price: treatment.price }];
  const heroImage = treatment.image?.startsWith("/") ? treatment.image : null;
  const diagram = treatmentDiagrams[slug];
  const mapping = treatmentMappings[slug];
  const whatsappUrl = whatsappEnquiryUrl(treatment.name);

  return (
    <>
      <SEO title={pageTitle} description={`${profile.summary} ${treatment.price}. Doctor-led treatment in King's Cross, London.`} />
      <article className="bg-[#fbf9f5] text-[#171512]">
        <header className="border-b border-[#d9d0c4] bg-white pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-20 lg:pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link href="/treatments" className="inline-flex items-center gap-2 text-sm text-[#6b6258] underline decoration-[#c5a87a] underline-offset-4">
              <ArrowLeft className="h-4 w-4" /> All treatments
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="eyebrow">{profile.keyword}</p>
                <h1 className="mt-5 max-w-[14ch] text-balance font-serif text-[clamp(2.7rem,4.8vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                  {treatment.name}
                </h1>
                <p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-[#585149] sm:text-xl">{profile.summary}</p>
              </div>
              <div>
                {heroImage && (
                  <div className="mb-7 aspect-[4/3] overflow-hidden bg-[#e9e0d4]">
                    <img
                      src={heroImage}
                      alt={`${treatment.name} at Aevia Skin`}
                      className={`h-full w-full object-cover ${getHeroImageClassName(slug)}`}
                      style={{ objectPosition: getHeroImageObjectPosition(slug) }}
                      width="960"
                      height="720"
                      loading="eager"
                    />
                  </div>
                )}
                <div className="border-l border-[#cfc4b5] pl-7">
                  {courseOffer ? (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#806234]">Clinician-recommended plan</p>
                      <h2 className="mt-3 max-w-[22ch] font-serif text-2xl font-medium leading-tight">{courseOffer.title}</h2>
                      <p className="mt-2 text-sm text-[#625b52]">{courseOffer.plan}</p>
                      <p className="mt-4 text-4xl font-medium tabular-nums text-[#806234]">{courseOffer.price}</p>
                      <p className="mt-4 flex items-center gap-2 text-sm text-[#625b52]"><Clock className="h-4 w-4" /> {treatment.duration} per visit</p>
                      <BookingButton href={whatsappEnquiryUrl(courseOffer.title)} className="mt-6 w-full">Discuss this plan</BookingButton>
                      <p className="mt-3 text-center text-xs leading-relaxed text-[#806234]">Flexible payment options are available for eligible treatment plans.</p>
                      <div className="mt-7 border-t border-[#d9d0c4] pt-6">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#806234]">Single session</p>
                        <div className="mt-2 flex items-start justify-between gap-5"><h3 className="font-medium">{courseOffer.singleTitle}</h3><p className="shrink-0 font-medium tabular-nums text-[#806234]">{courseOffer.singlePrice}</p></div>
                        <p className="mt-2 text-sm leading-relaxed text-[#625b52]">{courseOffer.singleNote}</p>
                        <BookingButton href={treatment.bookingUrl} variant="secondary" className="mt-5 w-full">Book single session</BookingButton>
                      </div>
                      <p className="mt-5 text-xs leading-relaxed text-[#625b52]">If your clinician recommends a course after a single session, that session price can be put towards the course when you book it within 30 days.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#7a7065]">From</p>
                      <p className="mt-2 text-4xl font-medium tabular-nums text-[#806234]">{treatment.price}</p>
                      <p className="mt-4 flex items-center gap-2 text-sm text-[#625b52]"><Clock className="h-4 w-4" /> {treatment.duration}</p>
                      {treatment.priceNote && <p className="mt-5 text-sm leading-relaxed text-[#625b52]">{treatment.priceNote}</p>}
                      {slug === "anti-wrinkle" && <p className="mt-4 text-sm leading-relaxed text-[#625b52]">Price includes a complimentary 2-week review. We will invite you to book your next appointment at your review. Most clients return every 12 weeks.</p>}
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        <BookingButton href={treatment.bookingUrl} className="w-full">Book now</BookingButton>
                        <BookingButton href={whatsappUrl} variant="secondary" className="w-full">Ask a doctor on WhatsApp</BookingButton>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-[#d9d0c4] bg-[#f2ede5] py-16 sm:py-24" aria-labelledby="treatment-detail">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-10">
            <div>
              <p className="eyebrow">In detail</p>
              <h2 id="treatment-detail" className={`${sectionHeadingClassName} max-w-[12ch]`}>
                What it is and how it works.
              </h2>
            </div>
            <div className="space-y-6 border-t border-[#cfc4b5] pt-7 text-lg leading-relaxed text-[#514b43] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {detail.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" aria-labelledby="who-for">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-10">
            <div>
              <p className="eyebrow">Who it&apos;s for</p>
              <h2 id="who-for" className={sectionHeadingClassName}>A fit for your concern, not a trend.</h2>
            </div>
            <ul className="grid gap-px border border-[#d8cfc2] bg-[#d8cfc2] sm:grid-cols-3">
              {profile.whoFor.map((item) => (
                <li key={item} className="bg-white p-7 text-base leading-relaxed">
                  <Check className="mb-8 h-5 w-5 text-[#9a7742]" />{item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {mapping && (
          <section className="border-y border-[#d9d0c4] bg-white py-14 sm:py-20" aria-labelledby="treatment-map">
            <div className={`mx-auto grid max-w-6xl gap-10 px-6 md:items-center lg:px-10 ${diagram ? "md:grid-cols-[0.85fr_1.15fr]" : "md:grid-cols-[0.55fr_1.45fr]"}`}>
              {diagram ? (
                <div className="bg-[#f2ede5] p-5 sm:p-7">
                  <img src={diagram.src} alt={diagram.alt} className="mx-auto max-h-[27rem] w-full object-contain" loading="lazy" />
                </div>
              ) : (
                <p className="eyebrow self-start">Treatment mapping</p>
              )}
              <div>
                {diagram && <p className="eyebrow">Treatment mapping</p>}
                <h2 id="treatment-map" className={sectionHeadingClassName}>Planned around your anatomy.</h2>
                <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-[#5d564d]">{mapping.summary}</p>
                <ul className="mt-7 space-y-4 border-t border-[#d9d0c4] pt-6">
                  {mapping.points.map((point) => (
                    <li key={point} className="grid grid-cols-[1.25rem_1fr] gap-3 leading-relaxed text-[#5d564d]">
                      <span className="mt-[0.65rem] h-px bg-[#9a7742]" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#1d1b18] py-16 text-white sm:py-24" aria-labelledby="results">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d2b582]">What results look like</p>
              <h2 id="results" className={`${sectionHeadingClassName} max-w-[15ch] text-white`}>The result, without the sales pitch.</h2>
            </div>
            <div className="space-y-8 border-l border-white/20 pl-7 sm:pl-10">
              <div><h3 className="text-lg font-medium text-[#d2b582]">Expected change</h3><p className="mt-3 leading-relaxed text-white/75">{profile.result}</p></div>
              <div><h3 className="text-lg font-medium text-[#d2b582]">Honest timeline</h3><p className="mt-3 leading-relaxed text-white/75">{profile.timeline}</p></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24" aria-labelledby="price-sessions">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div><p className="eyebrow">Price + sessions</p><h2 id="price-sessions" className={sectionHeadingClassName}>Know the likely commitment.</h2></div>
              <div className="grid gap-px bg-[#d8cfc2] sm:grid-cols-2">
                <div className="bg-[#fbf9f5] p-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#776e63]">Price</p>
                  <dl className="mt-6 space-y-3">
                    {priceLines.map((line) => (
                      <div key={line.label} className="flex justify-between gap-5 border-b border-[#ddd4c7] pb-3">
                        <dt className="min-w-0">
                          <span className="block">{line.label}</span>
                          {line.note && <span className="mt-1 block max-w-[28ch] text-xs leading-relaxed text-[#6a6259]">{line.note}</span>}
                        </dt>
                        <dd className="shrink-0 font-medium tabular-nums">{line.price}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="bg-[#fbf9f5] p-8"><p className="text-xs uppercase tracking-[0.18em] text-[#776e63]">Sessions</p><p className="mt-6 leading-relaxed text-[#575149]">{profile.sessions}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" aria-labelledby="safety">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10"><p className="eyebrow">Safety + downtime</p><h2 id="safety" className={sectionHeadingClassName}>What you need to factor in.</h2></div>
            <div className="grid border-y border-[#cfc4b5] md:grid-cols-2 md:divide-x md:divide-[#cfc4b5]">
              <div className="py-8 md:pr-10"><ShieldCheck className="h-6 w-6 text-[#9a7742]" /><h3 className="mt-6 text-2xl font-medium">Safety</h3><p className="mt-4 leading-relaxed text-[#5d564d]">{profile.safety}</p></div>
              <div className="border-t border-[#cfc4b5] py-8 md:border-t-0 md:pl-10"><Clock className="h-6 w-6 text-[#9a7742]" /><h3 className="mt-6 text-2xl font-medium">Downtime</h3><p className="mt-4 leading-relaxed text-[#5d564d]">{profile.downtime}</p></div>
            </div>
          </div>
        </section>

        <section className="bg-[#e9e0d4] py-14 sm:py-18" aria-labelledby="skin-tone">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
            <p className="eyebrow">All skin tones</p>
            <div><h2 id="skin-tone" className={sectionHeadingClassName}>Your melanin changes the plan, not the standard of care.</h2><p className="mt-5 max-w-[70ch] leading-relaxed text-[#554d44]">{profile.skinTone}</p></div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24" aria-labelledby="treatment-faq">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-10">
            <div><p className="eyebrow">FAQ</p><h2 id="treatment-faq" className={sectionHeadingClassName}>Before you decide.</h2></div>
            <div className="border-t border-[#cfc4b5]">
              {profile.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#cfc4b5] py-6">
                  <summary className="flex cursor-pointer list-none justify-between gap-6 text-xl font-medium marker:content-none">{faq.question}<span className="text-2xl font-light transition-transform group-open:rotate-45">+</span></summary>
                  <p className="max-w-[65ch] pt-5 leading-relaxed text-[#5d564d]">{faq.answer}</p>
                </details>
              ))}
              {courseOffer && <details className="group border-b border-[#cfc4b5] py-6"><summary className="flex cursor-pointer list-none justify-between gap-6 text-xl font-medium marker:content-none">Can I split the cost of the course?<span className="text-2xl font-light transition-transform group-open:rotate-45">+</span></summary><p className="max-w-[65ch] pt-5 leading-relaxed text-[#5d564d]">Eligible clients may be able to use Clearpay at checkout for selected treatment plans. Approval and repayment terms are managed by Clearpay. Please only proceed if the repayments are manageable for you.</p></details>}
            </div>
          </div>
        </section>

        <section className="bg-[#c5a87a] py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#463825]">Book</p>
            <h2 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
              Ready to discuss your treatment?
            </h2>
            <p className="mx-auto mt-5 max-w-[58ch] leading-relaxed text-[#493e31]">Book directly or ask for guidance first. Your doctor confirms suitability before treatment.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              {courseOffer ? <BookingButton href={whatsappEnquiryUrl(courseOffer.title)} className="border-[#806234] bg-[#806234] text-white hover:border-[#6f542f] hover:bg-[#6f542f] hover:text-white sm:min-w-56">Discuss this plan</BookingButton> : <BookingButton href={treatment.bookingUrl} className="border-[#806234] bg-[#806234] text-white hover:border-[#6f542f] hover:bg-[#6f542f] hover:text-white sm:min-w-56">Book now</BookingButton>}
              <BookingButton href={courseOffer ? treatment.bookingUrl : whatsappUrl} variant="secondary" className="border-[#171512] text-[#171512] hover:border-[#171512] hover:bg-[#171512] sm:min-w-56">{courseOffer ? "Book single session" : "Ask a doctor on WhatsApp"}</BookingButton>
            </div>
            <Link href="/treatments" className="mt-8 inline-flex items-center gap-2 text-sm underline decoration-[#5f4c31] underline-offset-4">Compare all treatments <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </article>
    </>
  );
}
