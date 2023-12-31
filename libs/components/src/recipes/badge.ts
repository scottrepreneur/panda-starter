import { defineRecipe } from '@pandacss/dev';

const Badge = defineRecipe({
  className: 'badge',
  description: 'Badge',
  base: {
    px: 2,
    py: 1,
    borderRadius: 'sm',
  },
  variants: {
    visual: {
      filled: {
        bg: 'red-500',
        color: 'white',
      },
      outline: {
        bg: 'transparent',
        color: 'red-500',
        border: '1px solid',
      },
    },
  },
  defaultVariants: {
    visual: 'filled',
  },
});

export default Badge;
