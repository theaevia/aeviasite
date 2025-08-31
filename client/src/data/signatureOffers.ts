export interface SignatureOffer {
  name: string;
  price: string;
  description: string;
  features: string[];
  normalPrice: string;
  bookingUrl: string;
  ctaText: string;
}

export const signatureOffers: SignatureOffer[] = [
  {
    name: "WRINKLE RESET\nAnti-Wrinkle (3 Areas) + Polynucleotides",
    price: "£400",
    description: "Signature rejuvenation: smooth dynamic lines, revive tired skin, and stimulate natural skin repair - all in one visit.",
    features: [
      "Smooth fine lines, wrinkles and tired skin",
      "Anti-wrinkle treatment for 3 areas (e.g. forehead, frown, crow's feet)",
      "Full-face polynucleotide skin booster",
      "One appointment, one seamless price",
    ],
    normalPrice: "£580",
    bookingUrl: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/DHNAE4YPX7TJ2TYXHJX5NWFH",
    ctaText: "Book My Wrinkle Reset"
  },
  {
    name: "GLOW REVIVAL\nFull-Face Profhilo + Under-Eye Polynucleotides",
    price: "£450",
    description: "Experience deep, lasting hydration and under-eye radiance with a pairing of Profhilo and under-eye Polynucleotides.",
    features: [
      "Face and eyes treated in a single session",
      "High-definition glow and hydration from Profhilo",
      "Under-eye brightening and rejuvenation from Polynucleotides",
      "Second session recommended in 4 weeks for optimal results"
    ],
    normalPrice: "£550",
    bookingUrl: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/27TAWF7EQYSCHM6EB6ZIU463",
    ctaText: "Book My Glow Revival"
  },
  {
    name: "The Perfect Tone Protocol\nComing Soon",
    price: "TBA",
    description: "A comprehensive, doctor-led protocol for even tone and stubborn pigmentation. Combines advanced clinical peels, microneedling, and targeted skincare for visible, lasting results.",
    features: [
      "Multi-step protocol for hyperpigmentation",
      "Doctor-led assessment and monitoring",
      "Combination of peels, microneedling, and prescription skincare",
      "Personalised aftercare and support",
      "Results-driven, safe for all skin types"
    ],
    normalPrice: "TBA",
    bookingUrl: "#",
    ctaText: "Join Waitlist"
  },
]; 