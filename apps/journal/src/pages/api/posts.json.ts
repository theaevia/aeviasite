import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { resolveMediaPath } from '../../utils/media';
import { withBase } from '../../utils/withBase';

const allowedOrigins = new Set([
  'https://www.theaevia.co.uk',
  'https://theaevia.co.uk',
  'https://journal.theaevia.co.uk',
  'http://localhost:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]);

const slugOf = (entry: any): string => {
  const ds = entry?.data?.slug;
  if (typeof ds === 'string' && ds.trim()) return ds.trim();
  if (ds && typeof ds === 'object' && typeof ds.slug === 'string' && ds.slug) return ds.slug;
  if (typeof entry?.slug === 'string' && entry.slug) return entry.slug;
  const normalizedId = String(entry?.id ?? '').replace(/\\/g, '/');
  const base = normalizedId.split('/').pop() ?? '';
  if (base.includes('.')) {
    const withoutExtension = base.split('.').slice(0, -1).join('.');
    if (withoutExtension) return withoutExtension;
  }
  return base;
};

export const prerender = true;

const buildResponse = async () => {
  const posts = await getCollection('posts', ({ data }) => data.status === 'published');
  const enriched = posts
    .map((entry) => {
      const slug = slugOf(entry);
      if (!slug) return null;

      const heroSrc = resolveMediaPath(entry.data.hero?.src);
      const cover = heroSrc ? withBase(heroSrc) : null;

      return {
        title: entry.data.title,
        slug,
        url: withBase(`/${slug}`),
        minimal_url: withBase(`/${slug}?view=minimal`),
        cover,
        date: entry.data.date,
        updated: entry.data.updated ?? null,
        excerpt: entry.data.dek ?? null,
        categories: entry.data.categories ?? [],
        tags: entry.data.tags ?? [],
        reading_time: entry.data.reading_time ?? null,
        hero_alt: entry.data.hero?.alt ?? null,
      };
    })
    .filter(Boolean);

  return enriched;
};

const applyCors = (headers: Headers, origin: string | null) => {
  if (!origin) {
    headers.set('Access-Control-Allow-Origin', '*');
    return;
  }

  if (allowedOrigins.has(origin)) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.append('Vary', 'Origin');
  }
};

const baseHeaders = () => {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
  });
  return headers;
};

export const GET: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = baseHeaders();
  applyCors(headers, origin);

  const body = await buildResponse();
  return new Response(JSON.stringify({ posts: body }, null, import.meta.env.DEV ? 2 : undefined), {
    status: 200,
    headers,
  });
};

export const OPTIONS: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  const headers = baseHeaders();
  applyCors(headers, origin);
  headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept');
  return new Response(null, { status: 204, headers });
};
