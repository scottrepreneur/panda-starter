import Image from 'next/image';
import styles from './page.module.css';
import { css } from 'styled-system/css';
import { Button } from '@panda-starter/ui';

export default function Home() {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        h: '100vh',
        w: '100vw',
      })}
    >
      <div className={css({ color: 'primary', fontSize: '2xl' })}>test</div>

      <Button>test</Button>
    </div>
  );
}
