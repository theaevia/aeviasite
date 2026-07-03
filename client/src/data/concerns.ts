export interface ConcernTreatment {
  name: string;
  href: string;
  explanation: string;
}

export interface Concern {
  slug: string;
  navLabel: string;
  title: string;
  keyword: string;
  description: string;
  overview: string[];
  possibleFactors: string[];
  treatments: ConcernTreatment[];
  recommendedPlan?: { name: string; price: string; description: string; href: string };
  skinToneNote: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const concerns: Concern[] = [
  {
    slug: "dull-tired-skin",
    navLabel: "Dull or tired skin",
    title: "Dull, tired-looking skin",
    keyword: "tired skin treatment London",
    description: "A doctor-led guide to dull or tired-looking skin, including hydration, texture, skin boosters and regenerative treatment options.",
    overview: [
      "Skin can look tired when hydration, surface texture, pigmentation, lifestyle and early collagen change overlap. The useful treatment depends on which factor is doing most of the work.",
      "We assess the skin before choosing a product. A skin booster may suit dehydration, while polynucleotides may be more relevant when gradual texture repair is the priority.",
    ],
    possibleFactors: ["Dehydration or a disrupted skin barrier", "Uneven surface texture", "Pigment or post-inflammatory marks", "Early collagen and elasticity change"],
    treatments: [
      { name: "Profhilo", href: "/profhilo", explanation: "For selected dehydration, crepiness and gradual skin-quality improvement without structural volume." },
      { name: "Sunekos", href: "/treatments/sunekos", explanation: "For hydration and fine textural change using hyaluronic acid and amino acids." },
      { name: "Full-face polynucleotides", href: "/treatments/full-face-regeneration", explanation: "For gradual improvements in facial hydration, texture and resilience." },
    ],
    recommendedPlan: { name: "The Glow Protocol", price: pricing.protocols.glow.display, description: "Two Profhilo sessions, four weeks apart, with a photo review at week two.", href: "/treatments#glow-protocol" },
    skinToneNote: "Dullness in darker skin may partly reflect pigment or inflammation rather than hydration alone. We separate those causes before recommending a procedure.",
    faqs: [
      { question: "Which treatment gives the fastest glow?", answer: "That depends on the cause. Temporary hydration can appear sooner than genuine collagen or texture change, which develops over weeks." },
      { question: "Do I need a course?", answer: "Some concerns respond to one focused session, while established texture or regenerative goals usually need a staged plan." },
    ],
  },
  {
    slug: "dark-under-eyes",
    navLabel: "Dark under-eyes",
    title: "Dark circles and tired under-eyes",
    keyword: "dark circles treatment London",
    description: "Doctor-led assessment for dark circles and tired under-eyes in London, separating pigment, vessels, skin quality, hollowness and shadow.",
    overview: [
      "Dark circles are a description rather than one diagnosis. Pigment, visible vessels, thin or crepey skin, hollowness and structural shadow can all create a similar appearance.",
      "Treatment is most useful when it matches the cause. Polynucleotides target skin quality and cannot fully correct every pigment or anatomical concern.",
    ],
    possibleFactors: ["Pigment and post-inflammatory change", "Visible vessels through thin skin", "Crepey or dehydrated skin", "Hollowness and structural shadow"],
    treatments: [
      { name: "Under-eye polynucleotides", href: "/treatments/eye-rejuvenation", explanation: "For selected crepiness, dehydration and skin-quality components without filler-like volume." },
    ],
    recommendedPlan: { name: "The Eye Revival", price: pricing.protocols.eyeRevival.display, description: "A course of three Plinest Eye treatments for selected under-eye skin-quality concerns.", href: "/treatments/eye-rejuvenation" },
    skinToneNote: "Periorbital pigmentation can be more prominent in skin of colour. We distinguish pigment from shadow and vessels before recommending an injectable treatment.",
    faqs: [
      { question: "Will polynucleotides remove genetic dark circles?", answer: "Not necessarily. Genetic pigment, bone structure and hollowing may remain even when skin quality improves." },
      { question: "Is this the same as under-eye filler?", answer: "No. Polynucleotides are used for skin quality and do not provide the structural volume associated with filler." },
    ],
  },
  {
    slug: "fine-lines-wrinkles",
    navLabel: "Fine lines",
    title: "Fine lines and expression wrinkles",
    keyword: "fine lines treatment King's Cross",
    description: "A doctor-led guide to fine lines and expression wrinkles, including anti-wrinkle treatment and regenerative skin-quality injectables.",
    overview: [
      "Lines caused mainly by repeated muscle movement need a different plan from fine lines caused by dehydration, sun exposure or gradual collagen change.",
      "Your doctor assesses the face at rest and in movement, then explains whether relaxing a selected muscle, improving skin quality or combining approaches is proportionate.",
    ],
    possibleFactors: ["Repeated facial movement", "Dehydration and barrier change", "Sun exposure and collagen change", "Skin texture and early laxity"],
    treatments: [
      { name: "Anti-Wrinkle Treatment", href: "/anti-wrinkle", explanation: "For selected movement-related forehead, frown or crow's-feet lines." },
      { name: "Profhilo", href: "/profhilo", explanation: "For selected fine, dehydrated or crepey skin where added facial volume is not the goal." },
      { name: "Full-face polynucleotides", href: "/treatments/full-face-regeneration", explanation: "For gradual regenerative skin-quality improvement where movement is not the only factor." },
    ],
    recommendedPlan: { name: "The Wrinkle Reset", price: pricing.signatures.wrinkleReset.display, description: "One appointment, lines and skin quality together: three-area anti-wrinkle treatment and full-face Plinest.", href: "/anti-wrinkle" },
    skinToneNote: "Injectable anti-wrinkle treatment can be considered across skin tones. For procedures that create inflammation, pigment history and aftercare affect the plan.",
    faqs: [
      { question: "Will anti-wrinkle treatment freeze my face?", answer: "The plan is conservative and area-specific. The aim is to soften selected movement while preserving natural expression." },
      { question: "Can skincare replace treatment?", answer: "Good skincare remains important, but it cannot reproduce every effect of a prescription muscle-relaxing treatment or a collagen-remodelling procedure." },
    ],
  },
  {
    slug: "uneven-texture-tone",
    navLabel: "Texture or tone",
    title: "Uneven skin texture and tone",
    keyword: "uneven skin texture treatment London",
    description: "Doctor-led assessment for uneven skin texture and tone, including acne marks, pigmentation risk and skin-quality treatments.",
    overview: [
      "Texture and tone often overlap, but they are not the same problem. Enlarged pores, scars and roughness need different planning from pigment and post-inflammatory marks.",
      "We first check for active acne, infection or inflammation. A regenerative injectable is considered only when it fits the cause and the skin is ready for treatment.",
    ],
    possibleFactors: ["Selected acne scarring", "Enlarged pores or rough texture", "Post-inflammatory pigmentation", "Active acne or inflammation requiring treatment first"],
    treatments: [
      { name: "Full-face Plinest", href: "/treatments/full-face-regeneration", explanation: "A course may be considered for gradual improvement in selected textural and skin-quality concerns." },
      { name: "Skin of colour guide", href: "/skin-of-colour", explanation: "How inflammation and post-inflammatory pigmentation affect treatment planning for melanin-rich skin." },
      { name: "Ask a doctor on WhatsApp", href: whatsappEnquiryUrl("uneven skin texture or tone"), explanation: "Recommended when active inflammation, pigmentation and scarring overlap." },
    ],
    skinToneNote: "Darker skin can develop post-inflammatory pigmentation after excessive inflammation. Treatment intensity and aftercare should reflect that risk.",
    faqs: [
      { question: "Can active acne be treated with regenerative injectables?", answer: "Active inflamed or infected skin needs assessment first. Treatment may be postponed until the skin is ready." },
      { question: "How quickly does texture change?", answer: "Initial brightness may appear after recovery, while collagen remodelling develops over several weeks to months." },
    ],
  },
  {
    slug: "excessive-sweating",
    navLabel: "Excessive sweating",
    title: "Excessive underarm sweating",
    keyword: "excessive sweating treatment London",
    description: "Doctor-led information about excessive underarm sweating and hyperhidrosis treatment in London, including mapping, expected results and limitations.",
    overview: [
      "Excessive sweating can affect clothing, work, confidence and daily routines. When appropriate, prescription injections can temporarily reduce nerve signals to sweat glands in a defined area.",
      "The active sweating field is mapped before treatment. New, generalised or unexplained sweating may need medical assessment rather than an aesthetic procedure.",
    ],
    possibleFactors: ["Primary focal hyperhidrosis", "Heat, stress or physical activity", "Medicines or hormonal factors", "A medical cause requiring separate assessment"],
    treatments: [
      { name: "Sweat control treatment", href: "/treatments/sweat-control", explanation: "Prescription injections mapped across the active underarm sweating field." },
    ],
    recommendedPlan: { name: "Sweat Control", price: pricing.antiWrinkle.sweatControl.display, description: "One mapped underarm treatment appointment, with suitability and aftercare confirmed by your doctor.", href: "/treatments/sweat-control" },
    skinToneNote: "The treatment can be considered across skin tones. Injection marks, bruising and inflammation are discussed as part of individual aftercare.",
    faqs: [
      { question: "Will I stop sweating everywhere?", answer: "No. Only the treated field is affected, and the body continues to regulate temperature through untreated areas." },
      { question: "Is the result permanent?", answer: "No. Nerve signalling gradually returns, so repeat treatment may be considered when symptoms recur." },
    ],
  },
  {
    slug: "strong-painful-jaw",
    navLabel: "Strong or painful jaw",
    title: "A strong, tense or painful jaw",
    keyword: "jaw tension treatment London",
    description: "Doctor-led guidance for a strong, tense or painful jaw, including masseter assessment, jawline slimming and when dental or medical review is more appropriate.",
    overview: [
      "A prominent masseter can contribute to a broad lower face, clenching or muscular tension. It is only one possible source of jaw symptoms.",
      "Jaw pain can also involve the joint, teeth, bite, headaches or other medical causes. We treat only when the masseter is a suitable target and refer elsewhere when it is not.",
    ],
    possibleFactors: ["Prominent or overactive masseter muscles", "Clenching or grinding", "Dental or bite-related problems", "Temporomandibular joint or other medical causes"],
    treatments: [
      { name: "Jawline slimming", href: "/treatments/jawline-slimming", explanation: "Muscle-relaxing treatment for suitable enlarged or overactive masseters." },
      { name: "Neck lift", href: "/treatments/neck-lift", explanation: "Targets downward platysmal pull when it contributes to the lower-face concern." },
    ],
    recommendedPlan: { name: "The Contour Duo", price: pricing.signatures.contourDuo.display, description: "Masseter and Nefertiti treatment in one appointment when both approaches fit your anatomy.", href: "/treatments/lower-face-contour-duo" },
    skinToneNote: "Masseter treatment is planned from muscle anatomy and function and can be considered across skin tones when medically suitable.",
    faqs: [
      { question: "Will masseter treatment help every type of jaw pain?", answer: "No. Dental, joint and medical causes may need different care. Assessment is important before treatment." },
      { question: "When does facial slimming appear?", answer: "Muscle relaxation begins earlier, while visible contour change is usually assessed from four to eight weeks." },
    ],
  },
];

export const concernBySlug = (slug: string) => concerns.find((concern) => concern.slug === slug);
import { pricing } from "@/data/pricing";
import { whatsappEnquiryUrl } from "@/lib/bookingUrls";
