/* eslint-disable import/prefer-default-export */
import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    description: 'The body text style - used in paragraphs',
    value: {
      fontFamily: 'Heebo',
    },
  },
  heading: {
    description: 'The heading text style - used in headings',
    value: {
      fontFamily: 'Arvo',
    },
  },
});
