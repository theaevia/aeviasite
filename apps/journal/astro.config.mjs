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
import node from '@astrojs/node';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? '/journal' : ''; 

export default defineConfig({
  site: 'https://www.theaevia.co.uk',
  base,
  output: 'static',
  adapter: node({ mode: 'standalone' }),
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
