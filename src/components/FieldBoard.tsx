import Button from './Button';

const FieldBoard = () => {
  const lines = 2;
  const columns = 8;

  const renderizarCelulas = () => {
    const celulas = [];

    for (let i = 0; i < lines; i++) {
      const linha = [];
      for (let j = 0; j < columns; j++) {
        const classe =
          i % 2 === 0
            ? j % 2 === 0
              ? 'bg-tertiary'
              : 'bg-quaternary'
            : j % 2 === 0
              ? 'bg-quaternary'
              : 'bg-tertiary';
        linha.push(
          <td key={j}>
            <Button className={classe} name="Vazio" text="" />
          </td>
        );
      }
      celulas.push(<tr key={i}>{linha}</tr>);
    }

    return celulas;
  };

  return <table className="w-auto h-auto">{renderizarCelulas()}</table>;
};

export default FieldBoard;
