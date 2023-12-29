import { css } from 'styled-system/css';

type CustomInputProps = {
  variant?: 'primary' | 'secondary';
};

type InputProps = CustomInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return <input {...props}>Input</input>;
};

export default Input;
