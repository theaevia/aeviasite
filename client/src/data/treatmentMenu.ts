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
        note: "Two Profhilo® sessions, four weeks apart, plus review",
        recommended: true,
        href: whatsappEnquiryUrl("the Profhilo Glow Protocol"),
        action: "Discuss this plan",
      },
      {
        name: "Plinest Full Face Regeneration Course",
        price: pricing.regenerative.plinestFace.courseDisplay,
        note: "Course of three Plinest full face sessions",
        recommended: true,
        href: whatsappEnquiryUrl("the Plinest Full Face Regeneration Course"),
        action: "Discuss this plan",
      },
      {
        name: "Plinest Eye Revival Course",
        price: pricing.protocols.eyeRevival.display,
        note: "Course of three Plinest Eye sessions",
        recommended: true,
        href: whatsappEnquiryUrl("the Plinest Eye Revival Course"),
        action: "Discuss this plan",
      },
      {
        name: "Sunekos Skin Renewal Course",
        price: pricing.regenerative.sunekos.courseDisplay,
        note: "Course of four Sunekos sessions",
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
      { name: "One area", price: pricing.antiWrinkle.oneArea.display, href: ANTI_WRINKLE_URL },
      { name: "Two areas", price: pricing.antiWrinkle.twoAreas.display, href: ANTI_WRINKLE_URL },
      { name: "Three areas", price: pricing.antiWrinkle.threeAreas.display, href: ANTI_WRINKLE_URL },
      { name: "Smile lift (DAO) add-on", price: pricing.antiWrinkle.smileLiftAddon.display, note: "Add to any anti-wrinkle appointment", href: ANTI_WRINKLE_URL },
      { name: "Jawline slimming (masseter)", price: pricing.antiWrinkle.masseter.display, href: MASSETER_URL },
      { name: "Neck lift (Nefertiti)", price: pricing.antiWrinkle.neckLift.display, href: NEFERTITI_URL },
      { name: "Sweat control", price: pricing.antiWrinkle.sweatControl.display, href: HYPERHIDROSIS_URL },
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
