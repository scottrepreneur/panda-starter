import { definePreset } from '@pandacss/dev';

export default definePreset({
  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: 'red' },
        },
      },
    },
  },
});
