#!/usr/bin/env node
import 'dotenv/config';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const clientId = process.env.TINA_PUBLIC_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;

if (!clientId || !token) {
  console.warn('[tina] Skipping `tinacms build` (missing TINA_PUBLIC_CLIENT_ID/TINA_TOKEN).');
  console.warn('[tina] Admin bundle will not be refreshed. Set env vars to build the admin.');
  process.exit(0);
}

const runTinacmsBuild = () => {
  const candidates = [
    resolve(process.cwd(), 'node_modules', '.bin', 'tinacms'),
    resolve(process.cwd(), '..', 'node_modules', '.bin', 'tinacms'),
    resolve(process.cwd(), '..', '..', 'node_modules', '.bin', 'tinacms'),
  ].filter((binPath) => existsSync(binPath));

  for (const binPath of candidates) {
    try {
      execFileSync(binPath, ['build'], { stdio: 'inherit' });
      return;
    } catch {
      // keep trying other candidates
    }
  }

  const require = createRequire(import.meta.url);
  const cliEntry = require.resolve('@tinacms/cli/bin/tinacms');
  execFileSync(process.execPath, [cliEntry, 'build'], { stdio: 'inherit' });
};

try {
  runTinacmsBuild();
} catch (error) {
  console.error('[tina] `tinacms build` failed.');
  process.exit(1);
}
