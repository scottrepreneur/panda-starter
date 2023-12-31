import { defineRecipe } from '@pandacss/dev';

const Input = defineRecipe({
  className: 'input',
  description: 'The styles for the Input component',
  base: {
    px: 4,
    py: 2,
    rounded: 'md',
  },
  variants: {
    variant: {
      filled: {
        border: '1px solid blue',
        bg: 'orange.100',
        _error: {
          border: '1px solid red',
        },
      },
      outline: {
        border: '1px solid blue',
        bg: 'transparent',
      },
    },
    size: {
      sm: {},
      md: {},
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
});

export default Input;
