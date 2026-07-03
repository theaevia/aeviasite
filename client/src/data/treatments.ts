import { pricing } from "@/data/pricing";
import {
  CONTOUR_DUO_URL,
  HYPERHIDROSIS_URL,
  MASSETER_URL,
  NEFERTITI_URL,
  PNS_EYES_URL,
  PNS_FACE_URL,
  PROFHILO_URL,
  SUNEKOS_URL,
  THREE_AREAS_URL,
  WRINKLE_RESET_URL,
} from "@/lib/bookingUrls";

export interface PriceTier {
  label: string;
  price: string;
}

export interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: string;
  bookingUrl: string;
  slug: string;
  image?: string;
  subtitle?: string;
  priceTiers?: PriceTier[];
  priceNote?: string;
}

export interface TreatmentCategory {
  category: string;
  slug: string;
  description?: string;
  treatments: Treatment[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    category: "Anti-Wrinkle Treatments",
    slug: "anti-wrinkle",
    description: "Targeted muscle-relaxing treatments to soften lines, reduce jaw tension and control excessive sweating.",
    treatments: [
      {
        name: "Anti-Wrinkle Treatment",
        description: "One, two or three areas to soften movement-related lines while maintaining natural expression. Includes a complimentary 2-week review.",
        duration: "30–45min",
        price: `From ${pricing.antiWrinkle.oneArea.display}`,
        bookingUrl: THREE_AREAS_URL,
        slug: "anti-wrinkle",
        image: "/assets/treatment_images/anti-wrinkle-hero-640w.webp",
        priceTiers: [
          { label: "One area", price: pricing.antiWrinkle.oneArea.display },
          { label: "Two areas", price: pricing.antiWrinkle.twoAreas.display },
          { label: "Three areas", price: pricing.antiWrinkle.threeAreas.display },
        ],
        priceNote: `Add a smile lift (DAO) to any anti-wrinkle appointment, ${pricing.antiWrinkle.smileLiftAddon.display}.`,
      },
      {
        name: "The Wrinkle Reset",
        description: "Three-area anti-wrinkle treatment and full-face Plinest in one appointment. Designed as one appointment. Works out at less than booking separately.",
        duration: "60min",
        price: pricing.signatures.wrinkleReset.display,
        bookingUrl: WRINKLE_RESET_URL,
        slug: "anti-wrinkle",
        image: "/assets/treatment_images/anti-wrinkle-hero-640w.webp",
      },
      {
        name: "Jawline Slimming (Masseter)",
        description: "Relaxes enlarged or overactive masseter muscles to reduce jaw tension and gradually slim the lower-face outline.",
        duration: "45min",
        price: pricing.antiWrinkle.masseter.display,
        bookingUrl: MASSETER_URL,
        slug: "jawline-slimming",
        image: "/assets/treatment_images/model-1-640w.webp",
      },
      {
        name: "Neck Lift (Nefertiti)",
        description: "Targets downward platysmal pull to refine the jaw-to-neck transition without surgery.",
        duration: "45min",
        price: pricing.antiWrinkle.neckLift.display,
        bookingUrl: NEFERTITI_URL,
        slug: "neck-lift",
        image: "/assets/treatment_images/neck-2-640w.webp",
        priceNote: `Add a smile lift (DAO) to any anti-wrinkle appointment, ${pricing.antiWrinkle.smileLiftAddon.display}.`,
      },
      {
        name: "Sweat Control",
        subtitle: "Underarm treatment",
        description: "Prescription treatment mapped across the active underarm sweating field.",
        duration: "60min",
        price: pricing.antiWrinkle.sweatControl.display,
        bookingUrl: HYPERHIDROSIS_URL,
        slug: "sweat-control",
        image: "/assets/treatment_images/armpit-2-640w.webp",
      },
      {
        name: "The Contour Duo",
        description: "Masseter treatment and a Nefertiti neck lift in one appointment for suitable lower-face anatomy.",
        duration: "60min",
        price: pricing.signatures.contourDuo.display,
        bookingUrl: CONTOUR_DUO_URL,
        slug: "lower-face-contour-duo",
        image: "/assets/treatment_images/lower-face-2-640w.webp",
      },
    ],
  },
  {
    category: "Skin Boosters",
    slug: "skin-boosters",
    description: "Injectable treatments for gradual improvements in hydration, texture and skin quality.",
    treatments: [
      {
        name: "Profhilo®",
        subtitle: "Deep hydration",
        description: "Hyaluronic-acid bio-remodelling for dehydrated, crepey or ageing skin without structural filler volume.",
        duration: "45min",
        price: pricing.regenerative.profhilo.display,
        bookingUrl: PROFHILO_URL,
        slug: "profhilo",
        image: "/assets/treatment_images/profhilo-640w.webp",
        priceNote: `Designed as a two-session treatment. The Glow Protocol is ${pricing.protocols.glow.display} for both sessions with a review between.`,
      },
      {
        name: "Sunekos",
        subtitle: "Skin quality",
        description: "Hyaluronic acid and amino acids used to support hydration and fine textural change.",
        duration: "45min",
        price: pricing.regenerative.sunekos.display,
        bookingUrl: SUNEKOS_URL,
        slug: "sunekos",
        image: "/assets/treatment_images/model-2-640w.webp",
        priceNote: `Course of 4: ${pricing.regenerative.sunekos.courseDisplay}.`,
      },
    ],
  },
  {
    category: "Polynucleotides",
    slug: "polynucleotides",
    description: "Plinest treatments for gradual under-eye or full-face skin repair and regeneration.",
    treatments: [
      {
        name: "Plinest Eye",
        subtitle: "Under-eye polynucleotides",
        description: "For selected under-eye crepiness, hydration and dark-circle concerns without filler-like volume.",
        duration: "45min",
        price: pricing.regenerative.plinestEye.display,
        bookingUrl: PNS_EYES_URL,
        slug: "eye-rejuvenation",
        image: "/assets/treatment_images/under-eye-1-640w.webp",
        priceNote: `The Eye Revival, course of 3: ${pricing.protocols.eyeRevival.display}.`,
      },
      {
        name: "Plinest Full Face",
        subtitle: "Full-face polynucleotides",
        description: "For gradual improvements in facial hydration, texture and resilience.",
        duration: "45min",
        price: pricing.regenerative.plinestFace.display,
        bookingUrl: PNS_FACE_URL,
        slug: "full-face-regeneration",
        image: "/assets/treatment_images/polynucleotides-1-640w.webp",
        priceNote: `Course of 3 (recommended): ${pricing.regenerative.plinestFace.courseDisplay}.`,
      },
    ],
  },
];

export const findTreatmentBySlug = (slug: string) => {
  for (const category of treatmentCategories) {
    const treatment = category.treatments.find((item) => item.slug === slug);
    if (treatment) return { ...treatment, category: category.category };
  }
  return null;
};

export const findCategoryBySlug = (slug: string) => treatmentCategories.find((category) => category.slug === slug);

export const getTreatmentPath = (slug: string) =>
  slug === "profhilo" || slug === "anti-wrinkle" ? `/${slug}` : `/treatments/${slug}`;
