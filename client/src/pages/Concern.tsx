import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { concernBySlug } from "@/data/concerns";
import { CLINIC_WHATSAPP_ENQUIRE_URL } from "@/lib/bookingUrls";

export default function ConcernPage() {
  const { slug = "" } = useParams<{ slug?: string }>();
  const concern = concernBySlug(slug);

  if (!concern) {
    return <section className="mx-auto max-w-4xl px-6 py-24 text-center"><h1 className="page-title">Concern not found</h1><Link href="/concerns" className="mt-8 inline-flex items-center gap-2 underline underline-offset-4"><ArrowLeft className="h-4 w-4" /> View all concerns</Link></section>;
  }

  return (
    <>
      <SEO title={`${concern.title} | Doctor-Led Guide | Aevia Skin`} description={concern.description} />
      <article className="bg-[#fbf9f5] text-[#171512]">
        <header className="border-b border-[#d9d0c4] bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link href="/concerns" className="inline-flex items-center gap-2 text-sm text-[#6b6258] underline decoration-[#c5a87a] underline-offset-4"><ArrowLeft className="h-4 w-4" /> All concerns</Link>
            <p className="eyebrow mt-10">{concern.keyword}</p>
            <h1 className="page-title mt-5 max-w-[13ch]">{concern.title}</h1>
            <p className="mt-7 max-w-[64ch] text-lg leading-relaxed text-[#585149] sm:text-xl">{concern.description}</p>
          </div>
        </header>

        <section className="border-b border-[#d9d0c4] bg-[#f2ede5] py-16 sm:py-24" aria-labelledby="understanding-concern">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-10">
            <div><p className="eyebrow">Understanding the concern</p><h2 id="understanding-concern" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Similar appearance does not always mean the same cause.</h2></div>
            <div className="space-y-6 border-t border-[#cfc4b5] pt-7 text-lg leading-relaxed text-[#514b43] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">{concern.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>

        <section className="py-16 sm:py-24" aria-labelledby="possible-factors">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-10">
            <div><p className="eyebrow">What we assess</p><h2 id="possible-factors" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Factors that can shape the plan.</h2></div>
            <ul className="grid gap-px bg-[#d8cfc2] sm:grid-cols-2">{concern.possibleFactors.map((factor) => <li key={factor} className="bg-white p-7 leading-relaxed"><Check className="mb-6 h-5 w-5 text-[#9a7742]" />{factor}</li>)}</ul>
          </div>
        </section>

        <section className="border-y border-[#d9d0c4] bg-white py-16 sm:py-24" aria-labelledby="treatments-that-may-help">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="eyebrow">Options we may discuss</p>
            <h2 id="treatments-that-may-help" className="mt-5 max-w-[17ch] text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Treatments that may fit this concern.</h2>
            {concern.recommendedPlan && <div className="mt-10 grid gap-6 bg-[#1d1b18] p-8 text-white sm:p-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#d2b582]">The plan we usually recommend</p><h3 className="mt-4 text-3xl font-medium">{concern.recommendedPlan.name}</h3><p className="mt-4 max-w-[62ch] leading-relaxed text-white/70">{concern.recommendedPlan.description}</p></div><div className="md:text-right"><p className="text-3xl font-medium tabular-nums text-[#d2b582]">{concern.recommendedPlan.price}</p><Link href={concern.recommendedPlan.href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline decoration-[#d2b582] underline-offset-4">See the plan <ArrowRight className="h-4 w-4" /></Link></div></div>}
            <div className="mt-6 grid gap-px bg-[#d8cfc2] md:grid-cols-2">{concern.treatments.map((treatment) => {
              const content = <><h3 className="text-2xl font-medium">{treatment.name}</h3><p className="mt-5 max-w-[55ch] leading-relaxed text-[#5d564d]">{treatment.explanation}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium">See the next step <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></>;
              const className = "group flex min-h-60 flex-col bg-[#fbf9f5] p-8 transition-colors hover:bg-[#f2ede5]";
              return treatment.href.startsWith("http") ? <a key={treatment.href} href={treatment.href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a> : <Link key={treatment.href} href={treatment.href} className={className}>{content}</Link>;
            })}</div>
          </div>
        </section>

        <section className="bg-[#e9e0d4] py-14 sm:py-18" aria-labelledby="skin-tone-guidance"><div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10"><p className="eyebrow">Skin-tone guidance</p><div><h2 id="skin-tone-guidance" className="text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">The plan should account for your skin.</h2><p className="mt-5 max-w-[70ch] leading-relaxed text-[#554d44]">{concern.skinToneNote}</p></div></div></section>

        <section className="bg-white py-16 sm:py-24" aria-labelledby="concern-faq"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-10"><div><p className="eyebrow">FAQ</p><h2 id="concern-faq" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Useful context before you choose.</h2></div><div className="border-t border-[#cfc4b5]">{concern.faqs.map((faq) => <div key={faq.question} className="border-b border-[#cfc4b5] py-6"><h3 className="text-xl font-medium">{faq.question}</h3><p className="mt-3 max-w-[65ch] leading-relaxed text-[#5d564d]">{faq.answer}</p></div>)}</div></div></section>

        <section className="bg-[#c5a87a] py-16 text-center sm:py-24"><div className="mx-auto max-w-3xl px-6"><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#463825]">A direct next step</p><h2 className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Ask a doctor about your concern.</h2><p className="mx-auto mt-5 max-w-[58ch] leading-relaxed text-[#493e31]">Send us a short message on WhatsApp. We will help you decide whether to book a treatment or seek another kind of assessment.</p><BookingButton href={CLINIC_WHATSAPP_ENQUIRE_URL} className="mt-8 !border-[#1d1b18] !bg-[#1d1b18] !text-white hover:!bg-[#3a332b]">Ask on WhatsApp</BookingButton></div></section>
      </article>
    </>
  );
}
