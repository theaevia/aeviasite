import {
  CLARITY_STRATEGY_URL,
  CONTOUR_DUO_URL,
  DAO_SMILE_URL,
  HYPERHIDROSIS_URL,
  MASSETER_URL,
  MIND_DISCOVERY_URL,
  MOMENTUM_SIX_URL,
  NEFERTITI_URL,
  PNS_EYES_URL,
  PNS_FACE_URL,
  PROFHILO_URL,
  SCULPTRA_URL,
  SUNEKOS_URL,
  THREE_AREAS_URL,
  TRANSFORMATION_TWELVE_URL,
  SKIN_VIRTUAL_URL,
  SKIN_CLINIC_URL,
  MICRONEEDLING_REG_URL,
} from "@/lib/bookingUrls";

// Assets (optimized public variants for responsive delivery)
// Use 640w WebP as fallback; <picture> in cards will pick AVIF/WebP 320w/640w
const antiWrinkleHero = "/assets/treatment_images/anti-wrinkle-hero-640w.webp";
const lowerFaceHero = "/assets/treatment_images/lower-face-2-640w.webp";
const neckHero = "/assets/treatment_images/neck-2-640w.webp";
const sweatHero = "/assets/treatment_images/armpit-2-640w.webp";
const smileHero = "/assets/treatment_images/dao-640w.webp";
const jawSlimHero = "/assets/treatment_images/model-1-640w.webp";

// Types
export interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: string;
  bookingUrl: string;
  slug: string;
  image?: string;
  subtitle?: string;
}

export interface TreatmentCategory {
  category: string;
  slug: string; // Add this line
  description?: string;
  treatments: Treatment[];
}

// Data
export const treatmentCategories: TreatmentCategory[] = [
  {
    category: "Performance & Transformative Coaching",
    slug: "coaching",
    description: "Transformative coaching for high-performers: athletes, executives, and other leaders dedicated to fulfilling their potential. Coached by Dr Manu Sidhu - integrating insights from mental health, peak performance science, and psychological flourishing.",
    treatments: [
      {
        name: "Discovery Call",
        description: "A 30-minute call to explore your goals, challenges, and whether we're the right fit to work together.",
        duration: "30min",
        price: "Complimentary",
        bookingUrl: MIND_DISCOVERY_URL,
        slug: "discovery-call",
        image: "https://placehold.co/600x400"
      },
      {
        name: "Clarity & Strategy Session",
        description: "A 60-minute analytic deep dive to understand your goals, obstacles, and systems. You'll receive a written summary with an implementation strategy. The £250 fee is credited if you continue into a coaching programme.",
        duration: "1h",
        price: "£250",
        bookingUrl: CLARITY_STRATEGY_URL,
        slug: "clarity-strategy-session",
        image: "https://placehold.co/600x400"
      },
      {
        name: "Momentum 6",
        description: "A focused 6-session coaching programme over 8 weeks to sharpen your mindset, build momentum, and shift your approach to performance. Includes tools and support between sessions. (Split payment of 2 x £675 available).",
        duration: "1h (per session)",
        price: "£1,350",
        bookingUrl: MOMENTUM_SIX_URL,
        slug: "momentum-6",
        image: "https://placehold.co/600x400"
      },
      {
        name: "Transformation 12",
        description: "A deep 12-session journey over 3 months to rewire mindset, strengthen identity, and improve performance across work and life. For clients ready to commit to rich internal growth. (Split payment of 3 x £950 available).",
        duration: "1h (per session)",
        price: "£2,450",
        bookingUrl: TRANSFORMATION_TWELVE_URL,
        slug: "transformation-12",
        image: "https://placehold.co/600x400"
      },
      {
        name: "Elite Retainer",
        description: "Sustained coaching for high-performers dedicated to consistently improving, cultivating, and optimising their performance. Includes 4 sessions/month, quarterly/yearly reviews, and end-to-end goal fulfilment.",
        duration: "1h (per session)",
        price: "£12,000",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711403&share&pId=2507365",
        slug: "elite-retainer",
        image: "https://placehold.co/600x400"
      },
    ]
  },
  {
    category: "Aevia Skin Consultation",
    slug: "skin-consultation",
    description: "Services to guide new clients through their skin treatment journey with us. Fee redeemable against first treatment.",
    treatments: [
      {
        name: "Virtual Consultation",
        description: "A full-face skin consultation for first-time clients. Includes clinical discussion, skin assessment and tailored treatment planning. *Consultation fee 100% redeemable against future treatments booked within 14 days.",
        duration: "20min",
        price: "Complimentary",
        bookingUrl: SKIN_VIRTUAL_URL,
        slug: "virtual-consultation",
        image: "https://placehold.co/600x400"
      },
      {
        name: "In Clinic Consultation",
        description: "A full-face skin consultation for first-time clients. Includes clinical facial mapping and treatment planning. Option to proceed with treatment during same visit. *Consultation fee 100% redeemable against future treatments booked within 14 days.",
        duration: "20min",
        price: "£50",
        bookingUrl: SKIN_CLINIC_URL,
        slug: "in-clinic-consultation",
        image: "https://placehold.co/600x400"
      },
    ]
  },
  {
    category: "Anti-Wrinkle Treatments (Smooth & Refine)",
    slug: "anti-wrinkle",
    description: "Targeted muscle-relaxing treatments to soften lines, improve facial tension, and reduce sweating.",
    treatments: [
      {
        name: "One Area (Forehead, Frown or Crow's Feet)",
        description: "Choose one area to target. Designed to reduce lines while maintaining natural expression.",
        duration: "30min",
        price: "£160",
        bookingUrl: THREE_AREAS_URL,
        slug: "anti-wrinkle",
        image: antiWrinkleHero
      },
      {
        name: "Two Areas (Forehead, Frown or Crow's Feet)",
        description: "Choose two areas to target. Designed to reduce lines while maintaining natural expression.",
        duration: "45min",
        price: "£220",
        bookingUrl: THREE_AREAS_URL,
        slug: "anti-wrinkle",
        image: antiWrinkleHero
      },
      {
        name: "Three Areas (Forehead, Frown or Crow's Feet)",
        description: "Choose three areas to target. Designed to reduce lines while maintaining natural expression.",
        duration: "45min",
        price: "£260",
        bookingUrl: THREE_AREAS_URL,
        slug: "anti-wrinkle",
        image: antiWrinkleHero
      },
      {
        name: "Jawline Slimming (Masseter Reduction)",
        description: "Anti-wrinkle injections to relax the masseter muscles, helping slim the lower face and reduce jaw tension. Great when paired with a Nefertiti Neck Lift to sculpt the jaw.",
        duration: "45min",
        price: "£300",
        bookingUrl: MASSETER_URL,
        slug: "jawline-slimming",
        image: jawSlimHero
      },
      {
        name: "Smile Lift (DAO Treatment)",
        description: "Subtle lift to corners of the mouth to soften downturned smile lines.",
        duration: "30min",
        price: "£120",
        bookingUrl: DAO_SMILE_URL,
        slug: "smile-lift",
        image: smileHero
      },
      {
        name: "Neck Lift",
        description: "Defined jawline and smoother neck contours using targeted lower-face injections - without surgery. A great addition to Masseter Reduction for ultimate jaw slimming.",
        duration: "45min",
        price: "£270",
        bookingUrl: NEFERTITI_URL,
        slug: "neck-lift",
        image: neckHero
      },
      {
        name: "Sweat Reduction",
        subtitle: "Underarm treatment",
        description: "Underarm & palms treatment to reduce excessive sweating for up to 9 months.",
        duration: "1h",
        price: "£350",
        bookingUrl: HYPERHIDROSIS_URL,
        slug: "sweat-control",
        image: sweatHero
      },
      {
        name: "Lower-Face Contour Duo (Masseter Reduction + Jawline Tightening)",
        description: "One appointment, two goals: relieve teeth-grinding and refine your jawline symmetry.",
        duration: "1h",
        price: "£520",
        bookingUrl: CONTOUR_DUO_URL,
        slug: "lower-face-contour-duo",
        image: lowerFaceHero
      },
    ]
  },
  {
    category: "Skin Boosters (Hydration & Glow)",
    slug: "skin-boosters",
    description: "Advanced injectables to improve skin hydration, firmness, and radiance.",
    treatments: [
      {
        name: "Profhilo ®",
        subtitle: "Deep Hydration",
        description: "Remodels skin quality using hyaluronic acid spread across key zones, improving skin elasticity, collagen production and firmness. Best for dehydrated, crepey or ageing skin.",
        duration: "45min",
        price: "£300",
        bookingUrl: PROFHILO_URL,
        slug: "profhilo",
        image: "/assets/treatment_images/profhilo-640w.webp"
      },
      {
        name: "Sunekos",
        subtitle: "Cellular Regeneration",
        description: "Stimulates collagen and elastin production using amino acids and HA. Ideal for dull or tired-looking skin.",
        duration: "45min",
        price: "£250",
        bookingUrl: SUNEKOS_URL,
        slug: "sunekos",
        image: "/assets/treatment_images/model-2-640w.webp"
      },
    ]
  },
  {
    category: "Polynucleotides (Skin Repair & Regeneration)",
    slug: "polynucleotides",
    description: "Injectable skin treatments that use purified DNA fragments to support long-term repair and tissue regeneration.",
    treatments: [
      {
        name: "Eye Rejuvenation",
        subtitle: "Plinest Eye",
        description: "Targets under-eye hollowness, texture and dark circles with regenerative polynucleotides.",
        duration: "45min",
        price: "£250",
        bookingUrl: PNS_EYES_URL,
        slug: "eye-rejuvenation",
        image: "/assets/treatment_images/under-eye-1-640w.webp"
      },
      {
        name: "Full Face Regeneration",
        subtitle: "Plinest",
        description: "DNA-based injectable to improve skin density, elasticity and hydration. Suitable for early signs of ageing or post-inflammatory texture issues.",
        duration: "45min",
        price: "£300",
        bookingUrl: PNS_FACE_URL,
        slug: "full-face-regeneration",
        image: "/assets/treatment_images/polynucleotides-1-640w.webp"
      },
    ]
  },
  {
    category: "Microneedling (Collagen Induction)",
    slug: "microneedling",
    description: "Doctor-led microneedling to stimulate collagen, refine texture, and intensify active absorption. Choose HA-infused classic or regenerative exosome + polynucleotide boosters.",
    treatments: [
      {
        name: "Microneedling",
        subtitle: "Classic & Regenerative",
        description: "Collagen induction therapy customised for dullness, texture, scarring, and early laxity. Select HA-infused classic for glow or regenerative exosomes + polynucleotides for accelerated repair.",
        duration: "60min",
        price: "From £200",
        bookingUrl: MICRONEEDLING_REG_URL,
        slug: "microneedling",
        image: "/assets/treatment_images/model-2-640w.webp"
      }
    ]
  },
  {
    category: "Clinical Peels (Brighten & Renew)",
    slug: "clinical-peels",
    description: "Professional-grade peels to brighten, smooth, and even skin tone. Multiple options for different skin needs.",
    treatments: [
      {
        name: "Glycolic Peel (Coming Soon)",
        description: "AHA peel for brightening, smoothing, and improving skin texture. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "glycolic-peel",
        image: "/hero_images/glycolic-peel-example.webp"
      },
      {
        name: "Salicylic Peel (Coming Soon)",
        description: "BHA peel ideal for oily, acne-prone skin. Helps unclog pores and reduce breakouts. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "salicylic-peel",
        image: "/hero_images/salicylic-peel-example.webp"
      },
      {
        name: "Lactic Acid Peel (Coming Soon)",
        description: "Gentle AHA peel for hydration and mild exfoliation. Suitable for sensitive skin. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "lactic-acid-peel",
        image: "/hero_images/lactic-acid-peel-example.webp"
      },
      {
        name: "TCA Peel (Coming Soon)",
        description: "Medium-depth peel for pigmentation, texture, and rejuvenation. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "tca-peel",
        image: "/hero_images/tca-peel-example.webp"
      }
    ]
  },
  {
    category: "Bio-Voluminisation (Regenerate & Volumise)",
    slug: "bio-voluminisation",
    description: "Bio-voluminisation treatments to restore and enhance facial volume, reducing the appearance of wrinkles and improving skin texture.",
    treatments: [
      {
        name: "Sculptra",
        description: "A regenerative biostimulant that works deep within the skin to restore facial volume and support structure by stimulating natural collagen production. Unlike dermal fillers, Sculptra enhances your own tissue over time - resulting in gradual, long-lasting improvement in firmness, definition, and youthful contours. Recommended course: 2-3 sessions, spaced 4-6 weeks apart.",
        duration: "1h",
        price: "£550",
        bookingUrl: SCULPTRA_URL,
        slug: "sculptra",
        image: "/assets/treatment_images/sculptra-640w.webp"
      }
    ]
  },
];

export const findTreatmentBySlug = (slug: string) => {
  for (const category of treatmentCategories) {
    const treatment = category.treatments.find(t => t.slug === slug);
    if (treatment) {
      return { ...treatment, category: category.category };
    }
  }
  return null;
};

export const findCategoryBySlug = (slug: string) => {
  return treatmentCategories.find(c => c.slug === slug);
};
