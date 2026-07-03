import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { pricing } from "@/data/pricing";
import { CLINIC_WHATSAPP_ENQUIRE_URL } from "@/lib/bookingUrls";

const options = [
  {
    title: "Under-eye polynucleotides",
    href: "/treatments/eye-rejuvenation",
    copy: "For selected crepiness, dehydration and dark-circle concerns where improving skin quality is the goal.",
    price: pricing.regenerative.plinestEye.display,
    course: `The Eye Revival, course of 3: ${pricing.protocols.eyeRevival.display}`,
  },
  {
    title: "Full-face polynucleotides",
    href: "/treatments/full-face-regeneration",
    copy: "For gradual improvement in facial hydration, texture and resilience without structural filler volume.",
    price: pricing.regenerative.plinestFace.display,
    course: `Course of 3 (recommended): ${pricing.regenerative.plinestFace.courseDisplay}`,
  },
];

const faqs = [
  ["Are polynucleotides filler?", "No. They are used as a regenerative skin-quality treatment and do not create the same structural volume as dermal filler."],
  ["Can they treat dark circles?", "Sometimes. Dark circles can be caused by pigment, visible vessels, hollowness, thin skin or shadow. Examination identifies which component may respond."],
  ["How many sessions will I need?", "A course is usually recommended. The number and spacing depend on the area, product and your response."],
];

export default function PolynucleotidesPage() {
  return (
    <>
      <SEO
        title="Polynucleotides London | Under-Eye and Face | Aevia Skin"
        description="Doctor-led polynucleotide treatments in London for under-eye and full-face skin quality. Clear advice on dark circles, sessions, downtime and every skin tone."
        image="/assets/treatment_images/under-eye-1-1280w.webp"
      />
      <article className="bg-[#fbf9f5] text-[#171512]">
        <header className="border-b border-[#d9d0c4] bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
            <div>
              <p className="eyebrow">Polynucleotides London</p>
              <h1 className="page-title mt-5 max-w-[11ch]">Polynucleotides</h1>
              <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-[#585149] sm:text-xl">
                Doctor-led polynucleotide injections for under-eye and facial skin quality, planned around the cause of your concern and your skin tone.
              </p>
            </div>
            <img src="/assets/treatment_images/under-eye-1-1280w.webp" alt="Under-eye polynucleotide treatment planning" className="aspect-[4/3] w-full object-cover" width="1280" height="960" />
          </div>
        </header>

        <section className="py-16 sm:py-24" aria-labelledby="what-are-polynucleotides">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.6fr_1.4fr] lg:px-10">
            <div><p className="eyebrow">What they are</p><h2 id="what-are-polynucleotides" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">A skin-quality treatment with a gradual endpoint.</h2></div>
            <div className="space-y-6 border-t border-[#cfc4b5] pt-7 text-lg leading-relaxed text-[#514b43] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p>Polynucleotides are purified DNA fragments injected in small superficial deposits. They are used to support hydration, texture and the skin&apos;s regenerative environment rather than to reshape the face.</p>
              <p>Improvement builds across a treatment course and the following weeks. Temporary bumps or swelling on treatment day are not the result, and genuine change should be assessed with consistent photographs.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d9d0c4] bg-white py-16 sm:py-24" aria-labelledby="polynucleotide-options">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="eyebrow">Treatment options</p>
            <h2 id="polynucleotide-options" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Choose by concern, not by trend.</h2>
            <div className="mt-10 grid gap-px bg-[#d8cfc2] md:grid-cols-2">
              {options.map((option) => (
                <Link key={option.href} href={option.href} className="group flex min-h-72 flex-col bg-[#fbf9f5] p-8 transition-colors hover:bg-[#f2ede5] sm:p-10">
                  <div className="flex items-start justify-between gap-5"><h3 className="text-3xl font-medium">{option.title}</h3><span className="text-xl font-medium text-[#806234]">{option.price}</span></div>
                  <p className="mt-6 max-w-[52ch] leading-relaxed text-[#5d564d]">{option.copy}</p>
                  <p className="mt-4 text-sm font-medium text-[#806234]">{option.course}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium">See treatment details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1d1b18] py-16 text-white sm:py-24" aria-labelledby="dark-circles">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
            <div><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d2b582]">Dark circles treatment London</p><h2 id="dark-circles" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">Dark circles are a description, not one diagnosis.</h2></div>
            <ul className="space-y-5 border-l border-white/20 pl-8 text-white/75">
              {["Pigment and post-inflammatory change", "Visible vessels through thin skin", "Hollowness and structural shadow", "Crepey, dehydrated skin quality"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-[#d2b582]" />{item}</li>)}
              <li className="pt-3 leading-relaxed">Polynucleotides are most relevant when skin quality contributes to the concern. Your doctor will say clearly when pigment, anatomy or another cause needs a different plan.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24" aria-labelledby="polynucleotide-faq">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.6fr_1.4fr] lg:px-10">
            <div><p className="eyebrow">FAQ</p><h2 id="polynucleotide-faq" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Before you decide.</h2></div>
            <div className="border-t border-[#cfc4b5]">{faqs.map(([question, answer]) => <div key={question} className="border-b border-[#cfc4b5] py-6"><h3 className="text-xl font-medium">{question}</h3><p className="mt-3 max-w-[65ch] leading-relaxed text-[#5d564d]">{answer}</p></div>)}</div>
          </div>
        </section>

        <section className="bg-[#c5a87a] py-16 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-6"><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#463825]">Your next step</p><h2 className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Ready to discuss your treatment?</h2><p className="mx-auto mt-5 max-w-[58ch] leading-relaxed text-[#493e31]">Ask a doctor which option fits the cause of your concern.</p><BookingButton href={CLINIC_WHATSAPP_ENQUIRE_URL} className="mt-8 border-[#1d1b18] bg-[#1d1b18] text-white hover:border-[#3a332b] hover:bg-[#3a332b] hover:text-white">Ask on WhatsApp</BookingButton></div>
        </section>
      </article>
    </>
  );
}
