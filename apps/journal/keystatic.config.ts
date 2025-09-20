// apps/journal/keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/journal/images/' : '/images/';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'aevia-editors/aeviajournal',
  },

  collections: {
    // 1) Posts (MDX content + frontmatter in the same .mdx file)
    posts: collection({
      label: 'Posts',
      path: 'src/content/posts/*',
      // use a real slug field so editors can control URL
      slugField: 'slug',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.slug({ name: { label: 'Slug source' } }), // becomes the entry slug
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

        // Let editors pick real authors & categories from the other collections
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
              directory: 'public/images', // saved to apps/journal/public/images
              publicPath, // value written to content (e.g. "/images/foo.jpg")
              validation: { isRequired: false },
            }),
            alt: fields.text({ label: 'Alt text', validation: { isRequired: false } }),
          },
          { label: 'Hero' } // make the whole object optional
        ),

        reading_time: fields.integer({
          label: 'Reading time (minutes)',
          validation: { isRequired: false },
        }),

        // MDX body; enable the image toolbar so authors can upload/insert images easily
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

    // 2) Authors (JSON files in src/content/authors/*.json)
    authors: collection({
      label: 'Authors',
      path: 'src/content/authors/*',
      slugField: 'slug',
      format: { data: 'json' }, // write JSON, not frontmatter
      schema: {
        slug: fields.slug({ name: { label: 'Slug source' } }),
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
          { label: 'Links'}
        ),
      },
    }),

    // 3) Categories (JSON files in src/content/categories/*.json)
    categories: collection({
      label: 'Categories',
      path: 'src/content/categories/*',
      slugField: 'slug',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug source' } }),
        label: fields.text({ label: 'Label' }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: false } }),
      },
    }),
  },
});
