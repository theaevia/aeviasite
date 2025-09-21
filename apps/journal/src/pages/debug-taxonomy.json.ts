import { getCollection } from 'astro:content';

const entrySlug = (entry: { id: string } & Record<string, unknown>) => {
  const dataSlug = (entry as any)?.data?.slug;
  if (typeof dataSlug === 'string' && dataSlug.trim()) return dataSlug.trim();
  if (dataSlug && typeof dataSlug === 'object' && typeof dataSlug.slug === 'string' && dataSlug.slug.trim()) {
    return dataSlug.slug.trim();
  }

  const maybeSlug = (entry as { slug?: string }).slug;
  if (typeof maybeSlug === 'string' && maybeSlug.trim()) return maybeSlug.trim();

  const normalizedId = entry.id.replace(/\\/g, '/');
  const filename = normalizedId.split('/').pop() ?? '';
  if (filename.includes('.')) {
    const withoutExtension = filename.split('.').slice(0, -1).join('.');
    if (withoutExtension) return withoutExtension;
  }
  return filename;
};

export async function GET() {
  try {
    const cats = await getCollection('categories');
    const auth = await getCollection('authors');
    return new Response(
      JSON.stringify(
        {
          categories: cats.map((c) => ({ file: c.id, slug: entrySlug(c), label: c.data?.label })),
          authors: auth.map((a) => ({ file: a.id, slug: entrySlug(a), name: a.data?.name })),
        },
        null,
        2
      ),
      { headers: { 'content-type': 'application/json' } }
    );
  } catch (err) {
    if (err instanceof Response) throw err;
    console.error('Debug taxonomy error', err);
    const message = err instanceof Error ? err.message : JSON.stringify(err);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
