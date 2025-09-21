import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
});

function extractSrc(value: unknown): string | undefined {
  if (!value) return undefined;

  if (typeof value === 'string') {
    return value;
  }

  if (value instanceof URL) {
    return value.toString();
  }

  if (typeof value === 'object') {
    const maybeRecord = value as Record<string, unknown>;
    if (typeof maybeRecord.src === 'string') {
      return maybeRecord.src;
    }
    if (typeof maybeRecord.path === 'string') {
      return maybeRecord.path;
    }
  }

  if (import.meta.env.DEV) {
    console.warn('[resolveMediaPath] Unable to resolve media source from value:', value);
  }

  return undefined;
}

function isRemotePath(value: string): boolean {
  return /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(value) || value.startsWith('//');
}

function normalizeModuleKeys(input: string): string[] {
  const trimmed = input.trim();
  if (!trimmed) return [];

  const keys = new Set<string>();

  if (isRemotePath(trimmed)) {
    return [];
  }

  const strippedDots = trimmed.replace(/^\.\//, '');
  const withLeadingSlash = strippedDots.startsWith('/') ? strippedDots : `/${strippedDots}`;
  const normalisedSlash = withLeadingSlash.replace(/\/+/g, '/');
  const withoutLeadingSlash = normalisedSlash.replace(/^\/+/, '');

  keys.add(normalisedSlash);

  if (!normalisedSlash.startsWith('/src/')) {
    keys.add(`/src/${withoutLeadingSlash}`);
  }

  if (trimmed.startsWith('src/')) {
    keys.add(`/${trimmed.replace(/^\/+/, '')}`);
  }

  if (withoutLeadingSlash.startsWith('src/')) {
    keys.add(`/${withoutLeadingSlash}`);
  }

  const mappings: Array<[RegExp, string]> = [
    [/^images\/posts\//, '/src/assets/journal/posts/'],
    [/^images\/authors\//, '/src/assets/journal/authors/'],
    [/^images\//, '/src/assets/journal/posts/'],
    [/^public\/images\/authors\//, '/src/assets/journal/authors/'],
    [/^public\/images\//, '/src/assets/journal/posts/'],
    [/^src\/assets\//, '/src/assets/'],
  ];

  for (const [pattern, replacement] of mappings) {
    if (pattern.test(withoutLeadingSlash)) {
      keys.add(
        `${replacement}${withoutLeadingSlash.replace(pattern, '')}`
      );
    }
  }

  return Array.from(keys);
}

function findImageModule(value: string): ImageMetadata | undefined {
  for (const key of normalizeModuleKeys(value)) {
    const mod = imageModules[key];
    if (mod && typeof mod === 'object' && 'default' in mod) {
      return (mod as { default: ImageMetadata }).default;
    }
  }
  return undefined;
}

export function resolveImageModule(value: unknown): ImageMetadata | undefined {
  const raw = extractSrc(value);
  if (!raw) return undefined;
  if (isRemotePath(raw)) return undefined;
  return findImageModule(raw);
}

export function resolveMediaPath(value: unknown): string | undefined {
  const raw = extractSrc(value);
  if (!raw) return undefined;

  const module = resolveImageModule(value);
  if (module) {
    return module.src;
  }

  return raw.replace(/^\/+/, '/');
}
