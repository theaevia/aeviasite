const DEFAULT_JOURNAL_ORIGIN = 'https://journal.theaevia.co.uk';

function getJournalOrigin(): string {
  const env = (import.meta.env ?? {}) as Record<string, string | undefined>;
  const keys = ['PUBLIC_JOURNAL_ORIGIN', 'PUBLIC_JOURNAL_URL', 'VITE_JOURNAL_ORIGIN', 'VITE_JOURNAL_URL'];
  for (const key of keys) {
    const value = env[key];
    if (typeof value === 'string' && value.length > 0) {
      return value.replace(/\/$/, '');
    }
  }
  return DEFAULT_JOURNAL_ORIGIN;
}

export const JOURNAL_ORIGIN = getJournalOrigin();

export function journalUrl(path: string = '/') {
  const url = new URL(path, 'https://journal.local');
  const normalizedPath = url.pathname.startsWith('/journal')
    ? url.pathname.slice('/journal'.length) || '/'
    : url.pathname;
  const finalPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  return `${JOURNAL_ORIGIN}${finalPath}${url.search}${url.hash}`;
}
