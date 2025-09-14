#!/usr/bin/env node
import { execSync } from 'node:child_process';

const { TINA_PUBLIC_CLIENT_ID, TINA_TOKEN } = process.env;

if (!TINA_PUBLIC_CLIENT_ID || !TINA_TOKEN) {
  console.warn('[tina] Skipping `tinacms build` (missing TINA_PUBLIC_CLIENT_ID/TINA_TOKEN).');
  console.warn('[tina] The admin will not be rebuilt locally. Set env vars to build the admin.');
  process.exit(0);
}

try {
  // Prefer local binary if available
  execSync('./node_modules/.bin/tinacms build', { stdio: 'inherit', shell: true });
} catch (err) {
  console.error('[tina] `tinacms build` failed.');
  process.exit(1);
}

