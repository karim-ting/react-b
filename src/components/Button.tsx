import { useState } from 'react';

interface Props {
  type?: 'primary' | 'secondary' | 'danger';
  text: string;
  onClick: () => void;
}
const Button = ({ type = 'primary', text, onClick }: Props) => {
  return (
    <button type='button' className={'btn btn-' + type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
