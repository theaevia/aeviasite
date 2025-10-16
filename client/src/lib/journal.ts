import { JOURNAL_URL, getSiteOrigin } from "./env";

const resolveJournalOrigin = () => {
  const configured = JOURNAL_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  return getSiteOrigin();
};

export const JOURNAL_ORIGIN = resolveJournalOrigin();

export function journalUrl(path: string = '/') {
  const url = new URL(path, 'https://journal.local');
  const normalizedPath = url.pathname.startsWith('/journal')
    ? url.pathname.slice('/journal'.length) || '/'
    : url.pathname;
  const finalPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  return `${JOURNAL_ORIGIN}${finalPath}${url.search}${url.hash}`;
}
