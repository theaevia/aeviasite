// Types
export interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: string;
  bookingUrl: string;
  slug: string;
}

export interface TreatmentCategory {
  category: string;
  description?: string;
  treatments: Treatment[];
}

// Data
export const treatmentCategories: TreatmentCategory[] = [
  {
    category: "Performance & Transformative Coaching",
    description: "Transformative coaching for high-performers: athletes, executives, and other leaders dedicated to fulfilling their potential. Coached by Dr Manu Sidhu - integrating insights from mental health, peak performance science, and psychological flourishing.",
    treatments: [
      {
        name: "Discovery Call",
        description: "A 30-minute call to explore your goals, challenges, and whether we're the right fit to work together.",
        duration: "30min",
        price: "Complimentary",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711298&share&pId=2507365",
        slug: "discovery-call"
      },
      {
        name: "Clarity & Strategy Session",
        description: "A 60-minute analytic deep dive to understand your goals, obstacles, and systems. You'll receive a written summary with an implementation strategy. The £250 fee is credited if you continue into a coaching programme.",
        duration: "1h",
        price: "£250",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A23067524&share&pId=2507365",
        slug: "clarity-strategy-session"
      },
      {
        name: "Momentum 6",
        description: "A focused 6-session coaching programme over 8 weeks to sharpen your mindset, build momentum, and shift your approach to performance. Includes tools and support between sessions. (Split payment of 2 x £675 available).",
        duration: "1h (per session)",
        price: "£1,350",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711336&share&pId=2507365",
        slug: "momentum-6"
      },
      {
        name: "Transformation 12",
        description: "A deep 12-session journey over 3 months to rewire mindset, strengthen identity, and improve performance across work and life. For clients ready to commit to rich internal growth. (Split payment of 3 x £950 available).",
        duration: "1h (per session)",
        price: "£2,450",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711383&share&pId=2507365",
        slug: "transformation-12"
      },
      {
        name: "Elite Retainer",
        description: "Sustained coaching for high-performers dedicated to consistently improving, cultivating, and optimising their performance. Includes 4 sessions/month, quarterly/yearly reviews, and end-to-end goal fulfilment.",
        duration: "1h (per session)",
        price: "£12,000",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2606786&eid=4557161&oiid=sv%3A22711403&share&pId=2507365",
        slug: "elite-retainer"
      },
    ]
  },
  {
    category: "Aevia Skin Consultation",
    description: "Services to guide new clients through their skin treatment journey with us. Fee redeemable against first treatment.",
    treatments: [
      {
        name: "Virtual Consultation",
        description: "A full-face skin consultation for first-time clients. Includes clinical discussion, skin assessment and tailored treatment planning. *Consultation fee 100% redeemable against future treatments booked within 14 days.",
        duration: "20min",
        price: "Complimentary",
        bookingUrl: "https://calendly.com/theaevia/aevia-skin-consultation",
        slug: "virtual-consultation"
      },
      {
        name: "In Clinic Consultation",
        description: "A full-face skin consultation for first-time clients. Includes clinical facial mapping and treatment planning. Option to proceed with treatment during same visit. *Consultation fee 100% redeemable against future treatments booked within 14 days.",
        duration: "20min",
        price: "£50",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23094023&share&pId=2507365",
        slug: "in-clinic-consultation"
      },
    ]
  },
  {
    category: "Anti-Wrinkle Treatments (Smooth & Refine)",
    description: "Targeted muscle-relaxing treatments to soften lines, improve facial tension, and reduce sweating.",
    treatments: [
      {
        name: "One Area (Forehead, Frown or Crow's Feet)",
        description: "Choose one area to target. Designed to reduce lines while maintaining natural expression.",
        duration: "30min",
        price: "£160",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418601&share&pId=2507365",
        slug: "anti-wrinkle-one-area"
      },
      {
        name: "Two Areas (Forehead, Frown or Crow's Feet)",
        description: "Choose two areas to target. Designed to reduce lines while maintaining natural expression.",
        duration: "45min",
        price: "£220",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418602&share&pId=2507365",
        slug: "anti-wrinkle-two-areas"
      },
      {
        name: "Three Areas (Forehead, Frown or Crow's Feet)",
        description: "Choose three areas to target. Designed to reduce lines while maintaining natural expression.",
        duration: "45min",
        price: "£260",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418603&share&pId=2507365",
        slug: "anti-wrinkle-three-areas"
      },
      {
        name: "Jawline Slimming (Masseter Reduction)",
        description: "Anti-wrinkle injections to relax the masseter muscles, helping slim the lower face and reduce jaw tension. Great when paired with a Nefertiti Neck Lift to sculpt the jaw.",
        duration: "45min",
        price: "£300",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22417788&share&pId=2507365",
        slug: "jawline-slimming"
      },
      {
        name: "Smile Lift (DAO Treatment)",
        description: "Subtle lift to corners of the mouth to soften downturned smile lines.",
        duration: "30min",
        price: "£120",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418524&share&pId=2507365",
        slug: "smile-lift"
      },
      {
        name: "Neck Lift (Nefertiti)",
        description: "Defined jawline and smoother neck contours using targeted lower-face injections - without surgery. A great addition to Masseter Reduction for ultimate jaw slimming.",
        duration: "45min",
        price: "£270",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A23160548&share&pId=2507365",
        slug: "neck-lift"
      },
      {
        name: "Sweat Control",
        description: "Underarm treatment to reduce excessive sweating for up to 9 months.",
        duration: "1h",
        price: "£350",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22418468&share&pId=2507365",
        slug: "sweat-control"
      },
      {
        name: "Lower-Face Contour Duo (Masseter Reduction + Jawline Tightening)",
        description: "One appointment, two goals: relieve teeth-grinding and refine your jawline symmetry.",
        duration: "1h\u2003\u2022\u20032 services",
        price: "£520",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=p%3A1640076&share&pId=2507365",
        slug: "lower-face-contour-duo"
      },
    ]
  },
  {
    category: "Skin Boosters (Hydration & Glow)",
    description: "Advanced injectables to improve skin hydration, firmness, and radiance.",
    treatments: [
      {
        name: "Profhilo ®",
        description: "Remodels skin quality using hyaluronic acid spread across key zones, improving skin elasticity, collagen production and firmness. Best for dehydrated, crepey or ageing skin.",
        duration: "45min",
        price: "£300",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421064&share&pId=2507365",
        slug: "profhilo"
      },
      {
        name: "Sunekos",
        description: "Stimulates collagen and elastin production using amino acids and HA. Ideal for dull or tired-looking skin.",
        duration: "45min",
        price: "£250",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421090&share&pId=2507365",
        slug: "sunekos"
      },
    ]
  },
  {
    category: "Microneedling (Collagen Induction)",
    description: "Collagen induction therapy for texture, scars, and overall skin rejuvenation. Performed with the Dermalogica microneedling device for safety and results.",
    treatments: [
      {
        name: "Microneedling (Coming Soon)",
        description: "Advanced microneedling using the Dermalogica device. Improves texture, scars, and stimulates collagen. Available soon.",
        duration: "45min",
        price: "TBA",
        bookingUrl: "#",
        slug: "microneedling"
      }
    ]
  },
  {
    category: "Clinical Peels (Brighten & Renew)",
    description: "Professional-grade peels to brighten, smooth, and even skin tone. Multiple options for different skin needs.",
    treatments: [
      {
        name: "Glycolic Peel (Coming Soon)",
        description: "AHA peel for brightening, smoothing, and improving skin texture. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "glycolic-peel"
      },
      {
        name: "Salicylic Peel (Coming Soon)",
        description: "BHA peel ideal for oily, acne-prone skin. Helps unclog pores and reduce breakouts. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "salicylic-peel"
      },
      {
        name: "Lactic Acid Peel (Coming Soon)",
        description: "Gentle AHA peel for hydration and mild exfoliation. Suitable for sensitive skin. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "lactic-acid-peel"
      },
      {
        name: "TCA Peel (Coming Soon)",
        description: "Medium-depth peel for pigmentation, texture, and rejuvenation. Available soon.",
        duration: "30min",
        price: "TBA",
        bookingUrl: "#",
        slug: "tca-peel"
      }
    ]
  },
  {
    category: "Polynucleotides (Skin Repair & Regeneration)",
    description: "Injectable skin treatments that use purified DNA fragments to support long-term repair and tissue regeneration.",
    treatments: [
      {
        name: "Eye Rejuvenation (Plinest Eye)",
        description: "Targets under-eye hollowness, texture and dark circles with regenerative polynucleotides.",
        duration: "45min",
        price: "£250",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421332&share&pId=2507365",
        slug: "eye-rejuvenation"
      },
      {
        name: "Full Face Regeneration (Plinest)",
        description: "DNA-based injectable to improve skin density, elasticity and hydration. Suitable for early signs of ageing or post-inflammatory texture issues.",
        duration: "45min",
        price: "£300",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&oiid=sv%3A22421256&share&pId=2507365",
        slug: "full-face-regeneration"
      },
    ]
  },
  {
    category: "Bio-Voluminisation (Regenerate & Volumise)",
    description: "Bio-voluminisation treatments to restore and enhance facial volume, reducing the appearance of wrinkles and improving skin texture.",
    treatments: [
      {
        name: "Sculptra",
        description: "A regenerative biostimulant that works deep within the skin to restore facial volume and support structure by stimulating natural collagen production. Unlike dermal fillers, Sculptra enhances your own tissue over time - resulting in gradual, long-lasting improvement in firmness, definition, and youthful contours. Recommended course: 2-3 sessions, spaced 4-6 weeks apart.",
        duration: "1h",
        price: "£550",
        bookingUrl: "https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?eid=4557161&oiid=sv%3A23698477&share&pId=2507365",
        slug: "sculptra"
      }
    ]
  },
]; 