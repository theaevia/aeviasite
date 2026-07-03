import { pricing } from "@/data/pricing";
import { CONTOUR_DUO_URL, WRINKLE_RESET_URL } from "@/lib/bookingUrls";

export interface SignatureOffer {
  name: string;
  price: string;
  description: string;
  features: string[];
  bookingUrl: string;
  ctaText: string;
}

export const signatureOffers: SignatureOffer[] = [
  {
    name: "The Wrinkle Reset",
    price: pricing.signatures.wrinkleReset.display,
    description: "Three-area anti-wrinkle treatment and full-face Plinest in one appointment.",
    features: ["One appointment", "Lines and skin quality treated together", "Complimentary anti-wrinkle review"],
    bookingUrl: WRINKLE_RESET_URL,
    ctaText: "Book now",
  },
  {
    name: "The Contour Duo",
    price: pricing.signatures.contourDuo.display,
    description: "Masseter treatment and a Nefertiti neck lift in one appointment.",
    features: ["One appointment", "Two complementary lower-face treatment areas", "Doctor-led facial mapping"],
    bookingUrl: CONTOUR_DUO_URL,
    ctaText: "Book now",
  },
];
