interface Props {
  className: string;
  name: string;
  texto: string;
}

const Botao = ({ className, name, texto }: Props) => {
  const estilo = name !== 'vazio' ? 'cursor-pointer' : 'cursor-context-menu';

  return (
    <button
      className={`${className} ${estilo} w-24 h-w-24 text-2xl`}
      onClick={() => alert('Você clicou no ' + name + ' ' + texto)}
    >
      <b>{texto}</b>
    </button>
  );
};

export default Botao;
