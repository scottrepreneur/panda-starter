import { ReactNode } from 'react';
import { css } from 'styled-system/css';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button
      className={css({
        bg: 'blue.100',
        px: 6,
        py: 2,
        _hover: { cursor: 'pointer' },
      })}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
