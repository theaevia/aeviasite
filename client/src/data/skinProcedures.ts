export type SkinProcedureFaq = {
  question: string;
  answer: string;
};

export type SkinProcedureMethod = {
  name: string;
  detail: string;
};

export type SkinProcedure = {
  kind: "procedure";
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  primaryKeyword: string;
  imageAlt: string;
  introduction: string;
  whatItIs: string[];
  nhsContext: string[];
  methods: SkinProcedureMethod[];
  journey: Array<{ title: string; detail: string }>;
  cost: {
    title: string;
    marketRange: string;
    context: string;
  };
  additionalSection?: {
    title: string;
    paragraphs: string[];
  };
  safety?: {
    title: string;
    body: string;
  };
  faqs: SkinProcedureFaq[];
  relatedProcedureSlugs: string[];
  relatedGuideSlugs: string[];
};

export type SkinProcedureGuide = {
  kind: "guide";
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  primaryKeyword: string;
  imageAlt: string;
  introduction: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  faqs: SkinProcedureFaq[];
  relatedProcedureSlugs: string[];
};

export type SkinProcedureHub = {
  kind: "hub";
  path: string;
  name: string;
  title: string;
  description: string;
  primaryKeyword: string;
  imageAlt: string;
  introduction: string;
};

export const SKIN_PROCEDURES_HUB: SkinProcedureHub = {
  kind: "hub",
  path: "/skin-procedures",
  name: "Skin Procedures",
  title: "Skin Lesion Removal in London | Aevia Skin, Doctor-Led (2028)",
  description:
    "Aevia Skin plans doctor-led cosmetic skin lesion removal in London from 2028. Join the interest list for planned benign lesion removal in King's Cross.",
  primaryKeyword: "skin lesion removal London",
  imageAlt: "Placeholder for a calm, clinical skin-procedure consultation at Aevia Skin",
  introduction:
    "Aevia Skin plans to introduce doctor-led cosmetic skin lesion removal in London in 2028. The planned service is for clearly benign concerns, assessed carefully by GMC-registered doctors before any procedure is considered.",
};

export const SKIN_PROCEDURES: SkinProcedure[] = [
  {
    kind: "procedure",
    slug: "skin-tag-removal-london",
    path: "/skin-procedures/skin-tag-removal-london",
    name: "Skin Tag Removal",
    title: "Skin Tag Removal in King's Cross, London | Aevia Skin, Doctor-Led (2028)",
    description:
      "Planned doctor-led skin tag removal in King's Cross, London from 2028. Learn about assessment, cosmetic NHS thresholds, aftercare and the Aevia interest list.",
    primaryKeyword: "skin tag removal London",
    imageAlt: "Placeholder for a doctor assessing a small benign skin tag before planned removal",
    introduction:
      "Skin tag removal at Aevia Skin is planned for 2028. It will begin with a doctor-led assessment of a lesion that appears benign and is being considered for cosmetic removal.",
    whatItIs: [
      "Skin tags are soft, skin-coloured or slightly darker growths that often sit on a small stalk. They commonly develop where skin rubs together, including the neck, underarms, eyelids and beneath the breasts.",
      "They are usually harmless, but a new, changing or bleeding growth should not be assumed to be a skin tag without appropriate medical assessment.",
    ],
    nhsContext: [
      "The NHS usually does not remove a skin tag when it is a benign cosmetic concern. Local NHS policies can make exceptions where a lesion is repeatedly traumatised, painful, infected or affecting function, but this is assessed through the NHS pathway.",
      "A cosmetic procedure is different: it is considered only once the lesion appears suitable and the limits of removal, including a possible scar or pigment change, have been discussed.",
    ],
    methods: [
      {
        name: "Snip excision",
        detail:
          "For a suitable, small skin tag, a doctor may remove it with a sterile instrument after discussing local anaesthetic where appropriate.",
      },
      {
        name: "Cautery",
        detail:
          "A doctor may use controlled heat to treat the base of a suitable tag. The method depends on the size, site and individual skin considerations.",
      },
      {
        name: "Alternative or no procedure",
        detail:
          "A procedure is not the default for every growth. If the diagnosis is uncertain, the site is unsuitable or there is a safety concern, the appropriate next step may be GP or NHS assessment instead.",
      },
    ],
    journey: [
      {
        title: "Consultation and assessment",
        detail:
          "Your doctor will ask how long the growth has been present, whether it has changed, bled or become painful, and examine the area before discussing suitability.",
      },
      {
        title: "A proportionate plan",
        detail:
          "If removal is appropriate after launch, the technique, local anaesthetic, expected mark and healing plan will be explained before you decide.",
      },
      {
        title: "Histology where relevant",
        detail:
          "If a specimen is to be sent for histology, this will be discussed in advance. Lesions that are suspicious or diagnostically uncertain are not managed as cosmetic removals.",
      },
      {
        title: "Aftercare",
        detail:
          "You will receive written aftercare covering wound care, activity, signs that need review and the expected healing process. Pigment change and scarring are considered in the plan, particularly for melanin-rich skin.",
      },
    ],
    cost: {
      title: "How much does skin tag removal cost in London?",
      marketRange:
        "For a small number of uncomplicated skin tags, published London private prices commonly sit around £200 to £450, with the number of tags and treatment method affecting the total.",
      context:
        "If you are comparing a private skin tag removal price, this is general market context, not an Aevia price. Aevia Skin will publish transparent protocol pricing at launch, with no hidden consultation-dependent quotes.",
    },
    faqs: [
      {
        question: "Can I have a skin tag removed on the NHS?",
        answer:
          "Usually not when removal is for appearance alone. The NHS may assess exceptions where a skin tag is repeatedly injured, infected, painful or affecting function; local policies vary.",
      },
      {
        question: "Can I remove a skin tag myself?",
        answer:
          "It is safer not to. Home removal can cause bleeding, infection, scarring and can delay assessment of a lesion that was not a skin tag.",
      },
      {
        question: "Will skin tag removal leave a scar?",
        answer:
          "Any procedure that disrupts the skin can leave a mark. The chance and appearance of a scar, as well as pigment change, depend on the site, technique and individual healing.",
      },
      {
        question: "Can skin tags grow back after removal?",
        answer:
          "A removed tag may not return at the same point, but some people are prone to developing new skin tags elsewhere, particularly in areas of friction.",
      },
      {
        question: "What if my skin tag is bleeding or changing?",
        answer:
          "Please seek GP or NHS assessment first. A changing, bleeding or unusual lesion needs clinical assessment before any cosmetic procedure is considered.",
      },
      {
        question: "When will Aevia Skin offer skin tag removal?",
        answer:
          "The planned launch is in 2028. It is not currently bookable; you can join the interest list for updates.",
      },
    ],
    relatedProcedureSlugs: ["milia-removal-london", "mole-removal-london"],
    relatedGuideSlugs: ["nhs-skin-tag-mole-removal", "mole-removal-cosmetic-vs-medical"],
  },
  {
    kind: "procedure",
    slug: "mole-removal-london",
    path: "/skin-procedures/mole-removal-london",
    name: "Cosmetic Mole Removal",
    title: "Mole Removal in King's Cross, London | Aevia Skin, Doctor-Led (2028)",
    description:
      "Planned doctor-led cosmetic mole removal in King's Cross, London from 2028. Understand assessment, cosmetic versus medical care, histology where relevant and aftercare.",
    primaryKeyword: "mole removal London",
    imageAlt: "Placeholder for a doctor-led assessment of a stable benign mole before cosmetic removal",
    introduction:
      "Cosmetic mole removal at Aevia Skin is planned for 2028. This service will be for selected, stable lesions that a doctor considers appropriate for a cosmetic pathway after assessment.",
    whatItIs: [
      "Moles are common coloured spots or raised marks on the skin. They can be flat or raised, smooth or textured, and vary in colour across different skin tones.",
      "Most moles are harmless. However, a mole that is changing in size, shape or colour, or is bleeding, crusting, itchy or otherwise unusual, needs GP or NHS assessment rather than cosmetic treatment.",
    ],
    nhsContext: [
      "The NHS generally does not remove a harmless mole solely to improve appearance. NHS removal is focused on lesions that need medical assessment or meet local criteria because of symptoms or functional impact.",
      "A cosmetic consultation cannot replace an urgent GP or NHS assessment for a suspicious mole. Diagnosis and safety come before an aesthetic decision.",
    ],
    methods: [
      {
        name: "Shave removal",
        detail:
          "For a carefully selected raised benign lesion, a doctor may discuss a superficial shave technique. Whether it is suitable depends on the lesion, site and assessment.",
      },
      {
        name: "Excision",
        detail:
          "Some lesions may require an excision approach, with local anaesthetic and closure planned around the site and likely scar. The exact technique is decided only after assessment.",
      },
      {
        name: "Referral instead of cosmetic treatment",
        detail:
          "Where a mole is changing, irregular, bleeding or otherwise concerning, the correct route is GP or NHS assessment. Aevia does not remove suspicious moles cosmetically.",
      },
    ],
    journey: [
      {
        title: "Consultation and lesion history",
        detail:
          "Your doctor will ask about duration, recent change, symptoms and personal history, then assess whether a cosmetic pathway is appropriate at all.",
      },
      {
        title: "Technique and scar discussion",
        detail:
          "For a suitable benign lesion after launch, the proposed technique, local anaesthetic, likely scar placement and healing considerations will be set out clearly.",
      },
      {
        title: "Histology where relevant",
        detail:
          "If histology is relevant to the agreed plan, that will be explained before treatment, including how results and any follow-up will be handled. Suspicious lesions are referred rather than treated cosmetically.",
      },
      {
        title: "Aftercare and review",
        detail:
          "Written aftercare will cover keeping the area clean, wound review where needed, sun protection and the normal evolution of a scar. Healing and pigment risk are individual.",
      },
    ],
    additionalSection: {
      title: "Is it a mole or a seborrhoeic keratosis?",
      paragraphs: [
        "Seborrhoeic keratoses are common benign skin growths that can appear waxy, raised or as though they sit on the surface of the skin. They are often confused with moles, particularly when they are pigmented.",
        "Someone searching for seborrhoeic keratosis removal in London may be comparing it with cosmetic mole removal. Both need a doctor-led diagnosis before a cosmetic technique or aftercare plan is discussed.",
        "Both a benign mole and a seborrhoeic keratosis commonly sit at the NHS cosmetic threshold when removal is requested for appearance alone. Diagnosis comes first: a changing, bleeding, irregular or uncertain lesion needs GP or NHS assessment rather than cosmetic treatment.",
      ],
    },
    cost: {
      title: "How much does mole removal cost in London?",
      marketRange:
        "Published London private prices for a straightforward benign mole often begin around £300 and can reach £800 or more when the site, technique, histology or clinical setting changes the plan.",
      context:
        "If you are comparing a private mole removal price, this is general market context, not an Aevia price. Aevia Skin will publish transparent protocol pricing at launch, with no hidden consultation-dependent quotes.",
    },
    faqs: [
      {
        question: "Can I have a mole removed for cosmetic reasons?",
        answer:
          "A cosmetic removal may be considered only for a lesion that appears suitable after a doctor-led assessment. It is not appropriate for a changing, bleeding, irregular or otherwise suspicious mole.",
      },
      {
        question: "Why will the NHS not remove my harmless mole?",
        answer:
          "The NHS generally prioritises medically necessary care. A harmless mole removed for appearance alone usually falls outside that threshold, although local policies and individual symptoms matter.",
      },
      {
        question: "Will a removed mole be sent for histology?",
        answer:
          "Histology is considered where relevant to the agreed clinical plan and discussed before any procedure. A suspicious lesion should enter the GP or NHS assessment pathway rather than a cosmetic one.",
      },
      {
        question: "Will mole removal leave a scar?",
        answer:
          "A scar is an inherent possibility with mole removal. Its appearance depends on the technique, location, wound tension, skin type and how your skin heals.",
      },
      {
        question: "Can a mole grow back after removal?",
        answer:
          "Recurrence depends on the type of lesion and the technique used. This is one of the considerations your doctor will discuss if a cosmetic procedure is appropriate.",
      },
      {
        question: "What changes in a mole should be checked first?",
        answer:
          "Changes in size, shape or colour, an irregular outline, bleeding, crusting, itch or a new unusual mark should be assessed by a GP or NHS service first.",
      },
      {
        question: "When can I book cosmetic mole removal at Aevia Skin?",
        answer:
          "The service is planned for 2028 and is not currently bookable. You can join the interest list for launch information.",
      },
    ],
    relatedProcedureSlugs: ["skin-tag-removal-london", "cyst-removal-london"],
    relatedGuideSlugs: ["mole-removal-cosmetic-vs-medical", "nhs-skin-tag-mole-removal"],
  },
  {
    kind: "procedure",
    slug: "cyst-removal-london",
    path: "/skin-procedures/cyst-removal-london",
    name: "Cyst Removal",
    title: "Cyst Removal in King's Cross, London | Aevia Skin, Doctor-Led (2028)",
    description:
      "Planned doctor-led cosmetic cyst removal in King's Cross, London from 2028. Learn about assessment, NHS thresholds, excision, aftercare and the Aevia interest list.",
    primaryKeyword: "cyst removal London",
    imageAlt: "Placeholder for a doctor assessing a stable skin cyst before a planned minor procedure",
    introduction:
      "Cyst removal at Aevia Skin is planned for 2028. The service will be limited to selected skin cysts that are appropriate for a cosmetic minor-procedure pathway after doctor-led assessment.",
    whatItIs: [
      "A skin cyst is a round lump beneath the skin. Common examples include epidermoid and pilar cysts; they can grow slowly and may have a small central opening.",
      "Many people search for sebaceous cyst removal. Doctors technically call most of these epidermoid cysts, which helps keep the assessment and diagnosis precise without changing what you are noticing on your skin.",
      "Not every lump is a cyst. An unexplained, painful, red, rapidly growing or changing lump needs appropriate GP or NHS assessment before a cosmetic procedure is considered.",
    ],
    nhsContext: [
      "The NHS may remove a cyst when it is large, painful, infected, repeatedly traumatised or affects everyday function. A symptom-free cyst removed for appearance alone is often outside local NHS thresholds.",
      "A private cosmetic pathway does not change the need for a proper diagnosis. Active infection or diagnostic uncertainty may mean a cosmetic removal is not appropriate.",
    ],
    methods: [
      {
        name: "Complete excision",
        detail:
          "For a suitable cyst, a doctor may discuss removal of the cyst wall through a planned incision under local anaesthetic. The aim, scar and limitations are considered in advance.",
      },
      {
        name: "Deferring treatment",
        detail:
          "A red, sore or infected cyst may need assessment and treatment through the appropriate medical pathway before any elective cosmetic procedure can be considered.",
      },
      {
        name: "Referral or investigation",
        detail:
          "If a lump is not clearly suitable for a cosmetic pathway, the correct next step may be GP or NHS assessment rather than removal at Aevia Skin.",
      },
    ],
    journey: [
      {
        title: "Consultation and diagnosis",
        detail:
          "Your doctor will take a history and examine the lump, including any growth, pain, redness, discharge or previous infection, before discussing whether a cosmetic procedure is appropriate.",
      },
      {
        title: "Procedure planning",
        detail:
          "For a suitable cyst after launch, the incision, local anaesthetic, closure, expected scar and need for a dressing will be explained before you decide.",
      },
      {
        title: "Histology where relevant",
        detail:
          "If a specimen is to be sent for histology, this is discussed in advance. A lesion that is uncertain or suspicious is not managed as a cosmetic removal.",
      },
      {
        title: "Aftercare",
        detail:
          "Written aftercare will explain dressing care, showering, activity, signs of infection and any planned wound review or suture removal. Healing varies by location and person.",
      },
    ],
    cost: {
      title: "How much does sebaceous cyst removal cost in London?",
      marketRange:
        "Published London private prices for a straightforward sebaceous cyst removal commonly sit around £300 to £700, depending on size, site, prior inflammation and whether excision is suitable.",
      context:
        "If you are comparing a private sebaceous cyst removal price, this is general market context, not an Aevia price. Aevia Skin will publish transparent protocol pricing at launch, with no hidden consultation-dependent quotes.",
    },
    faqs: [
      {
        question: "Can the NHS remove a cyst?",
        answer:
          "It may do so when a cyst is large, painful, infected, repeatedly affected by trauma or interfering with everyday life. A cosmetic cyst removal is often not routinely funded; policies vary locally.",
      },
      {
        question: "Can I squeeze a skin cyst?",
        answer:
          "It is best not to. Squeezing can inflame the area, cause the cyst to burst or increase the risk of infection. Seek clinical advice if it becomes sore or red.",
      },
      {
        question: "Will cyst removal leave a scar?",
        answer:
          "Yes, a scar is possible with an excision. Its length and appearance depend on the cyst, its location, the closure and individual wound healing.",
      },
      {
        question: "Can a cyst come back after removal?",
        answer:
          "Recurrence can be possible. The risk depends on the type of cyst and whether the cyst wall can be completely removed; this is discussed before a procedure if suitable.",
      },
      {
        question: "Should an infected cyst be removed?",
        answer:
          "An active infection needs medical assessment first. It may not be appropriate to carry out an elective cosmetic procedure while the area is inflamed or infected.",
      },
      {
        question: "Is a sebaceous cyst the same as an epidermoid cyst?",
        answer:
          "Sebaceous cyst is a common public-facing term. Doctors generally call most of these epidermoid cysts; if a lump is unexplained or uncertain, it needs GP or NHS assessment rather than a cosmetic pathway.",
      },
      {
        question: "When will cyst removal be available at Aevia Skin?",
        answer:
          "The service is planned for 2028 and is not currently bookable. Join the interest list for launch updates.",
      },
    ],
    relatedProcedureSlugs: ["mole-removal-london", "milia-removal-london"],
    relatedGuideSlugs: ["nhs-skin-tag-mole-removal", "mole-removal-cosmetic-vs-medical"],
  },
  {
    kind: "procedure",
    slug: "milia-removal-london",
    path: "/skin-procedures/milia-removal-london",
    name: "Milia Removal",
    title: "Milia Removal in King's Cross, London | Aevia Skin, Doctor-Led (2028)",
    description:
      "Planned doctor-led milia removal in King's Cross, London from 2028. Learn about assessment, cosmetic NHS thresholds, careful extraction and aftercare.",
    primaryKeyword: "milia removal London",
    imageAlt: "Placeholder for a precise doctor-led assessment of facial milia before planned extraction",
    introduction:
      "Milia removal at Aevia Skin is planned for 2028. The service will be designed for selected, clearly benign milia after a doctor-led assessment of the area and your skin.",
    whatItIs: [
      "Milia are small, firm, white or yellowish keratin-filled bumps that often occur around the eyelids, cheeks, forehead or nose. They can look different across skin tones and may be mistaken for other skin conditions.",
      "They are usually harmless. Because not every small bump is milia, a doctor-led assessment matters before an extraction is considered.",
    ],
    nhsContext: [
      "Milia are commonly managed conservatively because they are benign and often do not need treatment. Cosmetic removal may fall outside local NHS thresholds where there is no medical or functional reason to treat.",
      "Aesthetic removal should be careful and specific. Trying to pick or squeeze bumps at home can cause inflammation, infection, scarring or post-inflammatory pigmentation.",
    ],
    methods: [
      {
        name: "Sterile superficial extraction",
        detail:
          "For suitable milia, a doctor may discuss opening the surface very precisely and extracting the trapped keratin. The area, number of lesions and skin response inform the decision.",
      },
      {
        name: "Staged treatment",
        detail:
          "Where there are several lesions or the area is sensitive, treatment may need to be staged rather than approached as a single broad procedure.",
      },
      {
        name: "Alternative assessment",
        detail:
          "If the bumps are not clearly milia or there is active inflammation, the suitable next step may be a different medical assessment rather than extraction.",
      },
    ],
    journey: [
      {
        title: "Consultation and skin assessment",
        detail:
          "Your doctor will examine the bumps and surrounding skin, discuss your skin history and consider whether they are appropriate for a cosmetic milia pathway.",
      },
      {
        title: "A precise approach",
        detail:
          "For suitable milia after launch, the treatment area, extraction method and risk of temporary redness, a small mark or pigment change will be discussed before treatment.",
      },
      {
        title: "Histology where relevant",
        detail:
          "Histology is not routine for every small benign bump. If it is relevant to the clinical plan, it will be explained; uncertain or suspicious lesions are not treated cosmetically.",
      },
      {
        title: "Aftercare",
        detail:
          "Written aftercare will cover gentle cleansing, avoiding picking, sun protection and when to seek review. Inflammation and pigmentation risk are considered carefully, especially in melanin-rich skin.",
      },
    ],
    cost: {
      title: "How much does milia removal cost in London?",
      marketRange:
        "Published London private prices for milia removal commonly range from about £100 to £300, depending on the number of lesions, the area being treated and whether a doctor-led assessment is required.",
      context:
        "If you are comparing a private milia removal price, this is general market context, not an Aevia price. Aevia Skin will publish transparent protocol pricing at launch, with no hidden consultation-dependent quotes.",
    },
    faqs: [
      {
        question: "What are milia?",
        answer:
          "Milia are small, firm keratin-filled bumps, commonly on the face. They are usually harmless, but a doctor should confirm the diagnosis before any cosmetic extraction.",
      },
      {
        question: "Can I remove milia myself?",
        answer:
          "It is best not to pick or squeeze them. Home extraction can cause inflammation, infection, scarring and pigment change, particularly in more melanised skin.",
      },
      {
        question: "Does milia removal hurt?",
        answer:
          "Sensitivity varies with the area and the number of lesions. If treatment is appropriate after launch, the likely sensation and comfort measures will be discussed beforehand.",
      },
      {
        question: "Will milia leave marks after removal?",
        answer:
          "Temporary redness or a small mark can occur after an extraction. Individual healing and post-inflammatory pigmentation risk are part of the assessment and aftercare plan.",
      },
      {
        question: "Can milia come back?",
        answer:
          "New milia can develop over time. Removing an existing lesion does not guarantee that new bumps will not form elsewhere.",
      },
      {
        question: "Why will the NHS not remove milia?",
        answer:
          "Milia are often benign and do not need medical treatment, so cosmetic removal may not meet local NHS funding thresholds.",
      },
      {
        question: "When can I book milia removal at Aevia Skin?",
        answer:
          "The service is planned for 2028 and is not currently bookable. Join the interest list for launch information.",
      },
    ],
    relatedProcedureSlugs: ["skin-tag-removal-london", "cyst-removal-london"],
    relatedGuideSlugs: ["nhs-skin-tag-mole-removal", "mole-removal-cosmetic-vs-medical"],
  },
  {
    kind: "procedure",
    slug: "wart-removal-london",
    path: "/skin-procedures/wart-removal-london",
    name: "Wart Removal",
    title: "Wart Removal in King's Cross, London | Aevia Skin, Doctor-Led (2028)",
    description:
      "Planned doctor-led wart removal in King's Cross, London from 2028. Learn about diagnosis, NHS treatment thresholds, cryotherapy, aftercare and the Aevia interest list.",
    primaryKeyword: "wart removal London",
    imageAlt: "Placeholder for a doctor assessing a common wart before planned removal",
    introduction:
      "Wart removal at Aevia Skin is planned for 2028. The service will begin with a doctor-led assessment to confirm that a growth is suitable for a cosmetic wart-removal pathway.",
    whatItIs: [
      "Warts are small skin growths caused by a virus. A verruca is a wart on the sole of the foot, which can be painful because of the pressure of walking.",
      "Warts can take time to settle and are often harmless. They can also be mistaken for other lesions, which is why diagnosis comes before any planned cosmetic procedure.",
      "This planned service is not for genital warts. These should be assessed through a sexual health service or GP route.",
    ],
    nhsContext: [
      "The NHS may offer or advise treatment where a wart or verruca is painful, persistent, recurrent or causing difficulty. The availability of cryotherapy and onward referral varies by local service.",
      "A private cosmetic pathway does not replace medical assessment. A lesion that is atypical, bleeding, rapidly changing or not clearly a wart needs GP assessment first.",
    ],
    methods: [
      {
        name: "Cryotherapy",
        detail:
          "For a suitable wart or verruca, a doctor may discuss controlled freezing with liquid nitrogen. More than one session can be needed, depending on the lesion and response.",
      },
      {
        name: "Targeted removal methods",
        detail:
          "For selected lesions, a doctor may discuss another precise method, such as curettage or cautery. The method depends on the diagnosis, site, size and scarring risk.",
      },
      {
        name: "No procedure or referral",
        detail:
          "If the diagnosis is uncertain, the wart is in a high-risk site or a medical pathway is more appropriate, the correct decision may be to defer cosmetic treatment and arrange GP assessment.",
      },
    ],
    journey: [
      {
        title: "Consultation and diagnosis",
        detail:
          "Your doctor will ask how long the lesion has been present, whether it has changed, bled or caused pain, and examine the area before discussing whether it is suitable for treatment.",
      },
      {
        title: "A proportionate treatment plan",
        detail:
          "For a suitable wart after launch, the method, likely number of sessions, expected skin response and limitations will be explained before you decide.",
      },
      {
        title: "Histology where relevant",
        detail:
          "Histology is not routine for every wart. If it is relevant to the plan, it will be discussed in advance; atypical or suspicious lesions are not treated as cosmetic warts.",
      },
      {
        title: "Aftercare",
        detail:
          "Written aftercare will cover protecting the area, expected redness or blistering where relevant, avoiding picking and when to seek review. Advice on limiting spread will be tailored to the site.",
      },
    ],
    cost: {
      title: "How much does wart removal cost in London?",
      marketRange:
        "Published London private prices for a straightforward wart removal commonly sit around £250 to £450. Verruca treatment, multiple lesions or repeat cryotherapy may change the total.",
      context:
        "If you are comparing a private wart removal price, this is general market context, not an Aevia price. Aevia Skin will publish transparent protocol pricing at launch, with no hidden consultation-dependent quotes.",
    },
    safety: {
      title: "Rapidly changing, bleeding or atypical lesions need GP assessment first.",
      body:
        "Not everything that looks like a wart is one. Aevia Skin does not treat atypical or suspicious lesions cosmetically; if a lesion is changing quickly, bleeding or you are unsure what it is, please use the GP route first.",
    },
    faqs: [
      {
        question: "Can I have a wart removed on the NHS?",
        answer:
          "NHS treatment may be considered for painful, persistent or recurrent warts and verrucae, but local treatment availability varies. A GP can advise on the route in your area.",
      },
      {
        question: "What is the difference between a wart and a verruca?",
        answer:
          "A verruca is a wart on the sole of the foot. It may be more painful because pressure from walking pushes it into the skin.",
      },
      {
        question: "Does cryotherapy remove a wart in one session?",
        answer:
          "Sometimes a single session is enough, but more than one can be needed. The likely approach depends on the wart, its location and your skin response.",
      },
      {
        question: "Can I use wart treatment on my face?",
        answer:
          "Do not use over-the-counter wart products on the face without professional advice. A facial growth should be assessed before any treatment is considered.",
      },
      {
        question: "How much does private wart removal cost in London?",
        answer:
          "Published London private prices commonly begin around £250, with verrucae, repeat treatment and multiple lesions affecting the total. Aevia Skin will publish its own transparent protocol pricing at launch.",
      },
      {
        question: "What if a wart is bleeding or changing?",
        answer:
          "Please arrange GP assessment first. A wart that bleeds, changes quickly or looks atypical needs a diagnosis before any cosmetic procedure is considered.",
      },
      {
        question: "When can I book wart removal at Aevia Skin?",
        answer:
          "The service is planned for 2028 and is not currently bookable. You can join the interest list for launch information.",
      },
    ],
    relatedProcedureSlugs: ["skin-tag-removal-london", "milia-removal-london"],
    relatedGuideSlugs: ["nhs-skin-tag-mole-removal", "mole-removal-cosmetic-vs-medical"],
  },
];

export const SKIN_PROCEDURE_GUIDES: SkinProcedureGuide[] = [
  {
    kind: "guide",
    slug: "nhs-skin-tag-mole-removal",
    path: "/skin-procedures/guides/why-wont-the-nhs-remove-my-skin-tag-or-mole",
    name: "Why won't the NHS remove my skin tag or mole?",
    title: "NHS Skin Tag & Mole Removal in King's Cross, London | Aevia Skin, Doctor-Led (2028)",
    description:
      "Why the NHS may decline cosmetic skin tag or mole removal, when a GP assessment is needed, and what doctor-led cosmetic assessment will involve at Aevia Skin from 2028.",
    primaryKeyword: "why won't the NHS remove my skin tag or mole",
    imageAlt: "Placeholder for a calm doctor-led conversation about NHS cosmetic lesion removal thresholds",
    introduction:
      "If your GP has told you that a skin tag or mole is unlikely to be removed on the NHS, it can feel dismissive. In most cases, the decision is about the threshold for NHS treatment rather than whether the concern matters to you.",
    sections: [
      {
        title: "The NHS treats medical need, not every benign lesion",
        paragraphs: [
          "The NHS generally prioritises treatment where a lesion may be cancerous, is diagnostically uncertain, causes significant symptoms or affects normal function. A benign lesion that is being removed only to improve appearance will often fall outside that threshold.",
          "Local commissioning policies differ, so the decision can depend on your area and the particular lesion. Recurrent infection, regular trauma, pain, bleeding during normal activity or functional impact may change the route of care.",
        ],
      },
      {
        title: "A declined cosmetic request is not a diagnosis to ignore",
        paragraphs: [
          "A decision not to remove a lesion cosmetically should not be read as advice to ignore a change. If a mole or growth changes in size, shape or colour, becomes irregular, bleeds, crusts, hurts or looks different from your other marks, arrange GP or NHS assessment.",
          "The key distinction is between a lesion that appears stable and benign, and one that needs a diagnostic or cancer-assessment pathway. Cosmetic removal is not an alternative to that pathway.",
        ],
      },
      {
        title: "Why private assessment still needs medical caution",
        paragraphs: [
          "Paying privately does not make a lesion suitable for removal. A doctor should take a focused history, examine the lesion and be prepared to recommend no cosmetic procedure when the diagnosis is uncertain or a referral is safer.",
          "The discussion should also include the trade-off involved: an elective procedure can leave a scar, cause pigment change, bleed, become infected or heal unpredictably. A benign lesion is not automatically better removed.",
        ],
      },
      {
        title: "What Aevia Skin plans to offer from 2028",
        paragraphs: [
          "From 2028, Aevia Skin plans to offer doctor-led cosmetic procedures for selected benign skin tags, moles, cysts, milia and warts. The service is not available or bookable yet.",
          "Assessment will come first. Where a lesion is suitable for a cosmetic route, the planned discussion will cover the technique, whether histology is relevant, scar and pigment considerations, aftercare and transparent protocol pricing from launch.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why did my GP say the NHS will not remove my skin tag?",
        answer:
          "Skin tags are usually harmless, and removal for appearance alone commonly falls outside NHS funding criteria. An exception may be considered for symptoms, repeated trauma, infection or functional impact, depending on local policy.",
      },
      {
        question: "Why will the NHS not remove my harmless mole?",
        answer:
          "A mole that appears benign and is being removed only for appearance usually does not meet the NHS threshold. A changing or suspicious mole follows a different medical assessment pathway.",
      },
      {
        question: "Can I pay privately if the NHS has declined removal?",
        answer:
          "A private cosmetic assessment may be appropriate only after a doctor is satisfied that the lesion is suitable for that pathway. Paying privately should never bypass assessment of a suspicious lesion.",
      },
      {
        question: "What symptoms may mean NHS treatment is appropriate?",
        answer:
          "Policies vary, but significant pain, recurrent infection, repeated bleeding or trauma, functional impact and diagnostic uncertainty can change the clinical route. Your GP can advise in your local context.",
      },
      {
        question: "When will Aevia Skin offer cosmetic lesion removal?",
        answer:
          "The planned service launches in 2028. It is not currently bookable; you can join the interest list for updates.",
      },
    ],
    relatedProcedureSlugs: ["skin-tag-removal-london", "mole-removal-london", "milia-removal-london"],
  },
  {
    kind: "guide",
    slug: "mole-removal-cosmetic-vs-medical",
    path: "/skin-procedures/guides/mole-removal-cosmetic-vs-medical",
    name: "Mole removal: cosmetic vs medical, how doctors decide",
    title: "Cosmetic vs Medical Mole Removal in King's Cross, London | Aevia Skin, Doctor-Led (2028)",
    description:
      "How doctors distinguish cosmetic from medical mole removal, when a changing mole needs GP or NHS assessment, and what Aevia Skin plans for 2028.",
    primaryKeyword: "cosmetic vs medical mole removal",
    imageAlt: "Placeholder for a doctor carefully assessing a mole and explaining cosmetic versus medical routes",
    introduction:
      "Mole removal begins with a decision about the route of care. The first question is not how to remove a mole; it is whether the mole is suitable for a cosmetic pathway at all.",
    sections: [
      {
        title: "A cosmetic mole is assessed as stable and appropriate",
        paragraphs: [
          "A cosmetic discussion may be possible where a mole appears stable and benign, the person understands that a scar is possible and the reason for removal is appearance or a practical preference rather than a concern about cancer.",
          "That does not mean every stable mole should be removed. Site, size, shape, skin type, previous scarring, pigment history and the balance between the mole and a possible scar are all relevant.",
        ],
      },
      {
        title: "A medical route is for concern, uncertainty or symptoms",
        paragraphs: [
          "A mole that changes in size, shape or colour, has an irregular outline, bleeds, crusts, itches, becomes painful or looks different from your other moles needs GP or NHS assessment. A new unusual mark that does not settle also needs assessment.",
          "Where there is concern or diagnostic uncertainty, the priority is the appropriate NHS or specialist pathway. A cosmetic clinic should not present itself as a substitute for that assessment.",
        ],
      },
      {
        title: "The planned removal method follows the assessment",
        paragraphs: [
          "For a selected benign raised mole, a doctor may discuss a shave approach. In other cases, excision with local anaesthetic and a planned closure may be considered. The technique is not chosen from a menu without examination.",
          "Histology may be relevant in some agreed clinical plans and should be discussed before treatment. It is not a reason to proceed with a lesion that should instead be referred for medical assessment.",
        ],
      },
      {
        title: "What this means at Aevia Skin",
        paragraphs: [
          "Aevia Skin plans to offer cosmetic mole removal from 2028 for selected lesions only. The service is not currently bookable.",
          "The planned model is deliberately cautious: doctor-led assessment first, a clear explanation of limits and risks, GP or NHS signposting where needed, and transparent protocol pricing from launch.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between cosmetic and medical mole removal?",
        answer:
          "Cosmetic removal is considered for a lesion that appears suitable and is removed for appearance or preference. Medical removal or referral is for a mole that is suspicious, uncertain or causing clinically significant symptoms.",
      },
      {
        question: "Can a cosmetic clinic remove a changing mole?",
        answer:
          "It should not be treated as a cosmetic removal. A changing, bleeding or irregular mole needs GP or NHS assessment first.",
      },
      {
        question: "Do doctors always send a removed mole for histology?",
        answer:
          "Whether histology is relevant depends on the clinical plan. It should be discussed before a procedure; suspicious or uncertain lesions need the appropriate medical route rather than cosmetic treatment.",
      },
      {
        question: "Is there a scar after cosmetic mole removal?",
        answer:
          "A scar is possible with either shave or excision techniques. The likely trade-off depends on the lesion, its location, your skin and individual healing.",
      },
      {
        question: "When can I book cosmetic mole removal at Aevia Skin?",
        answer:
          "Aevia Skin plans to launch the service in 2028. It is not currently bookable; the interest list is available for future updates.",
      },
    ],
    relatedProcedureSlugs: ["mole-removal-london", "skin-tag-removal-london", "cyst-removal-london"],
  },
];

export type SkinProcedurePage = SkinProcedureHub | SkinProcedure | SkinProcedureGuide;

export function getSkinProcedureBySlug(slug: string) {
  return SKIN_PROCEDURES.find((procedure) => procedure.slug === slug);
}

export function getSkinProcedureGuideBySlug(slug: string) {
  return SKIN_PROCEDURE_GUIDES.find((guide) => guide.slug === slug);
}

export function getSkinProcedurePageByPath(path: string): SkinProcedurePage | undefined {
  if (path === SKIN_PROCEDURES_HUB.path) return SKIN_PROCEDURES_HUB;
  return [...SKIN_PROCEDURES, ...SKIN_PROCEDURE_GUIDES].find((page) => page.path === path);
}

const DOCTORS = [
  {
    "@type": "Physician",
    "@id": "https://www.theaevia.co.uk/skin-procedures/#dr-terrell-okhiria",
    name: "Dr Terrell Okhiria",
    jobTitle: "GMC-registered doctor",
    url: "https://www.theaevia.co.uk/team",
    worksFor: { "@id": "https://www.theaevia.co.uk/skin-procedures/#medical-clinic" },
  },
  {
    "@type": "Physician",
    "@id": "https://www.theaevia.co.uk/skin-procedures/#dr-renee-okhiria",
    name: "Dr Renée Okhiria",
    jobTitle: "GMC-registered doctor",
    url: "https://www.theaevia.co.uk/team",
    worksFor: { "@id": "https://www.theaevia.co.uk/skin-procedures/#medical-clinic" },
  },
];

const clinicSchema = {
  "@type": "MedicalClinic",
  "@id": "https://www.theaevia.co.uk/skin-procedures/#medical-clinic",
  name: "Aevia Skin",
  url: "https://www.theaevia.co.uk/skin-procedures",
  telephone: "+44 7448 012556",
  email: "hello@theaevia.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "260 Pentonville Road",
    addressLocality: "London",
    postalCode: "N1 9JY",
    addressCountry: "GB",
  },
  physician: DOCTORS.map(({ "@id": id }) => ({ "@id": id })),
};

function faqSchema(faqs: SkinProcedureFaq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildSkinProcedureSchema(page: SkinProcedurePage, baseUrl = "https://www.theaevia.co.uk") {
  const canonicalUrl = `${baseUrl}${page.path}`;
  const webpage = {
    "@type": "WebPage",
    "@id": canonicalUrl,
    url: canonicalUrl,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${baseUrl}/#website` },
  };

  if (page.kind === "hub") {
    return {
      "@context": "https://schema.org",
      "@graph": [webpage, clinicSchema, ...DOCTORS],
    };
  }

  if (page.kind === "procedure") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        webpage,
        {
          "@type": "MedicalProcedure",
          "@id": `${canonicalUrl}#medical-procedure`,
          name: `${page.name} at Aevia Skin (planned for 2028)`,
          description: page.introduction,
          url: canonicalUrl,
          procedureType: "Minor skin procedure",
          provider: { "@id": "https://www.theaevia.co.uk/skin-procedures/#medical-clinic" },
          performer: DOCTORS.map(({ "@id": id }) => ({ "@id": id })),
        },
        ...DOCTORS,
        faqSchema(page.faqs),
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, ...DOCTORS, faqSchema(page.faqs)],
  };
}
