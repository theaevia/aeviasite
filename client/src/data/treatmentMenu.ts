import { pricing } from "@/data/pricing";
import {
  ANTI_WRINKLE_URL,
  CONTOUR_DUO_URL,
  HYPERHIDROSIS_URL,
  MASSETER_URL,
  NEFERTITI_URL,
  PNS_EYES_URL,
  PNS_FACE_URL,
  PROFHILO_URL,
  SKIN_CLINIC_URL,
  SUNEKOS_URL,
  WRINKLE_RESET_URL,
  whatsappEnquiryUrl,
} from "@/lib/bookingUrls";

export interface PriceMenuItem {
  name: string;
  price: string;
  note?: string;
  href: string;
  action?: string;
  label?: string;
  recommended?: boolean;
  children?: PriceMenuItem[];
}

export interface PriceMenuCategory {
  id: string;
  name: string;
  gloss: string;
  items: PriceMenuItem[];
  footer?: string;
}

export const regenerativeSingleSessions: PriceMenuItem[] = [
  {
    name: "Profhilo® single session",
    price: pricing.regenerative.profhilo.display,
    note: "For maintenance, top-ups, or where advised after consultation",
    href: PROFHILO_URL,
  },
  {
    name: "Plinest full face single session",
    price: pricing.regenerative.plinestFace.display,
    note: "For maintenance, staged treatment, or where advised after consultation",
    href: PNS_FACE_URL,
  },
  {
    name: "Plinest eye single session",
    price: pricing.regenerative.plinestEye.display,
    note: "For maintenance, staged treatment, or where advised after consultation",
    href: PNS_EYES_URL,
  },
  {
    name: "Sunekos single session",
    price: pricing.regenerative.sunekos.display,
    note: "For maintenance, staged treatment, or where advised after consultation",
    href: SUNEKOS_URL,
  },
];

export const treatmentPriceMenu: PriceMenuCategory[] = [
  {
    id: "consultation",
    name: "Consultation",
    gloss: "Start here",
    items: [
      {
        name: "Ask a doctor on WhatsApp",
        price: pricing.consultation.whatsappTriage.display,
        href: whatsappEnquiryUrl("which Aevia treatment may suit me"),
        action: "Ask on WhatsApp",
      },
      {
        name: "In-clinic doctor consultation",
        price: pricing.consultation.inClinic.display,
        note: "Redeemable against any treatment",
        href: SKIN_CLINIC_URL,
      },
    ],
  },
  {
    id: "skin-quality-regeneration",
    name: "Skin Boosters & Polynucleotides",
    gloss: "Skin Quality & Regeneration",
    items: [
      {
        name: "Profhilo® Glow Protocol",
        price: pricing.protocols.glow.display,
        note: pricing.protocols.glow.paymentDisplay,
        recommended: true,
        href: whatsappEnquiryUrl("the Profhilo Glow Protocol"),
        action: "Discuss this plan",
      },
      {
        name: "Plinest Full Face Regeneration Course",
        price: pricing.regenerative.plinestFace.courseDisplay,
        note: pricing.regenerative.plinestFace.coursePaymentDisplay,
        recommended: true,
        href: whatsappEnquiryUrl("the Plinest Full Face Regeneration Course"),
        action: "Discuss this plan",
      },
      {
        name: "Plinest Eye Revival Course",
        price: pricing.protocols.eyeRevival.display,
        note: pricing.regenerative.plinestEye.coursePaymentDisplay,
        recommended: true,
        href: whatsappEnquiryUrl("the Plinest Eye Revival Course"),
        action: "Discuss this plan",
      },
      {
        name: "Sunekos Skin Renewal Course",
        price: pricing.regenerative.sunekos.courseDisplay,
        note: pricing.regenerative.sunekos.coursePaymentDisplay,
        recommended: true,
        href: whatsappEnquiryUrl("the Sunekos Skin Renewal Course"),
        action: "Discuss this plan",
      },
    ],
  },
  {
    id: "anti-wrinkle-menu",
    name: "Anti-Wrinkle Treatments",
    gloss: "Smooth, Contour & Sweat Control",
    items: [
      { name: "One Area", price: pricing.antiWrinkle.oneArea.display, note: "One of forehead lines, frown lines or crow's feet", href: ANTI_WRINKLE_URL },
      { name: "Two Areas", price: pricing.antiWrinkle.twoAreas.display, note: "Any two of forehead lines, frown lines or crow's feet", href: ANTI_WRINKLE_URL },
      { name: "Three Areas", price: pricing.antiWrinkle.threeAreas.display, note: "All three: forehead lines, frown lines and crow's feet", href: ANTI_WRINKLE_URL },
      { name: "Smile Lift (DAO) Add-on", price: pricing.antiWrinkle.smileLiftAddon.display, note: "Add to any anti-wrinkle appointment", href: ANTI_WRINKLE_URL },
      { name: "Jawline Slimming (Masseter)", price: pricing.antiWrinkle.masseter.display, href: MASSETER_URL },
      { name: "Neck Lift (Nefertiti)", price: pricing.antiWrinkle.neckLift.display, href: NEFERTITI_URL },
      { name: "Sweat Control", price: pricing.antiWrinkle.sweatControl.display, href: HYPERHIDROSIS_URL },
    ],
    footer: "All anti-wrinkle treatments include a complimentary 2-week review.",
  },
  {
    id: "signature-appointments",
    name: "Signature Appointments",
    gloss: "One Visit, Two Goals",
    items: [
      { name: "The Wrinkle Reset", price: pricing.signatures.wrinkleReset.display, note: "Three-area anti-wrinkle treatment + full-face Plinest", href: WRINKLE_RESET_URL },
      { name: "The Contour Duo", price: pricing.signatures.contourDuo.display, note: "Masseter + Nefertiti", href: CONTOUR_DUO_URL },
    ],
  },
];
