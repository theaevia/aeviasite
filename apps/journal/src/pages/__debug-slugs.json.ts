import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');
  const toSlug = (e: any) => e?.data?.slug?.slug ?? e?.data?.slug ?? e?.slug;
  return new Response(JSON.stringify(posts.map(p => ({
    file: p.id, slug: toSlug(p)
  })), null, 2), { headers: { 'content-type': 'application/json' }});
}
