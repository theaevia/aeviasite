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
  children?: PriceMenuItem[];
}

export interface PriceMenuCategory {
  id: string;
  name: string;
  gloss: string;
  items: PriceMenuItem[];
  footer?: string;
}

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
        name: "Profhilo",
        price: pricing.regenerative.profhilo.display,
        href: PROFHILO_URL,
        children: [
          {
            name: "The Glow Protocol",
            price: pricing.protocols.glow.display,
            note: "Two sessions + review",
            href: whatsappEnquiryUrl("The Glow Protocol"),
            action: "Enquire",
          },
        ],
      },
      {
        name: "Polynucleotides, full face (Plinest)",
        price: pricing.regenerative.plinestFace.display,
        href: PNS_FACE_URL,
        children: [
          {
            name: "Course of three",
            price: pricing.regenerative.plinestFace.courseDisplay,
            href: whatsappEnquiryUrl("Course of three"),
            action: "Enquire",
          },
        ],
      },
      {
        name: "Polynucleotides, under-eye (Plinest Eye)",
        price: pricing.regenerative.plinestEye.display,
        href: PNS_EYES_URL,
        children: [
          {
            name: "The Eye Revival",
            price: pricing.protocols.eyeRevival.display,
            note: "Course of three",
            href: whatsappEnquiryUrl("The Eye Revival"),
            action: "Enquire",
          },
        ],
      },
      {
        name: "Sunekos",
        price: pricing.regenerative.sunekos.display,
        href: SUNEKOS_URL,
        children: [
          {
            name: "Course of four",
            price: pricing.regenerative.sunekos.courseDisplay,
            href: whatsappEnquiryUrl("Course of four"),
            action: "Enquire",
          },
        ],
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
