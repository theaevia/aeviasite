// apps/journal/keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/journal/images/' : '/images/';

export default config({
  storage: {
    kind: 'cloud',
    pathPrefix: 'apps/journal',
  },
  cloud: { project: 'aevia-editors/aeviajournal' },
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'src/content/posts/*',
      slugField: 'slug',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.slug({
          name: {
            label: 'Slug source',
            description: 'Used to generate the URL slug; defaults to the post title.',
          },
          slug: {
            label: 'Slug',
            description: 'Lowercase, numbers and dashes only. This becomes the URL segment.',
            validation: {
              length: { min: 1 },
              pattern: {
                regex: /^[a-z0-9-]+$/,
                message: 'Use lowercase letters, numbers and dashes only',
              },
            },
          },
        }),
        dek: fields.text({ label: 'Dek', multiline: true, validation: { isRequired: false } }),
        date: fields.datetime({ label: 'Date', defaultValue: { kind: 'now' }, validation: { isRequired: true } }),
        updated: fields.datetime({ label: 'Updated', defaultValue: { kind: 'now' }, validation: { isRequired: false } }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'published',
        }),
        authors: fields.array(
          fields.relationship({ label: 'Author', collection: 'authors' }),
          {
            label: 'Authors',
            itemLabel: ({ value }) => value ?? 'Author',
            validation: { length: { min: 1 } },
          }
        ),
        categories: fields.array(
          fields.relationship({ label: 'Category', collection: 'categories' }),
          {
            label: 'Categories',
            itemLabel: ({ value }) => value ?? 'Category',
            validation: { length: { min: 1 } },
          }
        ),
        hero: fields.object(
          {
            src: fields.image({
              label: 'Hero image',
              directory: 'public/images',
              publicPath,
              validation: { isRequired: false },
            }),
            alt: fields.text({ label: 'Alt text', validation: { isRequired: false } }),
          },
          { label: 'Hero' }
        ),
        reading_time: fields.integer({
          label: 'Reading time (minutes)',
          validation: { isRequired: false },
        }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images',
              publicPath,
            },
          },
        }),
      },
    }),
    authors: collection({
      label: 'Authors',
      path: 'src/content/authors/*',
      slugField: 'slug',
      format: { data: 'json' },
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        name: fields.text({ label: 'Name' }),
        credentials: fields.text({ label: 'Credentials', validation: { isRequired: false } }),
        role: fields.text({ label: 'Role', validation: { isRequired: false } }),
        avatar: fields.image({
          label: 'Avatar',
          directory: 'public/images',
          publicPath,
          validation: { isRequired: false },
        }),
        bio: fields.text({ label: 'Bio', multiline: true, validation: { isRequired: false } }),
        links: fields.object(
          {
            website: fields.text({ label: 'Website', validation: { isRequired: false } }),
            instagram: fields.text({ label: 'Instagram', validation: { isRequired: false } }),
            linkedin: fields.text({ label: 'LinkedIn', validation: { isRequired: false } }),
          },
          { label: 'Links' }
        ),
      },
    }),
    categories: collection({
      label: 'Categories',
      path: 'src/content/categories/*',
      slugField: 'slug',
      format: { data: 'json' },
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        label: fields.text({ label: 'Label' }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: false } }),
      },
    }),
  },
});
