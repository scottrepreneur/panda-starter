import { defineRecipe } from '@pandacss/dev';

const Button = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    px: 6,
    py: 4,
    color: 'blue',
    rounded: 'md',
    _hover: {
      cursor: 'pointer',
    },
  },
  variants: {
    variant: {
      filled: {
        border: '1px solid blue',
        bg: 'orange.100',
        _hover: {
          bg: 'orange.200',
        },
      },
      outline: {
        border: '1px solid blue',
        bg: 'transparent',
        _hover: {
          bg: 'blue.400',
        },
      },
    },
    size: {
      sm: {},
      md: {},
    },
  },
  // Add the jsx hint to track the usage of the recipe in JSX, you can use regex to match multiple components
  // jsx: ['Button', 'MenuButton'],
});

export default Button;
