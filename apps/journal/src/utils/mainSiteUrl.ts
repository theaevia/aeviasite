const DEFAULT_MAIN_SITE_ORIGIN = 'https://theaevia.co.uk';

export function mainSiteUrl(path: string): string {
  const origin = (import.meta.env["PUBLIC_MAIN_SITE_ORIGIN"] ?? DEFAULT_MAIN_SITE_ORIGIN) as string;
  const cleanedOrigin = origin.replace(/\/$/, '');
  const cleanedPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanedOrigin}${cleanedPath}`;
}
