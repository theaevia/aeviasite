export interface TreatmentProfile {
  keyword: string;
  summary: string;
  whoFor: string[];
  result: string;
  timeline: string;
  sessions: string;
  safety: string;
  downtime: string;
  skinTone: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface TreatmentDetail {
  explanation: string[];
}

export interface TreatmentMapping {
  summary: string;
  points: string[];
}

const sharedSuitability =
  "Your doctor reviews your medical history, medicines and treatment area before confirming suitability. Treatment is postponed when it would not be clinically appropriate.";

const injectableSkinTone =
  "The treatment can be considered across skin tones. Technique and aftercare are adjusted individually, with particular attention to bruising, inflammation and the risk of post-inflammatory pigmentation.";

export const treatmentProfiles: Record<string, TreatmentProfile> = {
  "virtual-consultation": {
    keyword: "online skin consultation London",
    summary: "A focused video consultation with an Aevia doctor to discuss your concerns, medical context and sensible treatment options before you travel to clinic.",
    whoFor: ["First-time clients who want guidance", "People comparing more than one treatment", "Clients who want to plan before visiting King's Cross"],
    result: "You leave with clearer priorities and an outline of suitable next steps. No treatment is performed virtually.",
    timeline: "Guidance is given during the appointment. Final suitability for a procedure is confirmed in person before treatment.",
    sessions: "One 20-minute consultation. A follow-up is arranged only if useful.",
    safety: "The consultation supports planning but cannot replace an in-person physical examination where one is clinically required.",
    downtime: "None. This is a discussion and planning appointment.",
    skinTone: "Skin tone, pigmentation history and previous reactions form part of the plan. In-person assessment may still be needed before recommending a procedure.",
    faqs: [
      { question: "Can I receive a prescription virtually?", answer: "The purpose of this appointment is assessment and planning. Any prescribing follows the applicable clinical and legal requirements." },
      { question: "Can I book treatment afterwards?", answer: "Yes. We will explain the suitable booking options and what must be checked in clinic first." },
    ],
  },
  "in-clinic-consultation": {
    keyword: "skin consultation King's Cross",
    summary: "An in-person consultation and facial assessment with an Aevia doctor, designed to turn broad concerns into a clear, proportionate treatment plan.",
    whoFor: ["First-time clients", "Clients unsure which treatment fits their goal", "Anyone who wants examination before making a decision"],
    result: "You receive an evidence-based plan, realistic expectations and transparent costs. We may also recommend no treatment.",
    timeline: "Your initial plan is discussed during the appointment and refined if examination or medical history changes the options.",
    sessions: "One 20-minute consultation. Treatment on the same day is only considered when appropriate and booked accordingly.",
    safety: "Your doctor reviews medical history, medicines, previous procedures and relevant risks before recommending any treatment.",
    downtime: "None from the consultation itself. If you proceed to treatment, the relevant treatment downtime applies.",
    skinTone: "Assessment includes skin tone, pigmentation risk and inflammatory history so product, depth and aftercare can be adjusted safely.",
    faqs: [
      { question: "Do I have to go ahead with treatment?", answer: "No. The consultation is useful on its own and there is no obligation to proceed." },
      { question: "Can I be treated on the same day?", answer: "Sometimes, if the correct appointment has been booked and your doctor confirms it is safe and appropriate." },
    ],
  },
  "anti-wrinkle": {
    keyword: "anti-wrinkle injections King's Cross",
    summary: "Prescription-only injections that temporarily relax selected facial muscles. The aim is to soften expression lines without freezing the whole face.",
    whoFor: ["Forehead, frown or crow's-feet lines", "Clients who want to keep natural expression", "Preventative or corrective treatment after medical assessment"],
    result: "Movement gradually softens and lines look less pronounced. You should still look like yourself, only more rested.",
    timeline: "Change usually begins within several days, develops over two weeks and commonly lasts around three to four months. Individual response varies.",
    sessions: "One appointment, with review when clinically indicated. Maintenance is optional and based on your response.",
    safety: sharedSuitability,
    downtime: "Small bumps, redness or bruising can occur. Most settle quickly, although bruising can last several days.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Will I look frozen?", answer: "Our approach is conservative and area-specific. The goal is softer movement, not an expressionless result." },
      { question: "When can I exercise?", answer: "Your doctor will provide current aftercare for your treatment and medical circumstances before you leave." },
    ],
  },
  "jawline-slimming": {
    keyword: "masseter Botox King's Cross",
    summary: "Targeted muscle-relaxing injections for enlarged or overactive masseter muscles. They may reduce jaw tension and create a slimmer lower-face outline over time.",
    whoFor: ["A broad lower face caused by prominent masseter muscles", "Jaw clenching or tension where treatment is clinically suitable", "Clients seeking gradual, non-surgical contouring"],
    result: "Tension may ease before visible slimming develops. Facial change is gradual and depends on muscle size and anatomy.",
    timeline: "Muscle relaxation begins over the first weeks. Contour change is usually assessed from four to eight weeks and may continue to develop beyond that.",
    sessions: "One treatment appointment; review and future maintenance depend on clinical response.",
    safety: sharedSuitability,
    downtime: "Tenderness, small bumps or bruising can occur. Temporary chewing fatigue is possible and is discussed during consent.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Is this the same as jawline filler?", answer: "No. This treatment reduces activity in the masseter muscle; filler adds volume. They suit different anatomies and goals." },
      { question: "Will it help every type of jaw pain?", answer: "No. Jaw pain has several causes and may require dental or medical assessment. We only treat when appropriate." },
    ],
  },
  "smile-lift": {
    keyword: "DAO Botox King's Cross",
    summary: "A small, targeted muscle-relaxing treatment for the depressor anguli oris muscles, which can pull down the corners of the mouth.",
    whoFor: ["Downturned mouth corners linked to muscle pull", "A subtle rather than structural change", "Clients with suitable lower-face anatomy"],
    result: "The corners of the mouth may sit more neutrally at rest. The effect is deliberately subtle.",
    timeline: "The effect develops over approximately two weeks and is temporary. Longevity varies between clients.",
    sessions: "One short appointment, followed by review only when indicated.",
    safety: sharedSuitability,
    downtime: "Redness, tenderness or bruising may occur. Lower-face injections require precise assessment because nearby muscles affect the smile.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Does it add volume to my lips?", answer: "No. It changes muscle pull and does not add filler or lip volume." },
      { question: "Is the change dramatic?", answer: "Usually not. This is a small-muscle treatment designed for a restrained change." },
    ],
  },
  "neck-lift": {
    keyword: "Nefertiti neck lift King's Cross",
    summary: "Targeted muscle-relaxing injections along the lower face and neck. Treatment aims to reduce downward platysmal pull and refine the jaw-to-neck transition.",
    whoFor: ["Visible platysmal bands or downward neck pull", "Early loss of jawline definition", "Clients seeking a subtle non-surgical refinement"],
    result: "The neck can look calmer and the jawline slightly cleaner. It does not remove loose skin or replace surgery.",
    timeline: "Early change develops over two weeks, with the final result judged after the muscles have fully responded.",
    sessions: "One appointment; maintenance timing is personalised.",
    safety: sharedSuitability,
    downtime: "Temporary bumps or bruising can occur. Neck anatomy and swallowing history are assessed carefully before treatment.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Will it tighten loose skin?", answer: "It can reduce muscular downward pull but does not remove excess skin. We will be direct if another approach is more suitable." },
      { question: "Can it be combined with masseter treatment?", answer: "Sometimes. Combination treatment depends on your anatomy and is planned during assessment." },
    ],
  },
  "sweat-control": {
    keyword: "hyperhidrosis treatment King's Cross",
    summary: "Prescription injections that reduce the nerve signals activating sweat glands in a defined treatment area, most commonly the underarms.",
    whoFor: ["Excessive underarm sweating", "Sweating that affects clothing, work or confidence", "Clients who have reviewed appropriate first-line options"],
    result: "Sweating in the treated area is reduced, not necessarily eliminated. The result is temporary.",
    timeline: "Reduction often starts within the first week and develops over roughly two weeks. Duration varies by person and area.",
    sessions: "One appointment, repeated only when symptoms return and treatment remains suitable.",
    safety: sharedSuitability,
    downtime: "Small injection marks, tenderness or bruising may occur. Area-specific risks are covered during consent.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Will I stop sweating everywhere?", answer: "No. Only the treated area is affected; your body continues to regulate temperature elsewhere." },
      { question: "Is it permanent?", answer: "No. Nerve signalling gradually returns, so repeat treatment may be needed." },
    ],
  },
  "lower-face-contour-duo": {
    keyword: "lower face contouring King's Cross",
    summary: "A combined plan targeting masseter strength and downward lower-face pull. It is designed for clients whose anatomy supports both treatment goals.",
    whoFor: ["Prominent masseters with jaw tension", "Lower-face muscular pull affecting definition", "Clients suitable for a combined, staged result"],
    result: "Tension can reduce first; visible contour change develops gradually as the targeted muscles respond.",
    timeline: "Initial muscle relaxation develops over two weeks. Lower-face contour is more honestly judged from four to eight weeks.",
    sessions: "One combined appointment with review based on clinical need.",
    safety: sharedSuitability,
    downtime: "Bruising, tenderness and temporary muscle fatigue can occur. Combining areas increases the importance of conservative dosing and precise mapping.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Is everyone suitable for both areas?", answer: "No. We may recommend one area, staged treatment or no treatment after examining your anatomy." },
      { question: "Does this include filler?", answer: "No. This plan uses muscle-relaxing treatment and does not add volume." },
    ],
  },
  profhilo: {
    keyword: "Profhilo King's Cross",
    summary: "An injectable hyaluronic-acid bio-remodelling treatment for skin hydration and quality. It is not designed to contour the face like dermal filler.",
    whoFor: ["Dehydrated or crepey skin", "Early loss of firmness or elasticity", "Clients wanting skin-quality change without added facial volume"],
    result: "Skin can feel more hydrated and look smoother or more luminous. The improvement is gradual and intentionally natural.",
    timeline: "Hydration may be noticed earlier, while skin-quality change develops over the weeks after the treatment course. Results vary.",
    sessions: "A course of two sessions around four weeks apart is commonly recommended, with maintenance personalised afterwards.",
    safety: sharedSuitability,
    downtime: "Raised injection-point bumps are expected and usually settle within a day or two. Swelling, tenderness and bruising are also possible.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Is Profhilo a filler?", answer: "No. It is placed to spread through tissue and support skin quality, not to create structural volume." },
      { question: "When will I see the final result?", answer: "The result is assessed after the full course has had time to work, rather than immediately after the first session." },
    ],
  },
  sunekos: {
    keyword: "Sunekos London",
    summary: "An injectable combination of hyaluronic acid and amino acids used to support skin hydration and extracellular-matrix renewal.",
    whoFor: ["Dull, fine or dehydrated skin", "Early textural change", "Delicate areas where a skin-quality approach is preferred"],
    result: "Skin may look smoother, brighter and better hydrated without a filled or over-contoured appearance.",
    timeline: "Improvement is progressive across the treatment course and the following weeks. It is not an instant structural treatment.",
    sessions: "Usually planned as a course; the exact number and spacing are confirmed after assessment.",
    safety: sharedSuitability,
    downtime: "Temporary swelling, bumps, redness, tenderness or bruising can occur at injection points.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "How is this different from Profhilo?", answer: "The formulations and treatment protocols differ. Your doctor will recommend based on area, skin quality and the kind of change you want." },
      { question: "Does it replace lost facial volume?", answer: "No. It is a skin-quality treatment, not a substitute for structural volume restoration." },
    ],
  },
  "eye-rejuvenation": {
    keyword: "polynucleotides under eyes London",
    summary: "Regenerative polynucleotide injections for under-eye skin quality. Treatment aims to improve texture, hydration and crepiness without adding filler volume.",
    whoFor: ["Fine, crepey or dehydrated under-eye skin", "Dark-circle appearance partly linked to skin quality", "Clients who are not seeking under-eye filler"],
    result: "The under-eye area may look smoother and better hydrated. It cannot fully correct every cause of hollowness or pigmentation.",
    timeline: "Change builds gradually through the course and in the weeks afterwards. The honest endpoint is not immediately after injection.",
    sessions: "Usually a course of sessions spaced several weeks apart; your plan is confirmed after examination.",
    safety: sharedSuitability,
    downtime: "Under-eye swelling, small bumps and bruising are common short-term effects and can be more visible for several days.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Will it remove genetic dark circles?", answer: "Not always. Dark circles can come from pigment, anatomy, vessels and shadowing. We explain which part treatment may realistically improve." },
      { question: "Is this under-eye filler?", answer: "No. Polynucleotides target skin quality and do not create the same structural volume as filler." },
    ],
  },
  "full-face-regeneration": {
    keyword: "polynucleotides face King's Cross",
    summary: "Polynucleotide injections placed across selected facial areas to support hydration, texture and regenerative skin processes.",
    whoFor: ["Dullness, dehydration or fine textural change", "Early skin laxity", "Clients wanting gradual skin-quality improvement"],
    result: "Skin can look more even, hydrated and resilient. The treatment does not reshape facial structure.",
    timeline: "Results develop gradually during the course and over subsequent weeks. Response differs with age, skin condition and lifestyle.",
    sessions: "A course is usually recommended, with session number and spacing tailored after consultation.",
    safety: sharedSuitability,
    downtime: "Small bumps, redness, swelling and bruising are expected possibilities after treatment.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Is the result immediate?", answer: "Injection-related swelling can appear immediately, but genuine skin-quality change takes time." },
      { question: "Can it replace a facelift or filler?", answer: "No. It serves a different goal: gradual improvement in skin quality rather than surgery or structural volume." },
    ],
  },
  microneedling: {
    keyword: "microneedling King's Cross",
    summary: "Controlled micro-injuries created at a planned depth to stimulate repair and collagen remodelling. The protocol is adjusted to the concern and skin tone.",
    whoFor: ["Uneven texture or enlarged pores", "Selected acne scarring", "Dullness or early fine lines"],
    result: "Skin can become smoother and more even. Collagen change is gradual, and deeper scarring usually needs a course rather than one session.",
    timeline: "Initial glow may appear after recovery. Collagen remodelling develops over several weeks to months.",
    sessions: "One session can refresh texture; a course is often advised for scarring or more established concerns.",
    safety: sharedSuitability,
    downtime: "Redness and warmth commonly last 24–72 hours. Dryness or light flaking can follow. Active infection or inflammation may require postponement.",
    skinTone: "Microneedling can be used across skin tones, but darker skin requires careful depth, inflammation control and aftercare to reduce post-inflammatory pigmentation risk.",
    faqs: [
      { question: "Does microneedling hurt?", answer: "Topical numbing is commonly used. Most clients feel pressure or scratching rather than sharp pain." },
      { question: "Can it treat active acne?", answer: "We do not needle through active inflamed or infected lesions. Your doctor will assess timing and alternatives." },
    ],
  },
  sculptra: {
    keyword: "Sculptra King's Cross",
    summary: "An injectable poly-L-lactic-acid biostimulator that encourages gradual collagen production. It restores support over time rather than providing an instant filler result.",
    whoFor: ["Gradual facial volume loss", "Reduced support or firmness", "Clients comfortable with progressive, not immediate, change"],
    result: "Facial support and contour can improve subtly as collagen develops. Early post-treatment fullness is mostly water and settles.",
    timeline: "True change builds over several months. Results and longevity vary, and the full outcome should not be judged after the first few days.",
    sessions: "Commonly two to three sessions, spaced around four to six weeks apart, depending on assessment and response.",
    safety: sharedSuitability,
    downtime: "Swelling, tenderness and bruising are common possibilities. Lumps or nodules are uncommon but important risks discussed during consent and aftercare.",
    skinTone: injectableSkinTone,
    faqs: [
      { question: "Is Sculptra an instant filler?", answer: "No. Initial water-related fullness fades; the intended result develops as your collagen response builds." },
      { question: "Why might I need several sessions?", answer: "Collagen stimulation is gradual. Staging treatment helps your doctor judge response and avoid overcorrection." },
    ],
  },
};

export const treatmentDetails: Record<string, TreatmentDetail> = {
  "virtual-consultation": {
    explanation: [
      "The appointment starts with the concern you want to solve, then places it in the context of your medical history, previous treatments, current skincare and practical priorities. Your doctor can compare appropriate options and explain where expectations, budget and downtime affect the plan.",
      "A video appointment has clear limits. It is useful for education and planning, but photographs and video cannot replace palpation, facial movement assessment or examination of the skin. Any procedure still requires the checks that are clinically necessary in person.",
    ],
  },
  "in-clinic-consultation": {
    explanation: [
      "Your doctor takes a focused medical and treatment history, examines the relevant skin or facial anatomy and asks what a successful result would look like to you. The aim is to identify the cause of the concern before discussing a product or procedure.",
      "You will be shown the options that fit, the options that do not, and the likely tradeoffs in result, recovery and maintenance. The consultation can end with a staged plan, a different referral or a recommendation not to treat.",
    ],
  },
  "anti-wrinkle": {
    explanation: [
      "Anti-wrinkle treatment uses a prescription medicine to temporarily reduce signalling between selected nerves and muscles. Less forceful contraction can soften dynamic lines, including forehead, frown and crow's-feet lines, while untreated muscles continue to move normally.",
      "Dose and placement are planned from your resting anatomy and facial movement, not from a standard set of injection points. A conservative plan protects expression and can be adjusted at review once the full effect has developed.",
    ],
  },
  "jawline-slimming": {
    explanation: [
      "The masseter is a powerful chewing muscle at the angle of the jaw. When it is enlarged or overactive, carefully placed muscle-relaxing treatment can reduce its activity, which may ease tension and gradually reduce muscular width in the lower face.",
      "The treatment only changes the muscular component of the jaw. Bone structure, soft tissue, dental problems and other causes of pain require different approaches, so your doctor assesses the jaw in motion before recommending it.",
    ],
  },
  "smile-lift": {
    explanation: [
      "The depressor anguli oris muscles pull the corners of the mouth downwards. A small, precisely placed dose can reduce this pull so that suitable mouth corners rest in a slightly more neutral position.",
      "This is a fine adjustment rather than a structural lift. Nearby muscles control speech, eating and smiling, which is why examination, restrained dosing and realistic expectations matter more than trying to create a dramatic change.",
    ],
  },
  "neck-lift": {
    explanation: [
      "The platysma is a broad superficial muscle that can create visible neck bands and downward pull along the lower face. Treatment relaxes selected points in this muscle to reduce banding and subtly refine the transition between jaw and neck.",
      "It does not remove excess skin or reproduce a surgical neck lift. Your doctor checks neck movement, swallowing history and the balance between the muscles that lift and depress the lower face before planning treatment.",
    ],
  },
  "sweat-control": {
    explanation: [
      "Sweat glands are activated by chemical signals from local nerves. Prescription injections temporarily interrupt those signals within a mapped treatment field, reducing sweat production in that area while the rest of the body's temperature regulation continues.",
      "The active area is identified before treatment so the injection pattern covers the places that matter rather than following a generic grid. The effect is local and temporary, and repeat treatment is based on how and when symptoms return.",
    ],
  },
  "lower-face-contour-duo": {
    explanation: [
      "This plan addresses two separate muscular influences on the lower face: masseter bulk at the jaw angle and downward pull from selected lower-face or neck muscles. Each component is mapped and dosed independently before they are combined.",
      "A combined treatment is useful only when both muscle patterns contribute to the concern. It does not add filler, change bone structure or remove loose skin, and your doctor may recommend treating one component first to keep the result controlled.",
    ],
  },
  profhilo: {
    explanation: [
      "Profhilo is a stabilised injectable hyaluronic-acid treatment designed to disperse through the tissue rather than sit as a shaped pocket of filler. Hyaluronic acid attracts water, supporting hydration while the treatment course is intended to improve overall skin quality.",
      "The product is placed at planned points and the initial raised bumps settle as it disperses. Because the goal is bio-remodelling rather than contour, improvement is judged across the completed course and the following weeks, not immediately after injection.",
    ],
  },
  sunekos: {
    explanation: [
      "Sunekos combines non-cross-linked hyaluronic acid with a specific mixture of amino acids. It is injected into selected skin layers to support hydration and the extracellular matrix without creating the projection associated with structural filler.",
      "Placement, product choice and the number of sessions depend on the area and degree of skin change. The response develops across a course, so photographs and review are more useful than judging the temporary swelling seen on treatment day.",
    ],
  },
  "eye-rejuvenation": {
    explanation: [
      "Polynucleotides are purified DNA fragments used as an injectable skin-quality treatment. Around the eyes, small superficial deposits are placed to support hydration, texture and the skin's regenerative environment without adding filler-like volume.",
      "Under-eye darkness can come from pigment, visible vessels, hollowness, anatomy or shadowing, and one treatment cannot correct every cause. Examination determines which part is realistically treatable and whether another approach would be more appropriate.",
    ],
  },
  "full-face-regeneration": {
    explanation: [
      "Full-face polynucleotide treatment uses multiple small injections across selected areas where hydration, texture or resilience are the priority. The plan follows the condition of the skin rather than placing the same amount everywhere.",
      "It is a gradual skin-quality treatment, not facial reshaping. Your doctor may stage areas or combine the course with skincare and other procedures, while allowing enough time to distinguish genuine change from short-lived injection swelling.",
    ],
  },
  microneedling: {
    explanation: [
      "A medical microneedling device creates controlled channels at a selected depth. This initiates a repair response that can support new collagen and gradual remodelling, while also improving selected concerns such as texture, pores and certain acne scars.",
      "Needle depth, number of passes and treatment intervals are adjusted by area, concern and skin tone. More intensity is not automatically better, because excessive inflammation can lengthen recovery and increase pigmentation risk without improving the result.",
    ],
  },
  sculptra: {
    explanation: [
      "Sculptra contains poly-L-lactic-acid microparticles suspended in water. After injection, the carrier fluid settles and the particles act as a gradual stimulus for your own collagen production, which is why early fullness is not the final result.",
      "Treatment is distributed across planned structural areas and usually staged over more than one session. Slow correction allows response to be assessed between visits and reduces the risk of chasing immediate volume with a product designed to work over months.",
    ],
  },
};

export const treatmentMappings: Record<string, TreatmentMapping> = {
  "anti-wrinkle": {
    summary: "Upper-face treatment is planned from movement, muscle strength and eyebrow position rather than a fixed injection chart.",
    points: [
      "Forehead lines involve the frontalis, the main muscle that lifts the eyebrows. Dose and placement must preserve enough lift for your anatomy.",
      "Frown lines are created mainly by the corrugator and procerus muscles between the brows. Their strength and resting pattern guide treatment.",
      "Crow's-feet come from the outer fibres of orbicularis oculi. Treatment follows the smile pattern while protecting natural eye expression.",
    ],
  },
  "jawline-slimming": {
    summary: "The masseter is examined at rest and during clenching so treatment follows the true muscle border and any asymmetry.",
    points: [
      "The masseter runs from the cheekbone to the angle of the jaw and provides much of the force used for chewing.",
      "Your doctor assesses muscle thickness, bite pattern, facial width and whether tension is muscular, dental or joint-related.",
      "Placement remains within the safe masseter zone to avoid nearby smile muscles and the parotid gland.",
    ],
  },
  "lower-face-contour-duo": {
    summary: "The combined plan separates jaw width from downward lower-face pull, then treats only the muscles contributing to each concern.",
    points: [
      "The masseters are mapped while clenching to assess bulk, strength and symmetry at the jaw angle.",
      "Platysmal or depressor activity is assessed during animation to identify downward pull affecting the jawline.",
      "Each component is dosed independently. One area may be reduced or omitted when the anatomy does not support combined treatment.",
    ],
  },
  "neck-lift": {
    summary: "Visible platysmal bands and the downward pull along the jaw are assessed both at rest and during neck movement.",
    points: [
      "The platysma is a broad superficial sheet extending from the upper chest into the lower face.",
      "Prominent vertical bands can be treated directly, while selected jawline points may reduce downward pull in suitable anatomy.",
      "Swallowing history, neck strength and lower-face balance are checked before the treatment area is marked.",
    ],
  },
  "smile-lift": {
    summary: "The corners of the mouth are observed at rest, while speaking and during a full smile before the DAO is marked.",
    points: [
      "The depressor anguli oris, or DAO, pulls the mouth corner down and can contribute to a downturned resting expression.",
      "A small dose is placed according to the palpable muscle and the direction of pull, not simply beside the mouth corner.",
      "Nearby muscles control the lower lip and smile, so conservative placement is essential for natural movement.",
    ],
  },
  "sweat-control": {
    summary: "The active sweating field is mapped before treatment so injections cover the symptomatic skin rather than a generic underarm shape.",
    points: [
      "The mapped area can be confirmed from the history, visible sweating and, where useful, an iodine-starch test.",
      "Small superficial injections are distributed in a measured grid across the active field.",
      "Treatment is local. Untreated sweat glands elsewhere continue to support normal temperature regulation.",
    ],
  },
  profhilo: {
    summary: "Profhilo is commonly placed using the Bio Aesthetic Points, or BAP, technique to support controlled spread through the tissue.",
    points: [
      "The standard BAP approach uses five anatomically selected injection points on each side of the face.",
      "These points are designed to support even product diffusion while avoiding areas where swelling or vascular risk needs greater caution.",
      "The pattern can be adapted for the neck or for individual anatomy. Profhilo is not placed to sculpt features like dermal filler.",
    ],
  },
  sunekos: {
    summary: "Sunekos placement is selected by skin depth, treatment area and the pattern of textural change rather than one universal map.",
    points: [
      "Small intradermal deposits may be arranged across areas of fine, dehydrated or crepey skin.",
      "Delicate regions such as the under-eye require shallower placement, smaller volumes and careful spacing.",
      "The treatment course and mapping are adjusted after each response rather than increasing intensity automatically.",
    ],
  },
  "eye-rejuvenation": {
    summary: "The under-eye is divided into skin-quality, pigment, vascular, hollowing and shadow components before injection points are selected.",
    points: [
      "Polynucleotides are placed as small superficial deposits across suitable crepey or dehydrated skin.",
      "The orbital rim, visible vessels and areas prone to swelling affect the depth, spacing and volume used.",
      "True hollowness or pigment may require a different plan because skin-quality treatment cannot correct every cause of dark circles.",
    ],
  },
  "full-face-regeneration": {
    summary: "Full-face polynucleotide mapping follows areas of reduced hydration, texture or resilience rather than covering the face uniformly.",
    points: [
      "Treatment zones are selected after examining skin thickness, movement, previous procedures and the distribution of the concern.",
      "Small intradermal deposits are spaced to support an even response while limiting unnecessary product and swelling.",
      "Delicate or high-movement areas may be staged separately so the response can be reviewed before extending the plan.",
    ],
  },
  microneedling: {
    summary: "The face is mapped by skin thickness, scar type, inflammation and pigmentation risk before a needle depth is selected for each zone.",
    points: [
      "Thicker areas and established scars may tolerate a different depth from the forehead, nose or delicate periocular skin.",
      "Active acne, infection, eczema or uncontrolled inflammation is avoided rather than treated through.",
      "For darker skin tones, controlling inflammation and aftercare is central to reducing post-inflammatory pigmentation risk.",
    ],
  },
  sculptra: {
    summary: "Sculptra is mapped to broad areas of reduced structural support, with placement chosen for collagen stimulation rather than instant contouring.",
    points: [
      "Facial proportions, soft-tissue loss and movement are assessed before selecting deeper treatment planes.",
      "High-movement and anatomically unsuitable areas are avoided because the product is designed for distributed structural support.",
      "Sessions are staged so collagen response and symmetry can be reviewed before further treatment is added.",
    ],
  },
};
