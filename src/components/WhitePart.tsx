import { whiteParts } from '../modules/_shared/constants/whiteParts.constans';
import Button from './Button';

const WhitePart = () => {
  const renderParts = () => {
    const lines = 2;
    const columns = 8;

    const tabela = [];

    for (let i = 0; i < lines; i++) {
      const linha = [];

      for (let j = 0; j < columns; j++) {
        const indice = i * columns + j;
        const { name, text } = whiteParts[indice];

        linha.push(
          <td key={j}>
            <Button
              className={indice % 2 === 1 ? 'bg-tertiary' : 'bg-quaternary'}
              name={name}
              text={text}
            />
          </td>
        );
      }

      tabela.push(<tr key={i}>{linha}</tr>);
    }

    return tabela;
  };

  return <table className="w-auto h-auto">{renderParts()}</table>;
};

export default WhitePart;
