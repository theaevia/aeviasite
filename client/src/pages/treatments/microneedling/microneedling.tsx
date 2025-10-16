import TreatmentLayout from "@/components/TreatmentLayout";
import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { IconBadge } from "@/components/IconBadge";
import { getHeroImageClassName, getHeroImageObjectPosition } from "@/lib/treatmentImageUtils";
import { MICRONEEDLING_REG_URL, MICRONEEDLING_REGEN_URL, SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";
import { asset, assetSrcSet } from "@/lib/assets";
import { Check, Clock3, Droplets, Dna, ShieldCheck, Sparkles } from "lucide-react";

const protocols = [
  {
    title: "Classic (HA-Infused)",
    price: "Single session £200",
    description: "Medical-grade microneedling paired with a hyaluronic acid serum to refine texture, soften lines, and restore glow.",
    bullets: [
      "Creates micro-channels to stimulate fresh collagen",
      "Delivers HA deeper for intense hydration and luminosity",
      "Improves product absorption for longer-lasting results",
    ],
    href: MICRONEEDLING_REG_URL,
    cta: "Book Classic Microneedling",
  },
  {
    title: "Regenerative (Exosomes + PNs)",
    price: "Single session £280",
    description: "Amplified collagen induction infusing purified polynucleotides plus the V-Tech exosome complex for faster repair and resilience.",
    bullets: [
      "Targets dullness, scarring, and early laxity with regenerative actives",
      "Supports accelerated recovery and stronger skin integrity",
      "Boosts hydration while signalling deeper repair pathways",
    ],
    href: MICRONEEDLING_REGEN_URL,
    cta: "Book Regenerative Microneedling",
  },
];

const pricing = [
  {
    variant: "Classic (HA-Infused)",
    href: MICRONEEDLING_REG_URL,
    options: [
      { label: "Single Session", price: "£200", note: "Best for a quick refresh" },
      { label: "Course of 3", price: "£560", note: "Save £40 vs. booking individually" },
      { label: "Course of 6", price: "£1,050", note: "Save £150 and maintain results" },
    ],
  },
  {
    variant: "Regenerative (Exosomes + PNs)",
    href: MICRONEEDLING_REGEN_URL,
    options: [
      { label: "Single Session", price: "£280", note: "Enhanced recovery and repair" },
      { label: "Course of 3", price: "£790", note: "Save £50 compared to single sessions" },
      { label: "Course of 6", price: "£1,480", note: "Save £200 and build cumulative results" },
    ],
  },
];

const journeySteps = [
  {
    title: "Personal Consultation",
    copy: "We map your skin, discuss goals, and decide whether Classic or Regenerative microneedling is the right fit.",
  },
  {
    title: "Preparation & Comfort",
    copy: "Skin is double cleansed and numbed for comfort. Targeted serums are selected based on your concerns.",
  },
  {
    title: "Microneedling Treatment",
    copy: "Precise depth control creates micro-channels while infusing HA or exosome + polynucleotide complexes.",
  },
  {
    title: "Recovery & Aftercare",
    copy: "Expect a radiant, even complexion within 24–48h. We provide tailored aftercare to maximise absorption.",
  },
];

const MICRONEEDLING_HERO_BASE = "/assets/treatment_images/model-1-640w.webp";
const microneedlingHero = asset(MICRONEEDLING_HERO_BASE);
const MICRONEEDLING_HERO_AVIF_SET = assetSrcSet(
  `${MICRONEEDLING_HERO_BASE.replace("-640w.webp", "-320w.avif")} 320w, ${MICRONEEDLING_HERO_BASE.replace("-640w.webp", "-640w.avif")} 640w, ${MICRONEEDLING_HERO_BASE.replace("-640w.webp", "-1280w.avif")} 1280w`
);
const MICRONEEDLING_HERO_WEBP_SET = assetSrcSet(
  `${MICRONEEDLING_HERO_BASE.replace("-640w.webp", "-320w.webp")} 320w, ${MICRONEEDLING_HERO_BASE.replace("-640w.webp", "-640w.webp")} 640w, ${MICRONEEDLING_HERO_BASE.replace("-640w.webp", "-1280w.webp")} 1280w`
);

export default function MicroneedlingPage() {
  return (
    <>
      <SEO
        title="Microneedling Treatments | The Aevia"
        description="Refine texture, soften fine lines, and accelerate repair with microneedling at The Aevia. Choose our HA-infused classic or regenerative exosomes + polynucleotides protocol."
      />
      <TreatmentLayout>
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-6xl container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  Microneedling Treatments
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Doctor-led collagen induction tailored for texture, scarring, and early lines. Select HA-infused classic or our regenerative exosome + polynucleotide boost for deeper repair.
                </p>
                <div className="flex items-center text-lg text-foreground/80 mb-6">
                  <span>From £200</span>
                  <span className="mx-2">•</span>
                  <span>60 mins</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <BookingButton href={MICRONEEDLING_REG_URL} variant="primary" className="w-full sm:w-auto">
                    Book Classic
                  </BookingButton>
                  <BookingButton
                    href={MICRONEEDLING_REGEN_URL}
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Book Regenerative
                  </BookingButton>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-y-2 lg:gap-y-4 mt-8">
                  <IconBadge>
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span>Performed by GMC-registered doctor</span>
                  </IconBadge>
                  <IconBadge>
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span>Minimal downtime, glow within 48h</span>
                  </IconBadge>
                  <IconBadge>
                    <Droplets className="w-5 h-5 text-primary" />
                    <span>Advanced serums infused for deeper impact</span>
                  </IconBadge>
                </div>
              </div>
              <div className="order-1 lg:order-2 w-full">
                <div className="relative w-full pb-[75%]">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={MICRONEEDLING_HERO_AVIF_SET}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <source
                      type="image/webp"
                      srcSet={MICRONEEDLING_HERO_WEBP_SET}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    />
                    <img
                      src={microneedlingHero}
                      alt="Microneedling treatment example"
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg ${getHeroImageClassName('microneedling')}`}
                      style={{ objectPosition: getHeroImageObjectPosition('microneedling') }}
                      loading="eager"
                     
                      width={1280}
                      height={960}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-black text-center">
              Two Targeted Microneedling Protocols
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {protocols.map(protocol => (
                <div key={protocol.title} className="bg-white rounded-2xl shadow p-8 flex flex-col">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-2xl font-serif font-semibold text-primary">{protocol.title}</h3>
                    <span className="text-sm font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                      {protocol.price}
                    </span>
                  </div>
                  <p className="text-base text-foreground/80 mt-4">{protocol.description}</p>
                  <ul className="mt-6 space-y-3 text-foreground/80">
                    {protocol.bullets.map(point => (
                      <li key={point} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Immediate Radiance</h3>
                <p className="text-sm text-foreground/70">
                  Expect a fresh, even complexion and improved makeup/skincare absorption within 48 hours.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Dna className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Collagen & Elasticity Boost</h3>
                <p className="text-sm text-foreground/70">
                  Controlled micro-punctures trigger fibroblast activity, encouraging firmer, more resilient skin.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock3 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Minimal Downtime</h3>
                <p className="text-sm text-foreground/70">
                  Mild warmth and pinkness settle quickly. Most clients resume normal activity the same day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-black text-center mb-10">
              Transparent Pricing & Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricing.map(plan => (
                <div key={plan.variant} className="bg-white rounded-2xl shadow p-8 flex flex-col">
                  <h3 className="text-2xl font-serif font-semibold text-primary">{plan.variant}</h3>
                  <p className="text-sm text-foreground/70 mt-2">
                    Courses secure consistency and compound collagen stimulation.
                  </p>
                  <div className="mt-6 space-y-4">
                    {plan.options.map(option => (
                      <div key={option.label} className="border border-muted rounded-xl p-4">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <span className="font-semibold text-foreground">{option.label}</span>
                          <span className="text-lg font-medium text-primary">{option.price}</span>
                        </div>
                        <p className="text-sm text-foreground/70 mt-2">{option.note}</p>
                      </div>
                    ))}
                  </div>
                  <BookingButton href={plan.href} className="mt-8 w-full">
                    Book {plan.variant}
                  </BookingButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-12 text-center">
              Your Microneedling Journey
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-normal mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-black">Not sure where to start?</h2>
            <p className="text-base text-foreground/80 mb-6">
              Book a consultation to map your skin, plan your course, and receive bespoke aftercare guidance from Dr Manu.
            </p>
            <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full sm:w-auto">
              Book Skin Consultation
            </BookingButton>
          </div>
        </section>
      </TreatmentLayout>
    </>
  );
}
