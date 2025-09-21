import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import keystatic from '@keystatic/astro';
import { fileURLToPath } from 'node:url';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

/**
 * Default to serving the Journal from the domain root (e.g. journal.theaevia.co.uk).
 * Set JOURNAL_BASE_PATH or PUBLIC_JOURNAL_BASE if you need to host under a
 * subdirectory again (such as /journal when embedded in the main site build).
 */
const normalizeBase = (value) => {
  if (!value || value === '/') return '';
  const trimmed = value.replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}` : '';
};

const envBase = normalizeBase(process.env.JOURNAL_BASE_PATH ?? process.env.PUBLIC_JOURNAL_BASE ?? '');
const defaultBase = normalizeBase(process.env.JOURNAL_DEFAULT_BASE ?? '');
const base = envBase !== '' ? envBase : defaultBase;

export default defineConfig({
  site: 'https://journal.theaevia.co.uk',
  base,
  output: 'server',
  adapter: vercel(),
  integrations: [react(), sitemap(), mdx(), tailwind({ config: './tailwind.config.ts' }), markdoc(), keystatic()],
  vite: {
    plugins: [svgr()],
    resolve: {
      alias: {
        '@': path.resolve(repoRoot, 'client/src'),
        '@assets': path.resolve(repoRoot, 'client/assets'),
        '@shared': path.resolve(repoRoot, 'shared'),
        '@/components': path.resolve(repoRoot, 'client/src/components'),
        '@/pages': path.resolve(repoRoot, 'client/src/pages'),
        '@/lib': path.resolve(repoRoot, 'client/src/lib'),
      }
    },
    server: {
      fs: {
        allow: [repoRoot, __dirname]
      }
    }
  }
});
