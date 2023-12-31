import { flex } from 'styled-system/patterns';
import dynamic from 'next/dynamic';

const RegisterForm = dynamic(() => import('../forms/RegisterForm'));

const Home = () => (
  <div className={flex({ justify: 'center', mt: '50px', w: '100%' })}>
    <RegisterForm />
  </div>
);

export default Home;
