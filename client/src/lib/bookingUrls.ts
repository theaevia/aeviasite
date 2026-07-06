export const SKIN_CONSULTATION_URL = '/go/skin_consultations';
export const HYPERHIDROSIS_URL = '/go/hyperhidrosis';
export const CONTOUR_DUO_URL = '/go/contour_duo';
export const DAO_SMILE_URL = '/go/dao';
export const NEFERTITI_URL = '/go/nefertiti';
export const MASSETER_URL = '/go/masseter';
export const THREE_AREAS_URL = '/go/three_areas';
export const ANTI_WRINKLE_URL = '/go/all_anti_wrinkle';
export const SQUARE_SITE_URL = '/go/square_site';
export const SKIN_VIRTUAL_URL = '/go/skin_virtual';
export const SKIN_CLINIC_URL = '/go/skin_clinic';
export const PROFHILO_URL = '/go/profhilo';
export const PROFHILO_GLOW_URL = '/go/profhilo_glow';
export const SUNEKOS_URL = '/go/sunekos';
export const SUNEKOS_COURSE_URL = '/go/sunekos_course';
export const PNS_EYES_URL = '/go/eyes_pns';
export const PNS_EYES_COURSE_URL = '/go/eyes_pns_course';
export const PNS_FACE_URL = '/go/face_pns';
export const PNS_FACE_COURSE_URL = '/go/face_pns_course';
export const SCULPTRA_URL = '/go/sculptra';
export const WRINKLE_RESET_URL = '/go/wrinkle_reset';
export const GLOW_REVIVAL_URL = '/go/glow_revival';
export const MICRONEEDLING_REG_URL = '/go/microneedling_reg';
export const MICRONEEDLING_REGEN_URL = '/go/microneedling_regen';
export const PEELS_WAITLIST_URL = '/go/peels_waitlist';

// Clinic WhatsApp number for "Enquire to book" CTAs on course bundles.
// Sourced from WhatsAppWidget.tsx; wa.me wants the number without spaces or plus.
export const CLINIC_WHATSAPP_NUMBER = '447448012556';
export const whatsappEnquiryUrl = (subject = "a treatment") =>
  `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'd like to ask about ${subject}.`
  )}`;

export const CLINIC_WHATSAPP_ENQUIRE_URL = whatsappEnquiryUrl("a treatment");
