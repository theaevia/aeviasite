const rawBase = import.meta.env.BASE_URL ?? '/';
const base = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

/**
 * Prefixes a path with the configured Astro base path.
 * Ensures generated URLs stay valid in both dev ("/") and prod ("/journal").
 */
export function withBase(input: unknown): string {
  if (input == null || input === '') {
    return base || '/';
  }

  if (input instanceof URL) {
    return input.toString();
  }

  if (typeof input !== 'string') {
    if (import.meta.env.DEV) {
      console.warn('[withBase] expected string path, received', input);
    }
    input = String(input);
  }

  const path = input as string;
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(path) || path.startsWith('//')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}
