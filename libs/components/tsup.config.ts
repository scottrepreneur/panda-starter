import { defineConfig } from 'tsup';

export default defineConfig({
  // output type files
  dts: true,
  // sets our preset as the primary entrypoint
  entryPoints: ['src/index.ts'],
  // marks styled-system as an external dependency
  external: ['styled-system'],
  // output format
  format: ['esm'],
});
