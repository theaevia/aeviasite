import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => data.status === 'published'))
    .sort((a, b) => (a.data.date < b.data.date ? 1 : -1));

  return rss({
    title: 'Aevia Journal',
    description: 'Doctor-led aesthetics & longevity.',
    site: context.site,
    items: posts.map((p) => {
      const normalizedId = p.id.split('\\').join('/');
      const fallbackSlug = normalizedId.split('/').pop()?.split('.').slice(0, -1).join('.') ?? '';
      const slug = typeof p.slug === 'string' && p.slug ? p.slug : fallbackSlug;
      return {
        title: p.data.title,
        description: p.data.dek,
        link: `/journal/${slug}`,
        pubDate: new Date(p.data.date),
      };
    }),
  });
}
