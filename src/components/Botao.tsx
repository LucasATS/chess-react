import React from 'react';

interface Props {
  className: string;
  name: string;
  texto?: string;
}

const Botao: React.FC<Props> = ({ className, name, texto }) => {
  const estilo = name !== 'Vazio' ? 'cursor-pointer' : 'cursor-context-menu';

  return (
    <button
      className={`${className} ${estilo} w-24 h-24 text-2xl`}
      onClick={() => alert(`Você clicou no ${name} ${texto}`)}
    >
      <b>{texto}</b>
    </button>
  );
};

export default Botao;
