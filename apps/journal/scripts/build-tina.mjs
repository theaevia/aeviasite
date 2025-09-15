#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const { TINA_PUBLIC_CLIENT_ID, TINA_TOKEN } = process.env;

if (!TINA_PUBLIC_CLIENT_ID || !TINA_TOKEN) {
  console.warn('[tina] Skipping `tinacms build` (missing TINA_PUBLIC_CLIENT_ID/TINA_TOKEN).');
  console.warn('[tina] The admin will not be rebuilt locally. Set env vars to build the admin.');
  process.exit(0);
}

const runTinacmsBuild = () => {
  const require = createRequire(import.meta.url);
  const candidates = [
    resolve(process.cwd(), 'node_modules', '.bin', 'tinacms'),
    resolve(process.cwd(), '..', '..', 'node_modules', '.bin', 'tinacms'),
  ].filter((binPath) => existsSync(binPath));

  // Try discovered binaries first, fall back to invoking the CLI entry directly.
  for (const binPath of candidates) {
    try {
      execFileSync(binPath, ['build'], { stdio: 'inherit' });
      return;
    } catch (error) {
      // Keep trying alternative locations.
    }
  }

  const cliEntry = require.resolve('@tinacms/cli/bin/tinacms');
  execFileSync(process.execPath, [cliEntry, 'build'], { stdio: 'inherit' });
};

try {
  runTinacmsBuild();
} catch (err) {
  console.error('[tina] `tinacms build` failed.');
  process.exit(1);
}
