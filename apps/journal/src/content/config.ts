import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string().optional(),
    // Accept either YAML-parsed Date objects or strings from CMS
    date: z.union([z.string(), z.date()]),
    updated: z.union([z.string(), z.date()]).optional(),
    status: z.enum(['draft', 'published']).default('published'),
    authors: z.array(z.string()).min(1),
    categories: z.array(z.string()).min(1),
    tags: z.array(z.string()).optional(),
    hero: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional(),
    og_image: z.string().optional(),
    reviewed_by: z.string().optional(),
    disclaimer: z.string().optional(),
    reading_time: z.number().optional(),
    canonical: z.string().url().optional(),
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    credentials: z.string().optional(),
    role: z.string().optional(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    links: z
      .object({
        website: z.string().optional(),
        instagram: z.string().optional(),
        linkedin: z.string().optional(),
      })
      .optional(),
  }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { posts, authors, categories };
