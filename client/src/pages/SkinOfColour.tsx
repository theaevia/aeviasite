import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { CLINIC_WHATSAPP_ENQUIRE_URL } from "@/lib/bookingUrls";

const principles = [
  ["Diagnose before treating", "Pigment, inflammation, texture and shadow can look similar but need different approaches."],
  ["Control inflammation", "For skin of colour, unnecessary inflammation can increase the chance of post-inflammatory hyperpigmentation."],
  ["Adjust the protocol", "Needling depth, peel strength, injection plan and aftercare should reflect your skin, history and treatment area."],
  ["Review the endpoint", "We favour gradual change, documented with photographs, over aggressive treatment that adds avoidable risk."],
];

const concerns = [
  ["Post-inflammatory pigmentation", "Dark marks after acne, irritation or procedures need careful assessment of the active trigger and pigment depth."],
  ["Acne and texture", "Active inflammation is addressed separately from scarring. Microneedling is not performed through active inflamed lesions."],
  ["Dark circles", "Pigment, vessels, thin skin, hollowness and shadow are separated before recommending a skin-quality treatment."],
  ["Regenerative aesthetics", "Skin boosters and polynucleotides can be considered across skin tones with individual technique and aftercare."],
];

export default function SkinOfColourPage() {
  return (
    <>
      <SEO
        title="Aesthetics for Black skin London | Skin of Colour | Aevia"
        description="Doctor-led aesthetics for Black skin and skin of colour in London. Individual planning for pigmentation risk, acne marks, skin boosters and injectables."
        image="/assets/treatment_images/skin-of-colour-hero.png"
      />
      <article className="bg-[#fbf9f5] text-[#171512]">
        <header className="border-b border-[#d9d0c4] bg-white pb-16 pt-10 sm:pb-20 sm:pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <img
              src="/assets/treatment_images/skin-of-colour-hero.png"
              alt="Three women with different melanin-rich skin tones"
              className="mb-10 aspect-[16/7] w-full object-cover object-center sm:mb-14"
              width="1200"
              height="675"
              loading="eager"
            />
            <p className="eyebrow">Skin of colour aesthetics London</p>
            <h1 className="mt-5 max-w-[14ch] text-balance font-serif text-[clamp(2.8rem,5.4vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.045em]">The standard of care should fit your skin.</h1>
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <p className="max-w-[48ch] text-xl leading-relaxed text-[#514b43]">Doctor-led treatment planning for Black skin, brown skin and every melanin-rich skin tone.</p>
              <p className="max-w-[66ch] text-lg leading-relaxed text-[#5d564d]">Skin colour does not automatically exclude you from aesthetic treatment. It does change how we think about inflammation, post-inflammatory pigmentation, scarring, product choice, treatment depth and aftercare.</p>
            </div>
          </div>
        </header>

        <section className="py-16 sm:py-24" aria-labelledby="skin-colour-principles">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="eyebrow">Our clinical approach</p>
            <h2 id="skin-colour-principles" className="mt-5 max-w-[18ch] text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Melanin changes the plan, not the ambition.</h2>
            <div className="mt-10 grid gap-px bg-[#d8cfc2] md:grid-cols-2">
              {principles.map(([title, copy], index) => <div key={title} className="bg-white p-8 sm:p-10"><span className="font-mono text-xs text-[#967544]">0{index + 1}</span><h3 className="mt-6 text-2xl font-medium">{title}</h3><p className="mt-4 max-w-[52ch] leading-relaxed text-[#5d564d]">{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#1d1b18] py-16 text-white sm:py-24" aria-labelledby="skin-colour-concerns">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-10">
            <div><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d2b582]">Concerns we assess</p><h2 id="skin-colour-concerns" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">Similar appearance, different causes.</h2></div>
            <div className="divide-y divide-white/20 border-y border-white/20">{concerns.map(([title, copy]) => <div key={title} className="grid gap-3 py-7 sm:grid-cols-[0.55fr_1.45fr]"><h3 className="text-xl font-medium text-[#d2b582]">{title}</h3><p className="max-w-[60ch] leading-relaxed text-white/75">{copy}</p></div>)}</div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24" aria-labelledby="suitable-treatments">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="eyebrow">Treatment information</p>
            <h2 id="suitable-treatments" className="mt-5 max-w-[18ch] text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Start with the concern, then choose the tool.</h2>
            <div className="mt-10 grid gap-px bg-[#d8cfc2] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Polynucleotides", "/polynucleotides"],
                ["Sunekos", "/treatments/sunekos"],
                ["Profhilo", "/profhilo"],
                ["Anti-wrinkle", "/anti-wrinkle"],
              ].map(([label, href]) => <Link key={href} href={href} className="group flex min-h-40 flex-col justify-between bg-[#fbf9f5] p-7 transition-colors hover:bg-[#f2ede5]"><h3 className="text-2xl font-medium">{label}</h3><span className="inline-flex items-center gap-2 text-sm">Read the treatment guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" aria-labelledby="skin-colour-faq">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.6fr_1.4fr] lg:px-10">
            <div><p className="eyebrow">FAQ</p><h2 id="skin-colour-faq" className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Direct answers about darker skin.</h2></div>
            <div className="border-t border-[#cfc4b5]">
              <div className="border-b border-[#cfc4b5] py-6"><h3 className="text-xl font-medium">Are injectables safe for Black skin?</h3><p className="mt-3 max-w-[65ch] leading-relaxed text-[#5d564d]">Many injectable treatments can be considered across skin tones. Safety depends on the medicine or product, anatomy, technique, medical history and aftercare, not skin colour alone.</p></div>
              <div className="border-b border-[#cfc4b5] py-6"><h3 className="text-xl font-medium">Can darker skin have regenerative injectables?</h3><p className="mt-3 max-w-[65ch] leading-relaxed text-[#5d564d]">Yes, when appropriate. Inflammation, active skin disease and aftercare still need careful control because post-inflammatory pigmentation is a relevant risk.</p></div>
              <div className="border-b border-[#cfc4b5] py-6"><h3 className="text-xl font-medium">Do I need a consultation first?</h3><p className="mt-3 max-w-[65ch] leading-relaxed text-[#5d564d]">A consultation is useful when the diagnosis is unclear, pigmentation is active, you have reacted to previous treatments or you are comparing several options.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-[#c5a87a] py-16 text-center sm:py-24"><div className="mx-auto max-w-3xl px-6"><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#463825]">Doctor-led planning</p><h2 className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.03em]">Ready to discuss your skin?</h2><p className="mx-auto mt-5 max-w-[58ch] leading-relaxed text-[#493e31]">Tell us what you are noticing and what you have tried. We will help you choose a sensible next step.</p><BookingButton href={CLINIC_WHATSAPP_ENQUIRE_URL} className="mt-8 border-[#1d1b18] bg-[#1d1b18] text-white hover:border-[#3a332b] hover:bg-[#3a332b] hover:text-white">Ask on WhatsApp</BookingButton></div></section>
      </article>
    </>
  );
}
