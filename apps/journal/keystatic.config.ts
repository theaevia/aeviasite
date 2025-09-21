// apps/journal/keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';
import React from 'react';

const postsDirectory = 'src/assets/journal/posts';
const postsPublicPath = '/images/posts';
const authorsDirectory = 'src/assets/journal/authors';
const authorsPublicPath = '/images/authors';

const figureSizeOptions = [
  { label: 'Thumbnail (widths: 320, 480, 640)', value: 'thumb' },
  { label: 'Content (widths: 640, 960, 1280)', value: 'content' },
  { label: 'Wide (widths: 960, 1280, 1600)', value: 'wide' },
  { label: 'Full (widths: 1280, 1600, 2048)', value: 'full' },
] as const;

const figureComponent = block({
  label: 'Figure',
  schema: {
    src: fields.image({
      label: 'Image',
      directory: postsDirectory,
      publicPath: postsPublicPath,
      validation: { isRequired: true },
    }),
    alt: fields.text({ label: 'Alt text', validation: { isRequired: false } }),
    size: fields.select({
      label: 'Display size',
      description: 'Controls the rendered width preset.',
      options: figureSizeOptions,
      defaultValue: 'content',
    }),
    caption: fields.text({ label: 'Caption', multiline: true, validation: { isRequired: false } }),
    align: fields.select({
      label: 'Alignment',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Left', value: 'left' },
      ],
      defaultValue: 'center',
    }),
  },
  ContentView: ({ value }) =>
    React.createElement(
      'figure',
      {
        style: {
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '12px',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        },
      },
      React.createElement('strong', null, value.alt || 'Figure'),
      value.caption ? React.createElement('span', { style: { fontSize: '12px', color: '#666' } }, value.caption) : null,
      React.createElement(
        'code',
        { style: { fontSize: '11px', color: '#444' } },
        `size: ${value.size ?? 'content'}, align: ${value.align ?? 'center'}`
      )
    ),
});

export default config({
  storage: {
    kind: 'local',
  },
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
              directory: postsDirectory,
              publicPath: postsPublicPath,
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
              directory: postsDirectory,
              publicPath: postsPublicPath,
            },
          },
          components: {
            Figure: figureComponent,
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
          directory: authorsDirectory,
          publicPath: authorsPublicPath,
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
