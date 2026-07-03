import 'dotenv/config';
const DEFAULT_PORT = Number(process.env.PORT ?? 3000);
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import { go } from "./routes/go";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import net from "net";
import { treatmentDetails, treatmentMappings, treatmentProfiles } from "../client/src/data/treatmentProfiles";
import { concernBySlug } from "../client/src/data/concerns";
import { pricing, treatmentPriceBySlug } from "../client/src/data/pricing";
import { findTreatmentBySlug } from "../client/src/data/treatments";
import { treatmentPriceMenu, type PriceMenuItem } from "../client/src/data/treatmentMenu";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const isProd = process.env.NODE_ENV === 'production';
const BASE_URL = isProd ? 'https://www.theaevia.co.uk' : `http://localhost:${DEFAULT_PORT}`;
const VALID_ROUTES = [
  '/',
  '/the-aevia',
  '/team',
  '/clinic',
  '/glow-guide',
  '/treatments',
  '/profhilo',
  '/anti-wrinkle',
  '/polynucleotides',
  '/skin-of-colour',
  '/concerns',
  '/concerns/dull-tired-skin',
  '/concerns/dark-under-eyes',
  '/concerns/fine-lines-wrinkles',
  '/concerns/uneven-texture-tone',
  '/concerns/excessive-sweating',
  '/concerns/strong-painful-jaw',
  '/treatments/anti-wrinkle',
  '/treatments/jawline-slimming',
  '/treatments/lower-face-contour-duo',
  '/treatments/neck-lift',
  '/treatments/sweat-control',
  '/treatments/profhilo',
  '/treatments/sunekos',
  '/treatments/eye-rejuvenation',
  '/treatments/full-face-regeneration',
  '/gallery',
  '/cancellation',
  '/bookings',
  '/bio',
  '/tiktok',
  '/quiz',
  '/privacy',
  '/terms',
  '/categories/anti-wrinkle',
  '/categories/skin-boosters',
  '/categories/polynucleotides',
];

type RouteMeta = { title: string; description: string; heading?: string };

const DEFAULT_ROUTE_META: RouteMeta = {
  title: "The Aevia | Doctor-Led Aesthetics | King's Cross, London",
  description: "Doctor-led regenerative aesthetics in King's Cross, London. Evidence-based treatments for natural-looking results.",
};

const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: "Doctor-Led Aesthetics London | King's Cross | Aevia Skin",
    description: "Doctor-led regenerative aesthetics in King's Cross. Skin boosters, polynucleotides and subtle anti-wrinkle treatments, planned by GMC-registered doctors for every skin tone.",
    heading: "Better skin. Still you.",
  },
  '/skin': {
    title: "Doctor-Led Skin Treatments in King's Cross | Aevia Skin",
    description: "Explore doctor-led skin treatments in King's Cross, with transparent pricing, medical assessment and plans tailored for every skin tone.",
    heading: "Doctor-led skin treatments in King's Cross",
  },
  '/the-aevia': {
    title: "The Aevia | Doctor-Led Skin and Natural Aesthetics",
    description: "Discover The Aevia: doctor-led regenerative skin treatments and natural aesthetics in King's Cross, London.",
    heading: "The Aevia",
  },
  '/team': {
    title: "Meet the Aevia Doctors | King's Cross, London",
    description: "Meet Dr Terrell Okhiria and Dr Renée Okhiria, the GMC-registered medical doctors behind Aevia Skin in King's Cross.",
    heading: "Meet the Aevia doctors",
  },
  '/clinic': {
    title: "Aevia Skin Clinic in King's Cross | Location and Hours",
    description: "Find Aevia Skin at 260 Pentonville Road, three minutes from King's Cross station. View clinic details, opening hours and contact information.",
    heading: "Aevia Skin clinic in King's Cross",
  },
  '/treatments': {
    title: "Aesthetic Treatments in King's Cross, London | Aevia Skin",
    description: "Compare doctor-led anti-wrinkle, skin booster and polynucleotide treatments in King's Cross, with clear single-session, protocol and signature appointment prices.",
    heading: "Doctor-led treatments and prices",
  },
  '/gallery': {
    title: "Before and After Gallery | Aevia Skin",
    description: "View real Aevia Skin treatment results, including anti-wrinkle, polynucleotide and jawline treatments.",
    heading: "Before and after results",
  },
  '/glow-guide': {
    title: "Aevia Skin Glow Guide | Doctor-Led Skin Advice",
    description: "Download the Aevia Skin Glow Guide for practical, doctor-led advice on skin treatments and long-term skin quality.",
    heading: "The Aevia Skin Glow Guide",
  },
  '/profhilo': {
    title: "Profhilo in King's Cross, London | Aevia Skin",
    description: "Doctor-led Profhilo in King's Cross for gradual hydration and skin-quality improvement, with clear prices, BAP technique, sessions and downtime.",
    heading: "Profhilo",
  },
  '/anti-wrinkle': {
    title: "Anti-Wrinkle Treatment in King's Cross, London | Aevia Skin",
    description: "Doctor-led anti-wrinkle injections near King's Cross and Islington, planned around facial movement to soften lines while preserving natural expression.",
    heading: "Anti-Wrinkle Treatment",
  },
  '/polynucleotides': {
    title: "Polynucleotides London | Under-Eye and Face | Aevia Skin",
    description: "Doctor-led polynucleotide treatments in London for under-eye and full-face skin quality, including dark circles, sessions, downtime and every skin tone.",
    heading: "Polynucleotides",
  },
  '/skin-of-colour': {
    title: "Aesthetics for black skin London | Skin of Colour | Aevia",
    description: "Doctor-led aesthetics for black skin and skin of colour in London, with individual planning for pigmentation risk, acne marks, skin boosters and injectables.",
    heading: "Aesthetics for black skin and skin of colour",
  },
  '/concerns': {
    title: "Skin and Aesthetic Concerns | Aevia Skin London",
    description: "Start with your concern, from dark under-eyes and fine lines to excessive sweating, jaw tension, dullness and uneven texture. See doctor-led treatment options.",
    heading: "Start with what you are noticing",
  },
  '/bookings': {
    title: "Book Aevia Skin | King's Cross Aesthetics Clinic",
    description: "Book a consultation or doctor-led aesthetic treatment at Aevia Skin in King's Cross, London.",
    heading: "Book Aevia Skin",
  },
  '/cancellation': {
    title: "Cancellation Policy | Aevia Skin",
    description: "Read the Aevia Skin appointment cancellation and rescheduling policy before booking your clinic visit.",
    heading: "Cancellation policy",
  },
  '/bio': {
    title: "Aevia Skin Links | Doctor-Led Aesthetics",
    description: "Find Aevia Skin treatment information, booking links, clinic details and doctor-led skin resources.",
    heading: "Aevia Skin links",
  },
  '/tiktok': {
    title: "Aevia Skin from TikTok | Treatments and Booking",
    description: "Explore Aevia Skin treatments, clinic information and booking options after visiting from TikTok.",
    heading: "Explore Aevia Skin",
  },
  '/quiz': {
    title: "Aevia Skin Treatment Quiz",
    description: "Use the Aevia Skin treatment quiz to clarify your concerns and identify sensible questions for a doctor-led consultation.",
    heading: "Aevia Skin treatment quiz",
  },
  '/privacy': {
    title: "Privacy Policy | Aevia Skin",
    description: "Read how Aevia Skin collects, uses and protects personal information across its website and clinical services.",
    heading: "Privacy policy",
  },
  '/terms': {
    title: "Terms and Conditions | Aevia Skin",
    description: "Read the terms and conditions that apply when using the Aevia Skin website and booking clinic services.",
    heading: "Terms and conditions",
  },
  '/categories/anti-wrinkle': {
    title: "Anti-Wrinkle Treatments King's Cross | Aevia Skin",
    description: "Compare doctor-led anti-wrinkle treatments in King's Cross for the upper face, jaw, smile, neck and excessive sweating.",
    heading: "Anti-wrinkle treatments",
  },
  '/categories/skin-boosters': {
    title: "Skin Boosters King's Cross | Aevia Skin",
    description: "Compare doctor-led Profhilo and Sunekos skin boosters in King's Cross for hydration, texture and gradual skin-quality improvement.",
    heading: "Skin boosters",
  },
  '/categories/microneedling-peels': {
    title: "Microneedling and Chemical Peels King's Cross | Aevia Skin",
    description: "Explore doctor-led microneedling and chemical peel options in King's Cross, planned for your concern and skin tone.",
    heading: "Microneedling and chemical peels",
  },
  '/categories/polynucleotides': {
    title: "Polynucleotide Treatments King's Cross | Aevia Skin",
    description: "Compare doctor-led polynucleotide treatments in King's Cross for under-eye and full-face skin quality.",
    heading: "Polynucleotide treatments",
  },
  '/categories/bio-voluminisation': {
    title: "Collagen Biostimulation King's Cross | Aevia Skin",
    description: "Explore doctor-led Sculptra collagen biostimulation in King's Cross for gradual facial support and volume restoration.",
    heading: "Collagen biostimulation",
  },
  '/categories/consultation': {
    title: "Aesthetic Consultation Options | Aevia Skin",
    description: "Compare virtual and in-clinic consultations with Aevia Skin doctors before choosing an aesthetic treatment.",
    heading: "Consultation options",
  },
};

const TREATMENT_META: Record<string, RouteMeta> = {
  'virtual-consultation': { title: "Online Skin Consultation London | Aevia Skin", description: "Speak with an Aevia doctor online about your skin concerns, treatment options and sensible next steps before visiting the clinic." },
  'in-clinic-consultation': { title: "Skin Consultation King's Cross | Aevia Skin", description: "Book an in-person skin consultation and facial assessment with an Aevia doctor in King's Cross, London." },
  'anti-wrinkle': { title: "Anti-Wrinkle Injections King's Cross | Aevia Skin", description: "Doctor-led anti-wrinkle injections in King's Cross to soften forehead, frown and crow's-feet lines while preserving natural expression." },
  'jawline-slimming': { title: "Masseter Botox King's Cross | Aevia Skin", description: "Doctor-led masseter treatment in King's Cross for jaw tension and gradual lower-face slimming, with clear pricing and downtime guidance." },
  'lower-face-contour-duo': { title: "Lower Face Contouring King's Cross | Aevia Skin", description: "A doctor-led lower-face contour plan targeting masseter strength and downward muscular pull, with an honest four-to-eight-week timeline." },
  'neck-lift': { title: "Nefertiti Neck Lift King's Cross | Aevia Skin", description: "Doctor-led Nefertiti neck lift treatment in King's Cross for platysmal bands and subtle jaw-to-neck refinement." },
  'smile-lift': { title: "DAO Botox King's Cross | Aevia Skin", description: "A precise DAO treatment in King's Cross for suitable clients seeking a subtle lift to downturned mouth corners." },
  'sweat-control': { title: "Hyperhidrosis Treatment King's Cross | Aevia Skin", description: "Doctor-led injections for excessive underarm sweating in King's Cross, including suitability, likely downtime and price." },
  'profhilo': { title: "Profhilo King's Cross | Aevia Skin", description: "Profhilo treatment in King's Cross for gradual hydration and skin-quality improvement, performed by GMC-registered medical doctors." },
  'sunekos': { title: "Sunekos London | Aevia Skin King's Cross", description: "Doctor-led Sunekos treatment in King's Cross, London, for gradual skin hydration, texture and extracellular-matrix support." },
  'eye-rejuvenation': { title: "Polynucleotides Under Eyes London | Dark Circles | Aevia", description: "Under-eye polynucleotide treatment in London for selected crepey texture, hydration and dark-circle concerns, with honest downtime guidance." },
  'full-face-regeneration': { title: "Face Polynucleotides King's Cross | Aevia Skin", description: "Doctor-led full-face polynucleotide treatment in King's Cross for gradual improvements in hydration, texture and skin quality." },
  'microneedling': { title: "Microneedling King's Cross | Aevia Skin", description: "Doctor-led microneedling in King's Cross for texture, pores and selected acne scarring, with protocols adjusted for every skin tone." },
  'glycolic-peel': { title: "Glycolic Peel King's Cross | Aevia Skin", description: "Doctor-led glycolic peel information for texture, dullness and selected pigmentation concerns at Aevia Skin in King's Cross." },
  'salicylic-peel': { title: "Salicylic Acid Peel King's Cross | Aevia Skin", description: "Doctor-led salicylic acid peel information for oily, congested or blemish-prone skin at Aevia Skin in King's Cross." },
  'lactic-acid-peel': { title: "Lactic Acid Peel King's Cross | Aevia Skin", description: "Doctor-led lactic acid peel information for gentle exfoliation and skin brightness at Aevia Skin in King's Cross." },
  'tca-peel': { title: "TCA Peel King's Cross | Aevia Skin", description: "Doctor-led TCA peel information, suitability and recovery guidance from Aevia Skin in King's Cross." },
  'sculptra': { title: "Sculptra King's Cross | Aevia Skin", description: "Doctor-led Sculptra in King's Cross for gradual collagen stimulation and facial support, including realistic timelines, sessions and downtime." },
};

function getRouteMeta(pathname: string): RouteMeta {
  if (ROUTE_META[pathname]) return ROUTE_META[pathname];
  if (pathname.startsWith('/concerns/')) {
    const concern = concernBySlug(pathname.slice('/concerns/'.length));
    if (concern) return { title: `${concern.title} | Doctor-Led Guide | Aevia Skin`, description: concern.description, heading: concern.title };
  }
  if (pathname.startsWith('/treatments/')) {
    const slug = pathname.slice('/treatments/'.length);
    const treatment = TREATMENT_META[slug];
    if (treatment) return { ...treatment, heading: treatment.title.split(' | ')[0] };
  }
  return DEFAULT_ROUTE_META;
}

const TOP_LEVEL_TREATMENT_PATHS: Record<string, string> = {
  '/profhilo': 'profhilo',
  '/anti-wrinkle': 'anti-wrinkle',
};

function getTreatmentSlug(pathname: string): string | undefined {
  if (TOP_LEVEL_TREATMENT_PATHS[pathname]) return TOP_LEVEL_TREATMENT_PATHS[pathname];
  if (pathname.startsWith('/treatments/')) return pathname.slice('/treatments/'.length);
  return undefined;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  }[character] as string));
}

function renderList(items: string[]): string {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderPriceMenuItems(items: PriceMenuItem[]): string {
  return `<ul>${items.map((item) => `<li><span>${escapeHtml(item.name)}: ${escapeHtml(item.price)}</span>${item.note ? ` <span>${escapeHtml(item.note)}</span>` : ''} <a href="${escapeHtml(item.href)}">${escapeHtml(item.action ?? 'Book')}</a>${item.children ? renderPriceMenuItems(item.children) : ''}</li>`).join('')}</ul>`;
}

function buildTreatmentCrawlableContent(slug: string, heading: string, description: string): string | null {
  const profile = treatmentProfiles[slug];
  const detail = treatmentDetails[slug];
  if (!profile || !detail) return null;
  const mapping = treatmentMappings[slug];
  const faqs = profile.faqs.map((faq) => `<section><h2>${escapeHtml(faq.question)}</h2><p>${escapeHtml(faq.answer)}</p></section>`).join('');

  const treatment = findTreatmentBySlug(slug);
  const price = treatment?.price ?? treatmentPriceBySlug[slug]?.display ?? '';
  const priceNote = treatment?.priceNote ? `<p>${escapeHtml(treatment.priceNote)}</p>` : '';
  return `<main class="prerender-shell">
    <article>
      <header><p>${escapeHtml(profile.keyword)}</p><h1>${heading}</h1><p>${escapeHtml(profile.summary)}</p></header>
      <section><h2>What it is and how it works</h2>${detail.explanation.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</section>
      <section><h2>Who it is for</h2>${renderList(profile.whoFor)}</section>
      ${mapping ? `<section><h2>How treatment is mapped</h2><p>${escapeHtml(mapping.summary)}</p>${renderList(mapping.points)}</section>` : ''}
      <section><h2>What results look like</h2><p>${escapeHtml(profile.result)}</p><h3>Honest timeline</h3><p>${escapeHtml(profile.timeline)}</p></section>
      <section><h2>Price and sessions</h2><p>${escapeHtml(price)}</p>${priceNote}<p>${escapeHtml(profile.sessions)}</p></section>
      <section><h2>Safety and downtime</h2><p>${escapeHtml(profile.safety)}</p><p>${escapeHtml(profile.downtime)}</p></section>
      <section><h2>Skin-tone guidance</h2><p>${escapeHtml(profile.skinTone)}</p></section>
      <section><h2>Frequently asked questions</h2>${faqs}</section>
      <p><a href="/bookings">Book now</a> or <a href="https://wa.me/447448012556">ask a doctor on WhatsApp</a>.</p>
    </article>
    <nav aria-label="Related pages"><a href="/treatments">Treatments and prices</a> <a href="/polynucleotides">Polynucleotides</a> <a href="/skin-of-colour">Skin of colour</a> <a href="/team">The doctors</a> <a href="/clinic">Location and hours</a></nav>
  </main>`;
}

const PRIORITY_PAGE_CONTENT: Record<string, Array<{ heading: string; paragraphs: string[] }>> = {
  '/treatments': [
    { heading: 'Choose by concern', paragraphs: ['Start with what you want to change rather than a product name. Concern guides cover dull or tired skin, dark under-eyes, fine lines, uneven texture or tone, excessive sweating and a strong or painful jaw. A doctor then confirms which treatment, if any, fits the cause.'] },
    { heading: 'A Focused Treatment', paragraphs: ['A single doctor-selected treatment session from £250, with a suitability check, written aftercare and a 2-week review where included.'] },
    { heading: 'The Glow Protocol', paragraphs: [`Two Profhilo sessions, four weeks apart, with a photo review at week two for ${pricing.protocols.glow.display}, approximately ${pricing.protocols.glow.perSessionDisplay} per session.`] },
    { heading: 'The Aevia Plan', paragraphs: [`A doctor-designed plan from ${pricing.protocols.aeviaPlan.display.replace('From ', '')} across three or more months, combining treatments where useful.`] },
    { heading: 'Individual treatments', paragraphs: ['Compare anti-wrinkle treatment, Profhilo, Sunekos and polynucleotides with transparent prices.'] },
  ],
  '/concerns': [
    { heading: 'Dull, tired-looking skin', paragraphs: ['Explore hydration, texture, pigmentation and collagen factors, with links to Profhilo, Sunekos and polynucleotides.'] },
    { heading: 'Dark circles and tired under-eyes', paragraphs: ['Separate pigment, visible vessels, crepey skin, hollowness and structural shadow before choosing treatment.'] },
    { heading: 'Fine lines and expression wrinkles', paragraphs: ['Compare movement-related lines with dehydration and collagen change, then see anti-wrinkle and skin-quality options.'] },
    { heading: 'Uneven skin texture and tone', paragraphs: ['Understand the difference between scars, pores, roughness, post-inflammatory marks and active inflammation.'] },
    { heading: 'Excessive underarm sweating', paragraphs: ['Read about hyperhidrosis assessment, treatment mapping and when unexplained sweating needs medical review.'] },
    { heading: 'A strong, tense or painful jaw', paragraphs: ['Understand masseter tension, clenching and facial width, and when dental or joint assessment is more appropriate.'] },
  ],
  '/polynucleotides': [
    { heading: 'What are polynucleotides?', paragraphs: ['Polynucleotides are purified DNA fragments injected in small superficial deposits. They are used to support hydration, texture and the skin\'s regenerative environment rather than to reshape the face.', 'Improvement builds across a treatment course and the following weeks. Temporary bumps or swelling on treatment day are not the final result.'] },
    { heading: 'Under-eye polynucleotides', paragraphs: ['Under-eye treatment is considered for selected crepiness, dehydration and dark-circle concerns where improving skin quality is the goal. Dark circles can also come from pigment, vessels, hollowness or shadow, which may need a different plan.'] },
    { heading: 'Full-face polynucleotides', paragraphs: ['Full-face treatment supports gradual improvement in facial hydration, texture and resilience without structural filler volume. Areas are selected after examination rather than treated from one fixed template.'] },
    { heading: 'Polynucleotides for darker skin tones', paragraphs: ['Polynucleotides can be considered across skin tones. Technique and aftercare are adjusted individually, with attention to inflammation, bruising and post-inflammatory pigmentation.'] },
  ],
  '/skin-of-colour': [
    { heading: 'A clinical approach to skin of colour', paragraphs: ['Skin colour does not automatically exclude someone from aesthetic treatment. It does affect how a doctor considers inflammation, post-inflammatory pigmentation, scarring, product choice, treatment depth and aftercare.'] },
    { heading: 'Diagnose before treating', paragraphs: ['Pigment, inflammation, texture, visible vessels, hollowness and shadow can look similar but need different approaches. The cause of the concern should be identified before a procedure is selected.'] },
    { heading: 'Control inflammation', paragraphs: ['For black skin, brown skin and other melanin-rich skin tones, unnecessary inflammation can increase the chance of post-inflammatory hyperpigmentation. Technique and aftercare should be adjusted accordingly.'] },
    { heading: 'Treatments considered across skin tones', paragraphs: ['Skin boosters, polynucleotides and anti-wrinkle treatment can be considered when medically and anatomically suitable. Active inflammation, previous reactions and pigmentation history form part of the plan.'] },
  ],
};

function buildCrawlableBody(pathname: string, meta: RouteMeta, heading: string, description: string): string {
  const treatmentSlug = getTreatmentSlug(pathname);
  if (treatmentSlug) {
    const treatmentContent = buildTreatmentCrawlableContent(treatmentSlug, heading, description);
    if (treatmentContent) return treatmentContent;
  }

  if (pathname.startsWith('/concerns/')) {
    const concern = concernBySlug(pathname.slice('/concerns/'.length));
    if (concern) {
      const treatments = concern.treatments.map((treatment) => `<li><a href="${escapeHtml(treatment.href)}">${escapeHtml(treatment.name)}</a>: ${escapeHtml(treatment.explanation)}</li>`).join('');
      const faqs = concern.faqs.map((faq) => `<section><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></section>`).join('');
      const recommendation = concern.recommendedPlan ? `<section><h2>The plan we usually recommend</h2><h3>${escapeHtml(concern.recommendedPlan.name)} ${escapeHtml(concern.recommendedPlan.price)}</h3><p>${escapeHtml(concern.recommendedPlan.description)}</p><a href="${escapeHtml(concern.recommendedPlan.href)}">See the plan</a></section>` : '';
      return `<main class="prerender-shell"><article><header><p>${escapeHtml(concern.keyword)}</p><h1>${heading}</h1><p>${description}</p></header><section><h2>Understanding the concern</h2>${concern.overview.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</section><section><h2>What a doctor assesses</h2>${renderList(concern.possibleFactors)}</section>${recommendation}<section><h2>Treatments that may help</h2><ul>${treatments}</ul></section><section><h2>Skin-tone guidance</h2><p>${escapeHtml(concern.skinToneNote)}</p></section><section><h2>Frequently asked questions</h2>${faqs}</section><p><a href="https://wa.me/447448012556">Ask a doctor on WhatsApp</a>.</p></article><nav aria-label="Related pages"><a href="/concerns">All concerns</a> <a href="/treatments">Treatments</a> <a href="/skin-of-colour">Skin of colour</a></nav></main>`;
    }
  }

  if (pathname === '/treatments') {
    const categories = treatmentPriceMenu.map((category) => `<section id="${escapeHtml(category.id)}"><h2>${escapeHtml(category.name)}</h2><p>${escapeHtml(category.gloss)}</p>${renderPriceMenuItems(category.items)}${category.footer ? `<p>${escapeHtml(category.footer)}</p>` : ''}</section>`).join('');
    return `<main class="prerender-shell"><article><header><h1>${heading}</h1><p>${description}</p></header><section id="protocols"><h2>Doctor-planned options</h2><h3>A Focused Treatment, from ${escapeHtml(pricing.antiWrinkle.oneArea.display)}</h3><p>One treatment, chosen for one priority.</p><h3>The Glow Protocol, ${escapeHtml(pricing.protocols.glow.display)}</h3><p>Two Profhilo sessions, four weeks apart, with a photo review at week two.</p><h3>The Aevia Plan, ${escapeHtml(pricing.protocols.aeviaPlan.display)}</h3><p>A doctor-designed plan across three or more months, combining treatments where useful.</p></section><section id="price-menu"><h2>Choose your treatment</h2>${categories}</section></article><nav aria-label="Related pages"><a href="/concerns">Concern guides</a> <a href="/skin-of-colour">Skin of colour</a> <a href="/team">The doctors</a></nav></main>`;
  }

  const prioritySections = PRIORITY_PAGE_CONTENT[pathname];
  const sections = prioritySections?.map((section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</section>`).join('') ?? '';
  return `<main class="prerender-shell"><article><header><h1>${heading}</h1><p>${description}</p></header>${sections}</article><nav aria-label="Primary"><a href="/treatments">Treatments and prices</a> <a href="/polynucleotides">Polynucleotides</a> <a href="/skin-of-colour">Skin of colour</a> <a href="/team">The doctors</a> <a href="/clinic">Location and hours</a></nav></main>`;
}

function buildStructuredData(pathname: string, canonicalUrl: string, meta: RouteMeta): string {
  const graph: Array<Record<string, unknown>> = [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': `${BASE_URL}/#clinic`,
      name: 'Aevia Skin',
      url: BASE_URL,
      telephone: '+44 7448 012556',
      email: 'hello@theaevia.co.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Minsony, 260 Pentonville Road',
        addressLocality: 'London',
        postalCode: 'N1 9JY',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.53095626831055,
        longitude: -0.11996394395828247,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '13:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '10:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '18:00' },
      ],
      sameAs: ['https://www.instagram.com/aevia.skin', 'https://www.tiktok.com/@the.aevia'],
    },
    {
      '@type': 'WebPage',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': `${BASE_URL}/#website` },
    },
  ];
  const treatmentSlug = getTreatmentSlug(pathname);
  if (treatmentSlug && treatmentProfiles[treatmentSlug]) {
    const treatmentPrice = treatmentPriceBySlug[treatmentSlug];
    graph.push({
      '@type': 'Service',
      name: meta.heading ?? meta.title.split(' | ')[0],
      description: treatmentProfiles[treatmentSlug].summary,
      url: canonicalUrl,
      provider: { '@id': `${BASE_URL}/#clinic` },
      areaServed: ['King\'s Cross', 'Islington', 'London'],
      ...(treatmentPrice ? {
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          price: treatmentPrice.amount,
          url: canonicalUrl,
          availability: 'https://schema.org/InStock',
        },
      } : {}),
    });
  }
  if (pathname.startsWith('/concerns/')) {
    const concern = concernBySlug(pathname.slice('/concerns/'.length));
    if (concern?.faqs.length) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: concern.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      });
    }
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

function injectRouteDocument(html: string, pathname: string, canonicalUrl: string): string {
  const meta = getRouteMeta(pathname);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const heading = escapeHtml(meta.heading ?? meta.title.split(' | ')[0]);

  let document = html
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/i, `<meta name="description" content="${description}">`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/i, `<meta property="og:url" content="${canonicalUrl}">`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/i, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/i, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="twitter:url" content="[^"]*"\s*\/?\s*>/i, `<meta property="twitter:url" content="${canonicalUrl}">`)
    .replace(/<meta property="twitter:title" content="[^"]*"\s*\/?\s*>/i, `<meta property="twitter:title" content="${title}">`)
    .replace(/<meta property="twitter:description" content="[^"]*"\s*\/?\s*>/i, `<meta property="twitter:description" content="${description}">`);

  const crawlableBody = buildCrawlableBody(pathname, meta, heading, description);
  const structuredData = `<script type="application/ld+json">${buildStructuredData(pathname, canonicalUrl, meta)}</script>`;
  document = document.replace('</head>', `${structuredData}\n</head>`);
  document = document.replace('<div id="root"></div>', `<div id="root">${crawlableBody}</div>`);
  return document;
}

// Security middleware (non-CSP headers)
app.use(helmet({ contentSecurityPolicy: false }));

// CSP policies as single header to avoid multi-CSP intersection issues
type CspDirectives = Record<string, Array<string> | null>;
const cspGlobal: CspDirectives = {
  "default-src": ["'self'"],
  "img-src": ["'self'", "data:", "https:", "blob:"],
  "frame-src": [
    "'self'",
    "https://calendly.com",
    "https://www.calendly.com",
    "https://assets.calendly.com",
    "https://cal.com",
    "https://app.cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://book.squareup.com",
    "https://www.googletagmanager.com",
    "https://www.google.com",
    "https://*.google.com",
    "https://assets.mailerlite.com",
  ],
  "connect-src": [
    "'self'",
    "https://calendly.com",
    "https://www.calendly.com",
    "https://assets.calendly.com",
    "https://api.calendly.com",
    "https://cal.com",
    "https://app.cal.com",
    "https://api.cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://book.squareup.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://api.github.com",
    "https://github.com",
    "https://assets.mailerlite.com",
    "https://journal.theaevia.co.uk/api/posts.json",
  ],
  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://unpkg.com",
    "https://assets.mailerlite.com",
    "https://journal.theaevia.co.uk/api/posts.json",
  ],
  "script-src-elem": [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://unpkg.com",
    "https://assets.mailerlite.com",
    "https://journal.theaevia.co.uk/api/posts.json",
  ],
  "script-src-attr": ["'unsafe-inline'"],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://fonts.googleapis.com",
    "https://unpkg.com",
    "https://assets.mailerlite.com",
    "https://journal.theaevia.co.uk/api/posts.json",
  ],
  "style-src-elem": [
    "'self'",
    "'unsafe-inline'",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://fonts.googleapis.com",
    "https://unpkg.com",
    "https://assets.mailerlite.com",
    "https://journal.theaevia.co.uk/api/posts.json",
  ],
  "font-src": ["'self'", "https://fonts.gstatic.com"],
  "frame-ancestors": ["'none'"],
  "form-action": ["'self'"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
  "upgrade-insecure-requests": null,
  "report-uri": isProd ? ["https://www.theaevia.co.uk/api/csp-report"] : [],
};

const addDirectiveValue = (directive: string, value: string) => {
  const current = cspGlobal[directive];
  if (!Array.isArray(current)) return;
  if (!current.includes(value)) {
    current.push(value);
  }
};

if (!isProd) {
  const journalDevOrigin = 'http://localhost:4321';
  const journalDevWs = 'ws://localhost:4321';
  addDirectiveValue('connect-src', journalDevOrigin);
  addDirectiveValue('connect-src', journalDevWs);
  addDirectiveValue('img-src', journalDevOrigin);
}

function directivesToHeader(d: CspDirectives): string {
  return Object.entries(d)
    .map(([k, v]) => {
      if (v === null) return k;
      if (Array.isArray(v)) return `${k} ${v.join(' ')}`;
      return `${k} ${String(v)}`;
    })
    .join('; ');
}

app.use((req, res, next) => {
  const header = directivesToHeader(cspGlobal);
  res.setHeader('Content-Security-Policy', header);
  next();
});
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

// Auto-UTM redirect for bio/tiktok when arriving from TikTok or Instagram
app.use((req, res, next) => {
  const pathname = req.path.toLowerCase();
  if ((pathname === '/bio' || pathname === '/tiktok') && !('utm_source' in req.query)) {
    const referer = String(req.headers.referer || '').toLowerCase();
    const ua = String(req.headers['user-agent'] || '').toLowerCase();
    const fromTiktok = referer.includes('tiktok') || ua.includes('tiktok');
    const fromInstagram = referer.includes('instagram') || ua.includes('instagram');
    const url = new URL(req.originalUrl, BASE_URL);

    if (fromTiktok) {
      url.searchParams.set('utm_source', 'tiktok');
      url.searchParams.set('utm_medium', 'bio');
      url.searchParams.set('utm_campaign', 'profile');
      return res.redirect(302, url.pathname + url.search);
    }
    if (fromInstagram) {
      url.searchParams.set('utm_source', 'instagram');
      url.searchParams.set('utm_medium', 'bio');
      url.searchParams.set('utm_campaign', 'profile');
      // For Instagram, make direct booking primary.
      url.searchParams.set('intent', 'consult');
      return res.redirect(302, url.pathname + url.search);
    }
  }
  next();
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Add CSP report endpoint
app.post('/api/csp-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  const report = req.body;
  log(`CSP Violation: ${JSON.stringify(report)}`, "warn");
  res.status(204).end();
});

async function findAvailablePort(startPort: number, maxTries = 20): Promise<number> {
  function check(port: number): Promise<boolean> {
    return new Promise((resolve) => {
      const tester = net.createServer()
        .once('error', () => resolve(false))
        .once('listening', () => tester.close(() => resolve(true)))
        .listen({ port, host: '0.0.0.0' });
    });
  }

  let port = startPort;
  for (let i = 0; i < maxTries; i++) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await check(port);
    if (ok) return port;
    port += 1;
  }
  return startPort; // fallback to requested if none free
}

(async () => {
  try {
    const server = await registerRoutes(app);
    app.use(go);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      log(`Error: ${message}`, "error");
    });

    if (!isProd) {
      await setupVite(app, server);
    } else {
      // Handle case sensitivity and index.html variations
      app.use((req, res, next) => {
        const { pathname, search } = new URL(req.originalUrl, 'http://dummy');
        const lowerPath = pathname.toLowerCase();

        // Redirect index.html requests to their directory
        if (lowerPath.endsWith('/index.html')) {
          return res.redirect(301, lowerPath.replace(/\/index\.html$/, ''));
        }

        // Only lowercase paths that don't point to a file
        if (pathname !== lowerPath && path.extname(pathname) === '') {
          return res.redirect(301, lowerPath + search);
        }

        next();
      });

      // The homepage is the skin landing page; keep one canonical URL.
      app.get('/skin', (_req, res) => res.redirect(301, '/'));
      app.get('/treatments/profhilo', (_req, res) => res.redirect(301, '/profhilo'));
      app.get('/treatments/anti-wrinkle', (_req, res) => res.redirect(301, '/anti-wrinkle'));
      app.get('/categories/polynucleotides', (_req, res) => res.redirect(301, '/polynucleotides'));
      app.get('/pricing', (_req, res) => res.redirect(301, '/treatments'));
      const whatsappUrl = 'https://wa.me/447448012556?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20a%20treatment.';
      app.get(['/consultations', '/consultations/skin', '/categories/consultation', '/treatments/virtual-consultation', '/treatments/in-clinic-consultation'], (_req, res) => res.redirect(302, whatsappUrl));
      app.get('/treatments/smile-lift', (_req, res) => res.redirect(301, '/anti-wrinkle'));
      app.get(['/treatments/microneedling', '/treatments/sculptra', '/treatments/glycolic-peel', '/treatments/salicylic-peel', '/treatments/lactic-acid-peel', '/treatments/tca-peel', '/categories/microneedling-peels', '/categories/bio-voluminisation'], (_req, res) => res.redirect(301, '/treatments'));

      // Serve static files from the public directory but let the SPA handler
      // return index.html so we can inject canonical tags
      app.use(express.static(path.join(__dirname, 'public'), {
        index: false,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
          } else {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
        }
      }));

      // Serve assets from the assets directory
      app.use('/assets', express.static(path.join(__dirname, 'public/assets'), {
        maxAge: '1y'
      }));

      // Normalise trailing slashes
      app.use((req, res, next) => {
        const url = req.url;
        if (url.length > 1 && url.endsWith('/')) {
          return res.redirect(308, url.slice(0, -1));
        }
        if (url === '') {
          return res.redirect(308, '/');
        }
        next();
      });

      // Fallback to index.html for client-side routing
      app.get('*', (req, res) => {
        const canonicalUrl = `${BASE_URL}${req.path === '/' ? '' : req.path}`;

        const isFileRequest = path.extname(req.path) !== '';
        const isKnownRoute = VALID_ROUTES.includes(req.path.toLowerCase());

        res.status(isFileRequest || !isKnownRoute ? 404 : 200);

        // Set both header and HTML for canonical URL
        res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
        
        // Read the index.html file
        const indexPath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(indexPath, 'utf8', (err, data) => {
          if (err) {
            return res.status(500).send('Error loading page');
          }
          // Insert route-specific crawlable content and metadata before the client app runs.
          const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
          const modifiedHtml = injectRouteDocument(
            data.replace('</head>', `${canonicalTag}\n</head>`),
            req.path.toLowerCase(),
            canonicalUrl,
          );
          res.send(modifiedHtml);
        });
      });
    }

    // Determine port (auto-shift in dev if taken)
    const desiredPort = DEFAULT_PORT;
    const port = !isProd ? await findAvailablePort(desiredPort) : desiredPort;
    if (!isProd && port !== desiredPort) {
      log(`Port ${desiredPort} in use. Using ${port} instead.`);
    }

    // Helpful listener error handling
    server.on('error', (err: any) => {
      if (err && (err.code === 'EADDRINUSE' || err.errno === -48)) {
        log(`Port ${port} is already in use. Did a previous dev server not exit?`, "error");
        process.exit(1);
      }
      throw err;
    });

    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      log(`Server running on port ${port}`);
    });

    // Graceful shutdown to free the port on exit
    const shutdown = (signal: string) => {
      log(`Received ${signal}. Shutting down…`);
      server.close(() => {
        log('HTTP server closed');
        process.exit(0);
      });
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));

  } catch (error) {
    log(`Failed to start server: ${error}`, "error");
    process.exit(1);
  }
})();
