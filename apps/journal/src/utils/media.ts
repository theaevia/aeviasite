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

export function resolveMediaPath(value: unknown): string | undefined {
  const raw = extractSrc(value);
  if (!raw) return undefined;
  // Normalise double leading slashes produced by some CMSs
  return raw.replace(/^\/+/, '/');
}
