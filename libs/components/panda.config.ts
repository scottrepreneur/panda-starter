import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import preset from './src/preset';

export const parkPreset = createPreset({
  accentColor: 'sky',
  grayColor: 'sage',
  borderRadius: 'sm',
});

export default defineConfig({
  presets: [parkPreset, preset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',
  emitPackage: true,
  jsxFramework: 'react',
});
