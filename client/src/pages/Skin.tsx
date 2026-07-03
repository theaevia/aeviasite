import { Link } from "wouter";
import { ArrowRight, MapPin, Star, Stethoscope, UsersRound } from "lucide-react";

import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import Map from "@/components/Map";
import { clinicOpeningHours } from "@/data/openingHours";
import { testimonials } from "@/data/testimonials";
import { findTreatmentBySlug, getTreatmentPath } from "@/data/treatments";
import { CLINIC_WHATSAPP_ENQUIRE_URL, SQUARE_SITE_URL } from "@/lib/bookingUrls";

import clinicHeroImage from "@assets/hero_images/aevia-clinic3.webp";
import clinicHeroImage800 from "@assets/hero_images/aevia-clinic3-800w.webp";
import terrellImage from "@assets/about_pics/terrell-pic3.webp";
import reneeImage from "@assets/about_pics/renee-pic.webp";

const featuredTreatmentSlugs = [
  "anti-wrinkle",
  "profhilo",
  "eye-rejuvenation",
  "jawline-slimming",
  "sculptra",
];

const featuredTreatments = featuredTreatmentSlugs
  .map(findTreatmentBySlug)
  .filter((treatment): treatment is NonNullable<typeof treatment> => Boolean(treatment));

const faqs = [
  {
    question: "Does treatment hurt?",
    answer:
      "Most clients describe brief pinching or pressure rather than significant pain. We explain each step, work at your pace and use topical numbing where it is appropriate.",
  },
  {
    question: "How much downtime should I expect?",
    answer:
      "It depends on the treatment. Injectable redness, swelling or small bumps often settle within hours to a few days. Your doctor will give you treatment-specific aftercare.",
  },
  {
    question: "Are these treatments safe for darker skin tones?",
    answer:
      "We assess every skin tone individually and adjust product choice, treatment depth and aftercare to reduce risks such as post-inflammatory pigmentation. Some peels and energy-based approaches need particular caution, so suitability is confirmed before treatment.",
  },
  {
    question: "How do I choose the right treatment?",
    answer:
      "Start with the result you want, not a product name. If you are unsure, message us on WhatsApp. We will explain realistic options and tell you when treatment is not indicated.",
  },
];

export default function Skin() {
  return (
    <>
      <SEO
        title="Doctor-Led Aesthetics London | King's Cross | Aevia Skin"
        description="Doctor-led regenerative aesthetics in King's Cross, London. Evidence-based treatments for every skin tone, with clear prices and natural-looking results."
        image="/hero_images/aevia-clinic3.webp"
      />

      <div className="min-h-screen bg-[#fbf9f5] text-[#171512]">
        <section className="bg-white py-14 sm:py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
            <div className="order-2 max-w-2xl lg:order-1">
              <p className="eyebrow mb-5">Doctor-led aesthetics · King&apos;s Cross</p>
              <h1 className="page-title max-w-[12ch]">
                Better skin. Still you.
              </h1>
              <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-[#5a544b] sm:text-xl">
                Doctor-led regenerative aesthetics in King&apos;s Cross. Skin boosters, polynucleotides and subtle anti-wrinkle treatments, planned by GMC-registered doctors for every skin tone.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <BookingButton href={SQUARE_SITE_URL} className="sm:min-w-48">
                  Book a treatment
                </BookingButton>
                <a
                  href={CLINIC_WHATSAPP_ENQUIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-medium text-[#6d5838] underline decoration-[#c5a87a] underline-offset-4 transition-colors hover:text-[#171512]"
                >
                  Not sure? Ask a doctor <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 text-sm text-[#6c655c]">Suitability is confirmed by your doctor before every treatment.</p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e1d7] sm:aspect-[5/4] lg:aspect-[4/5]">
                <picture>
                  <source srcSet={`${clinicHeroImage800} 800w, ${clinicHeroImage} 1600w`} type="image/webp" />
                  <img
                    src={clinicHeroImage}
                    srcSet={`${clinicHeroImage800} 800w, ${clinicHeroImage} 1600w`}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    alt="Aevia Skin treatment room in King's Cross, London"
                    className="h-full w-full object-cover"
                    width="1600"
                    height="1200"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Clinic credentials" className="border-y border-[#ddd4c7] bg-[#f2ede5]">
          <div className="mx-auto grid max-w-7xl divide-y divide-[#d8cfc2] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
            {[
              { label: "GMC-registered doctors", Icon: Stethoscope },
              { label: "Experienced with all skin tones", Icon: UsersRound },
              { label: "King's Cross · 3 min from station", Icon: MapPin },
            ].map(({ label, Icon }) => (
              <div key={label} className="flex items-center justify-center gap-3 py-5 text-center text-sm font-medium sm:px-5">
                <Icon className="h-5 w-5 shrink-0 text-[#806234]" strokeWidth={1.7} aria-hidden />
                {label}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="how-we-work">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="eyebrow">How we work</p>
                <h2 id="how-we-work" className="mt-5 max-w-[10ch] text-balance text-4xl font-medium leading-tight tracking-[-0.025em] sm:text-5xl">
                  A clear plan before any treatment.
                </h2>
              </div>
              <ol className="grid border-t border-[#cfc4b5] md:grid-cols-3 md:border-l md:border-t-0">
                {[
                  ["01", "Consult", "We listen to your goals, assess your skin and confirm medical suitability."],
                  ["02", "Plan", "Your doctor explains the useful options, realistic result and total cost."],
                  ["03", "Treat & review", "We treat conservatively, provide aftercare and review when clinically needed."],
                ].map(([number, title, copy]) => (
                  <li key={number} className="border-b border-[#cfc4b5] py-8 md:border-b-0 md:border-r md:px-7 md:py-3">
                    <span className="font-mono text-xs text-[#967544]">{number}</span>
                    <h3 className="mt-7 text-2xl font-medium">{title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-[#625c53]">{copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="treatment-menu">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Treatment menu</p>
                <h2 id="treatment-menu" className="mt-5 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">Clear options. Clear prices.</h2>
              </div>
              <Link href="/treatments" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-[#c5a87a] underline-offset-4">
                See every treatment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-px overflow-hidden border border-[#d8cfc2] bg-[#d8cfc2] sm:grid-cols-2 lg:grid-cols-3">
              {featuredTreatments.map((treatment, index) => (
                <article key={treatment.slug} className="group flex min-h-[19rem] flex-col bg-[#fbf9f5] p-7 transition-colors duration-300 hover:bg-[#f2ede5] sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-[#8a8176]">0{index + 1}</span>
                    <span className="text-lg font-medium tabular-nums text-[#806234]">{treatment.price}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-medium leading-snug">{treatment.name}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-[#625c53]">{treatment.description}</p>
                  <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#746c61]">{treatment.duration}</span>
                    <Link
                      href={getTreatmentPath(treatment.slug)}
                      aria-label={`View ${treatment.name}`}
                      className="flex h-10 w-10 items-center justify-center border border-[#a99370] transition-transform duration-200 group-hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806234]"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="doctors">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow">The doctors</p>
              <h2 id="doctors" className="mt-5 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">Medical judgement, human care.</h2>
            </div>
            <div className="grid gap-10 md:grid-cols-2 md:gap-6">
              {[
                {
                  name: "Dr Terrell Okhiria",
                  role: "GP trainee & aesthetic doctor",
                  line: "Calm, precise and focused on changes that never look overdone.",
                  image: terrellImage,
                },
                {
                  name: "Dr Renée Okhiria",
                  role: "Medical & aesthetic doctor",
                  line: "A meticulous planner with an eye for balance and long-term skin health.",
                  image: reneeImage,
                },
              ].map((doctor) => (
                <article key={doctor.name} className="grid min-w-0 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                  <div className="relative min-w-0 overflow-hidden">
                    <img src={doctor.image} alt={doctor.name} className="block aspect-[4/5] h-auto w-full object-cover" width="600" height="800" loading="lazy" />
                  </div>
                  <div className="relative z-10 min-w-0 bg-[#fbf9f5] pb-2">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8a6a3b]">GMC-registered doctor</p>
                    <h3 className="mt-3 text-3xl font-medium">{doctor.name}</h3>
                    <p className="mt-2 text-sm text-[#736b60]">{doctor.role}</p>
                    <p className="mt-6 max-w-[34ch] text-base leading-relaxed text-[#514c45]">{doctor.line}</p>
                    <a
                      href="https://www.gmc-uk.org/registration-and-licensing/our-registers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block text-sm underline decoration-[#c5a87a] underline-offset-4"
                    >
                      Check the GMC register
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1d1b18] py-20 text-white sm:py-28" aria-labelledby="reviews">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d2b582]">Google reviews</p>
                <h2 id="reviews" className="mt-5 text-4xl font-medium tracking-[-0.025em] text-white sm:text-5xl">What clients say.</h2>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-[#d2b582] text-[#d2b582]" />)}
                  </div>
                  <span className="font-mono text-sm">5.0</span>
                </div>
                <a href="https://maps.app.goo.gl/jpQNgXg92eiBesPD8" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm underline decoration-[#d2b582] underline-offset-4">
                  View on Google <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid gap-px bg-white/20 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <a
                    key={testimonial.name}
                    href={testimonial.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${testimonial.name}'s review on Google`}
                    className="group block bg-[#282521] transition-colors duration-300 hover:bg-[#322e29] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d2b582]"
                  >
                    <figure className="flex min-h-[19rem] flex-col p-7">
                      <blockquote className="text-base leading-relaxed text-white/85">“{testimonial.quote}”</blockquote>
                      <figcaption className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm text-[#d2b582]">
                        {testimonial.name} · Google review
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </figcaption>
                    </figure>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 overflow-hidden border border-white/20 bg-white">
              <iframe
                title="Aevia Skin live Google business listing and reviews"
                src="https://www.google.com/maps?q=Aevia+Skin,+260+Pentonville+Road,+London&output=embed"
                className="h-[22rem] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="faqs">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-10">
            <div>
              <p className="eyebrow">Before you book</p>
              <h2 id="faqs" className="mt-5 text-4xl font-medium tracking-[-0.025em] sm:text-5xl">Straight answers.</h2>
            </div>
            <div className="border-t border-[#cfc4b5]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#cfc4b5] py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium marker:content-none">
                    {faq.question}
                    <span className="font-sans text-2xl font-light transition-transform duration-200 group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="max-w-[65ch] pt-5 text-base leading-relaxed text-[#5e584f]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="location-hours">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid overflow-hidden border border-[#d4cabc] bg-white lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 sm:p-12">
                <p className="eyebrow">Location + hours</p>
                <h2 id="location-hours" className="mt-5 text-4xl font-medium tracking-[-0.025em]">King&apos;s Cross, London.</h2>
                <a href="https://maps.app.goo.gl/KUyjk1sRrauncTx49" target="_blank" rel="noopener noreferrer" className="mt-7 flex items-start gap-3 text-base leading-relaxed underline decoration-[#c5a87a] underline-offset-4">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#9a7742]" />
                  Minsony, 260 Pentonville Road, London N1 9JY
                </a>
                <dl className="mt-10 max-w-md divide-y divide-[#e1d9cf] border-y border-[#e1d9cf] text-sm">
                  {clinicOpeningHours.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between gap-6 py-3">
                      <dt>{day}</dt>
                      <dd className="tabular-nums text-[#6a6259]">{hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-sm text-[#6a6259]">Appointments only · three minutes&apos; walk from King&apos;s Cross station.</p>
              </div>
              <Map className="h-[32rem] border-0 shadow-none lg:h-full" />
            </div>
          </div>
        </section>

        <section className="bg-[#c5a87a] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#3c3021]">Your next step</p>
            <h2 className="mx-auto mt-5 max-w-[16ch] text-balance text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">Good treatment starts with good judgement.</h2>
            <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-[#40372b]">Book directly if you know what you want, or ask us for guidance first. We will confirm suitability before treatment.</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <BookingButton href={SQUARE_SITE_URL} className="border-[#806234] bg-[#806234] text-white hover:border-[#6f542f] hover:bg-[#6f542f] hover:text-white sm:min-w-52">Book a treatment</BookingButton>
              <BookingButton href={CLINIC_WHATSAPP_ENQUIRE_URL} variant="secondary" className="border-[#171512] text-[#171512] hover:border-[#171512] hover:bg-[#171512] sm:min-w-52">Ask for guidance</BookingButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
