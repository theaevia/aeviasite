import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import SEO from "@/components/SEO";
import { concerns } from "@/data/concerns";
import { BookingButton } from "@/components/BookingButton";
import { CLINIC_WHATSAPP_ENQUIRE_URL } from "@/lib/bookingUrls";

export default function ConcernsPage() {
  return (
    <>
      <SEO
        title="Skin and Aesthetic Concerns | Aevia Skin London"
        description="Start with your concern, from dark under-eyes and fine lines to excessive sweating, jaw tension, dullness and uneven texture. See doctor-led treatment options."
      />
      <article className="bg-[#fbf9f5] text-[#171512]">
        <header className="border-b border-[#d9d0c4] bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="eyebrow">Concerns and conditions</p>
            <h1 className="page-title mt-5 max-w-[13ch]">Start with what you're noticing.</h1>
            <p className="mt-7 max-w-[64ch] text-lg leading-relaxed text-[#585149] sm:text-xl">You don't need to choose a product before speaking to us. Each guide explains the possible causes, treatments that may help and when another kind of assessment is more appropriate.</p>
          </div>
        </header>

        <section className="py-16 sm:py-24" aria-labelledby="all-concerns">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 id="all-concerns" className="sr-only">All concern guides</h2>
            <div className="grid gap-px bg-[#d8cfc2] md:grid-cols-2 lg:grid-cols-3">
              {concerns.map((concern, index) => (
                <Link key={concern.slug} href={`/concerns/${concern.slug}`} className="group flex min-h-72 flex-col bg-white p-8 transition-colors hover:bg-[#f2ede5]">
                  <span className="font-mono text-xs text-[#967544]">0{index + 1}</span>
                  <h3 className="mt-8 max-w-[14ch] text-3xl font-medium leading-tight">{concern.title}</h3>
                  <p className="mt-5 line-clamp-3 leading-relaxed text-[#5d564d]">{concern.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium">Read the concern guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d9d0c4] bg-[#1d1b18] py-16 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:px-10">
            <div><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d2b582]">A separate clinical pillar</p><h2 className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">Aesthetics for black skin and skin of colour.</h2></div>
            <div><p className="max-w-[64ch] leading-relaxed text-white/75">Skin of colour is not one concern. It affects how inflammation, post-inflammatory pigmentation, scarring, treatment depth and aftercare should be considered across many concerns.</p><Link href="/skin-of-colour" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#d2b582] underline underline-offset-4">Read the skin of colour guide <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </section>

        <section className="bg-[#c5a87a] py-16 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-6"><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#463825]">Not sure where to start?</p><h2 className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Tell a doctor what you are noticing.</h2><p className="mx-auto mt-5 max-w-[58ch] leading-relaxed text-[#493e31]">WhatsApp is the quickest way to ask which guide or appointment fits.</p><BookingButton href={CLINIC_WHATSAPP_ENQUIRE_URL} className="mt-8 !border-[#1d1b18] !bg-[#1d1b18] !text-white hover:!bg-[#3a332b]">Ask on WhatsApp</BookingButton></div>
        </section>
      </article>
    </>
  );
}
