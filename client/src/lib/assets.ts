import { ASSET_BASE_URL } from "./env";

type AssetInput = string | null | undefined;

const PROTOCOL_REGEX = /^[a-z][a-z\d+\-.]*:/i;
const DATA_PREFIX_REGEX = /^(?:data:|blob:|mailto:|tel:|javascript:)/i;
const PROTOCOL_RELATIVE_REGEX = /^\/\//;
const LEADING_TRIM_REGEX = /^\.?\/*/;

export interface AssetOptions {
  /**
   * Fallback asset path that will be used when the provided value is empty.
   * The fallback is resolved with the same rules as any other asset.
   */
  fallback?: string;
}

const sanitize = (value?: string | null) => value?.trim() ?? "";

const isExternal = (value: string) =>
  PROTOCOL_REGEX.test(value) ||
  PROTOCOL_RELATIVE_REGEX.test(value) ||
  DATA_PREFIX_REGEX.test(value);

const resolveBase = () => {
  const fromEnv = sanitize(ASSET_BASE_URL);
  const fromVite = sanitize(import.meta.env.BASE_URL);
  const baseCandidate = fromEnv || fromVite || "/";

  if (baseCandidate === "/" || baseCandidate === "") {
    return "";
  }

  return baseCandidate.replace(/\/+$/, "");
};

const joinWithBase = (base: string, path: string) => {
  if (!base) {
    return `/${path}`.replace(/\/{2,}/g, "/");
  }

  if (/^https?:\/\//i.test(base)) {
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;
    return new URL(path, normalizedBase).toString();
  }

  const normalizedBase = base.startsWith("/") ? base : `/${base}`;
  return `${normalizedBase}/${path}`.replace(/\/{2,}/g, "/");
};

export const DEFAULT_ASSET_FALLBACK_PATH = "/assets/fallbacks/generic-fallback.png";

export const asset = (input?: AssetInput, options: AssetOptions = {}): string => {
  const fallbackCandidate = sanitize(options.fallback) || DEFAULT_ASSET_FALLBACK_PATH;
  const candidate = sanitize(input) || fallbackCandidate;

  if (!candidate) {
    return "";
  }

  if (isExternal(candidate)) {
    return candidate;
  }

  const cleanPath = candidate.replace(LEADING_TRIM_REGEX, "");
  const base = resolveBase();

  return joinWithBase(base, cleanPath);
};

export const assetSrcSet = (input?: AssetInput, options?: AssetOptions): string => {
  const candidate = sanitize(input);

  if (!candidate) {
    return "";
  }

  return candidate
    .split(",")
    .map((entry) => {
      const trimmed = entry.trim();
      if (!trimmed) return "";
      const parts = trimmed.split(/\s+/);
      const url = parts.shift() ?? "";
      const descriptor = parts.join(" ");
      const resolvedUrl = asset(url, options);
      return descriptor ? `${resolvedUrl} ${descriptor}` : resolvedUrl;
    })
    .filter(Boolean)
    .join(", ");
};

export const assetList = (entries: AssetInput[], options?: AssetOptions) =>
  entries.map((entry) => asset(entry, options));

export const assetFromPublic = (relativePath: string, options?: AssetOptions) => {
  const cleaned = relativePath.replace(/^\/+/, "");
  return asset(`/assets/${cleaned}`, options);
};

export const DEFAULT_ASSET_FALLBACK = asset(DEFAULT_ASSET_FALLBACK_PATH);
