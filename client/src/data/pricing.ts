export const pricing = {
  consultation: {
    inClinic: { display: "£50", amount: 50, note: "Redeemable against treatment" },
    whatsappTriage: { display: "Free", amount: 0 },
  },
  regenerative: {
    profhilo: { display: "£300", amount: 300 },
    plinestFace: { display: "£300", amount: 300, courseDisplay: "£800", courseAmount: 800, courseSessions: 3 },
    plinestEye: { display: "£250", amount: 250, courseDisplay: "£650", courseAmount: 650, courseSessions: 3 },
    sunekos: { display: "£250", amount: 250, courseDisplay: "£850", courseAmount: 850, courseSessions: 4 },
  },
  protocols: {
    glow: { display: "£545", amount: 545, perSessionDisplay: "£273" },
    eyeRevival: { display: "£650", amount: 650 },
    aeviaPlan: { display: "From £950", amount: 950 },
  },
  antiWrinkle: {
    oneArea: { display: "£170", amount: 170 },
    twoAreas: { display: "£230", amount: 230 },
    threeAreas: { display: "£280", amount: 280 },
    masseter: { display: "£300", amount: 300 },
    neckLift: { display: "£270", amount: 270 },
    smileLiftAddon: { display: "+£90", amount: 90 },
    sweatControl: { display: "£350", amount: 350 },
  },
  signatures: {
    wrinkleReset: { display: "£495", amount: 495 },
    contourDuo: { display: "£520", amount: 520 },
  },
} as const;

export const focusedTreatmentPrice = "From £250";

export const treatmentPriceBySlug: Record<string, { display: string; amount: number }> = {
  "anti-wrinkle": { display: "From £170", amount: pricing.antiWrinkle.oneArea.amount },
  "jawline-slimming": pricing.antiWrinkle.masseter,
  "neck-lift": pricing.antiWrinkle.neckLift,
  "sweat-control": pricing.antiWrinkle.sweatControl,
  "lower-face-contour-duo": pricing.signatures.contourDuo,
  profhilo: pricing.regenerative.profhilo,
  sunekos: pricing.regenerative.sunekos,
  "eye-rejuvenation": pricing.regenerative.plinestEye,
  "full-face-regeneration": pricing.regenerative.plinestFace,
};
