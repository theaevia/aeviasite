const sanitizeUrl = (value?: string) => value?.trim().replace(/\/+$/, "") ?? "";

const rawSiteUrl = sanitizeUrl(import.meta.env.VITE_SITE_URL);
const rawJournalUrl = sanitizeUrl(import.meta.env.VITE_JOURNAL_URL);
const rawAssetBaseUrl = sanitizeUrl(import.meta.env.VITE_ASSET_BASE_URL);
const rawCmsApiUrl = sanitizeUrl(import.meta.env.VITE_CMS_API_URL);
const rawBookingUrl = sanitizeUrl(import.meta.env.VITE_BOOKING_URL);

const getWindowOrigin = () => {
  if (typeof window === "undefined") return "";
  return window.location.origin.replace(/\/+$/, "");
};

export const SITE_URL = rawSiteUrl;
export const JOURNAL_URL = rawJournalUrl;
export const ASSET_BASE_URL = rawAssetBaseUrl;
export const CMS_API_URL = rawCmsApiUrl;
export const BOOKING_URL = rawBookingUrl;

export const getSiteOrigin = () => SITE_URL || getWindowOrigin();

export const withSiteUrl = (path = "/") => {
  const base = getSiteOrigin();
  const normalisedPath = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalisedPath}` : normalisedPath;
};
