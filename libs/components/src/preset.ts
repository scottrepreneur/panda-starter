import { definePreset } from '@pandacss/dev';
import { textStyles } from './textStyles';

// import button from './recipes/button';
// import badge from './recipes/badge';
// import input from './recipes/input';

export default definePreset({
  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: 'red' },
        },
      },
      textStyles,
      recipes: {},
    },
  },
});
