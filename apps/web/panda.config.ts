import { defineConfig } from '@pandacss/dev';
import { parkPreset } from '../../libs/components/panda.config';

export default defineConfig({
  presets: ['@panda-starter/ui', parkPreset, '@pandacss/dev/presets'],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './components/**/*.{js,jsx,ts,tsx}',
    './forms/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../libs/components/src/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: ['node_modules'],

  // The output directory for your css system
  outdir: 'styled-system',
  emitPackage: true, // match design system emit
  jsxFramework: 'react',
});
