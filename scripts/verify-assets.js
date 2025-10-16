#!/usr/bin/env node
import { access, readFile, readdir, stat } from "fs/promises";
import path from "path";

const ASSET_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
  ".ico",
  ".bmp",
  ".heic",
  ".heif",
  ".tif",
  ".tiff",
  ".pdf",
  ".mp4",
  ".webm",
  ".mp3",
  ".wav",
  ".ogg",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf",
  ".eot",
  ".json",
  ".txt",
  ".glb",
  ".gltf",
]);

const REMOTE_PROTOCOL_REGEX = /^https?:/i;
const PROTOCOL_RELATIVE_REGEX = /^\/\//;
const DATA_URL_REGEX = /^data:/i;
const IGNORED_PROTOCOL_REGEX = /^(?:mailto:|tel:|javascript:)/i;

const DEFAULT_DIST_DIR = path.resolve(process.cwd(), "dist");
const DEFAULT_PUBLIC_DIR = path.join(DEFAULT_DIST_DIR, "public");

const shouldCheckRemote = (process.env.CHECK_ASSETS_SKIP_REMOTE ?? "0") !== "1";
const requestTimeoutMs = Number(process.env.CHECK_ASSETS_TIMEOUT_MS ?? "8000");

const remoteCache = new Map();
const localCache = new Map();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function pathExists(filePath) {
  const cacheKey = path.normalize(filePath);
  if (localCache.has(cacheKey)) {
    return localCache.get(cacheKey);
  }

  try {
    await access(filePath);
    const result = { ok: true };
    localCache.set(cacheKey, result);
    return result;
  } catch (error) {
    const result = { ok: false, message: error.message ?? "Unknown access error" };
    localCache.set(cacheKey, result);
    return result;
  }
}

async function checkRemote(url) {
  if (remoteCache.has(url)) {
    return remoteCache.get(url);
  }

  if (!shouldCheckRemote) {
    const result = { ok: true };
    remoteCache.set(url, result);
    return result;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);

  try {
    let response = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });

    if (!response.ok && response.status === 405) {
      response = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    }

    if (!response.ok) {
      const result = { ok: false, message: `HTTP ${response.status}` };
      remoteCache.set(url, result);
      return result;
    }

    const result = { ok: true };
    remoteCache.set(url, result);
    return result;
  } catch (error) {
    const result = { ok: false, message: error.message ?? "Unknown fetch error" };
    remoteCache.set(url, result);
    return result;
  } finally {
    clearTimeout(timeout);
  }
}

async function collectFiles(root) {
  const queue = [root];
  const files = [];

  while (queue.length) {
    const current = queue.pop();
    let stats;
    try {
      stats = await stat(current);
    } catch (error) {
      console.warn(`[warn] Unable to stat ${current}: ${error.message}`);
      continue;
    }

    if (stats.isDirectory()) {
      const entries = await readdir(current);
      for (const entry of entries) {
        queue.push(path.join(current, entry));
      }
      continue;
    }

    if (stats.isFile()) {
      const ext = path.extname(current).toLowerCase();
      if (ext === ".html" || ext === ".htm" || ext === ".css") {
        files.push(current);
      }
    }
  }

  return files;
}

function looksLikeAsset(rawUrl) {
  const cleaned = rawUrl.split("?")[0]?.split("#")[0] ?? "";
  if (!cleaned) return false;
  const lower = cleaned.toLowerCase();
  if (DATA_URL_REGEX.test(lower) || IGNORED_PROTOCOL_REGEX.test(lower)) {
    return false;
  }

  const extension = path.extname(lower);
  if (extension) {
    return ASSET_EXTENSIONS.has(extension);
  }

  return lower.startsWith("/assets/");
}

const normaliseUrl = (url) => url.trim().replace(/^"|"$/g, "");

function extractFromSrcSet(value) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => entry.split(/\s+/)[0] ?? "")
    .filter(Boolean);
}

function extractAssetsFromHtml(content, source) {
  const results = [];
  const attrRegex = /(src|href|poster|data-src)\s*=\s*(["'])([^"'>]+)\2/gi;
  let match;

  while ((match = attrRegex.exec(content)) !== null) {
    const url = normaliseUrl(match[3]);
    if (looksLikeAsset(url)) {
      results.push({ url, source });
    }
  }

  const srcSetRegex = /srcset\s*=\s*(["'])([^"']+)\1/gi;
  while ((match = srcSetRegex.exec(content)) !== null) {
    const urls = extractFromSrcSet(match[2]);
    for (const url of urls) {
      if (looksLikeAsset(url)) {
        results.push({ url, source });
      }
    }
  }

  const metaRegex = /<meta[^>]+content\s*=\s*(["'])([^"']+)\1/gi;
  while ((match = metaRegex.exec(content)) !== null) {
    const url = normaliseUrl(match[2]);
    if (looksLikeAsset(url)) {
      results.push({ url, source });
    }
  }

  return results;
}

function extractAssetsFromCss(content, source) {
  const results = [];
  const urlRegex = /url\(([^)]+)\)/gi;
  let match;

  while ((match = urlRegex.exec(content)) !== null) {
    const rawUrl = match[1].trim().replace(/^['"]|['"]$/g, "");
    if (looksLikeAsset(rawUrl)) {
      results.push({ url: rawUrl, source });
    }
  }

  return results;
}

function resolveLocalPath(rawUrl, sourceFile, rootDir) {
  const cleanUrl = rawUrl.split("?")[0]?.split("#")[0] ?? rawUrl;

  if (cleanUrl.startsWith("/")) {
    return path.join(rootDir, cleanUrl.replace(/^\/+/, ""));
  }

  if (cleanUrl.startsWith("./") || cleanUrl.startsWith("../")) {
    return path.resolve(path.dirname(sourceFile), cleanUrl);
  }

  if (!REMOTE_PROTOCOL_REGEX.test(cleanUrl) && !PROTOCOL_RELATIVE_REGEX.test(cleanUrl)) {
    return path.resolve(path.dirname(sourceFile), cleanUrl);
  }

  if (REMOTE_PROTOCOL_REGEX.test(cleanUrl)) {
    try {
      const url = new URL(cleanUrl);
      return path.join(rootDir, url.pathname.replace(/^\/+/, ""));
    } catch (error) {
      return null;
    }
  }

  if (PROTOCOL_RELATIVE_REGEX.test(cleanUrl)) {
    try {
      const url = new URL(`https:${cleanUrl}`);
      return path.join(rootDir, url.pathname.replace(/^\/+/, ""));
    } catch (error) {
      return null;
    }
  }

  return null;
}

const isRemoteUrl = (url) => REMOTE_PROTOCOL_REGEX.test(url) || PROTOCOL_RELATIVE_REGEX.test(url);

async function main() {
  const distDirArg = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : DEFAULT_DIST_DIR;
  const publicExists = await pathExists(path.join(distDirArg, "public"));
  const primaryRoot = publicExists.ok ? path.join(distDirArg, "public") : distDirArg;

  const files = await collectFiles(primaryRoot);
  if (files.length === 0) {
    console.error(`[error] No HTML or CSS files found under ${primaryRoot}`);
    process.exit(1);
  }

  const issues = [];
  const inspected = new Map();

  for (const file of files) {
    const content = await readFile(file, "utf8");
    const ext = path.extname(file).toLowerCase();

    const candidates = ext === ".css"
      ? extractAssetsFromCss(content, file)
      : extractAssetsFromHtml(content, file);

    for (const candidate of candidates) {
      const seenForFile = inspected.get(candidate.source) ?? new Set();
      if (seenForFile.has(candidate.url)) continue;
      seenForFile.add(candidate.url);
      inspected.set(candidate.source, seenForFile);

      const normalisedUrl = normaliseUrl(candidate.url);

      if (DATA_URL_REGEX.test(normalisedUrl) || IGNORED_PROTOCOL_REGEX.test(normalisedUrl)) {
        continue;
      }

      if (normalisedUrl.includes("%")) {
        // Placeholder tokens (e.g. %VITE_SITE_URL%) should be replaced during a real build.
        continue;
      }

      if (isRemoteUrl(normalisedUrl)) {
        const remoteUrl = PROTOCOL_RELATIVE_REGEX.test(normalisedUrl) ? `https:${normalisedUrl}` : normalisedUrl;
        const remoteResult = await checkRemote(remoteUrl);
        if (!remoteResult.ok) {
          issues.push({
            type: "http",
            url: remoteUrl,
            source: candidate.source,
            message: remoteResult.message ?? "Failed remote check",
          });
        }
        if (shouldCheckRemote) {
          await sleep(50);
        }
        continue;
      }

      const localPath = resolveLocalPath(normalisedUrl, candidate.source, primaryRoot);

      if (!localPath) {
        issues.push({
          type: "missing",
          url: normalisedUrl,
          source: candidate.source,
          message: "Unable to resolve local asset path",
        });
        continue;
      }

      const exists = await pathExists(localPath);
      if (!exists.ok) {
        issues.push({
          type: "missing",
          url: normalisedUrl,
          source: candidate.source,
          message: exists.message ?? "Asset not found",
        });
      }
    }
  }

  if (issues.length > 0) {
    console.error(`\n[asset-check] Detected ${issues.length} missing or invalid asset reference(s):`);
    for (const issue of issues) {
      console.error(` - (${issue.type}) ${issue.url}\n   referenced from ${issue.source}\n   ${issue.message}`);
    }
    process.exit(1);
  }

  console.log(`[asset-check] ✅ Verified ${files.length} file(s); no missing assets detected.`);
}

main().catch((error) => {
  console.error("[asset-check] Unexpected error", error);
  process.exit(1);
});
