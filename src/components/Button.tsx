import React from 'react';

interface Props {
  className: string;
  name: string;
  text: string;
}

const Button: React.FC<Props> = ({ className, name, text }) => {
  return (
    <button
      className={`${className} cursor-pointer w-24 h-24 text-2xl hover:opacity-45`}
      onClick={() => alert(`Você clicou no ${name} ${text}`)}
    >
      <b>{text}</b>
    </button>
  );
};

export default Button;
