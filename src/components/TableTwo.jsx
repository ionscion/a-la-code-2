function TableTwo({ apiInfo, config, keyFn }) {
  let renderedRows = null;
  if (apiInfo) {
    const rowsArray = Array.isArray(apiInfo) ? apiInfo : [apiInfo];
    renderedRows = rowsArray.map((rowapiInfo) => {
      const renderedCells = config.map((column) => {
        return <td key={column.label}>{column.render(rowapiInfo)}</td>;
      });

      return <tr key={keyFn(rowapiInfo)}>{renderedCells}</tr>;
    });
  }

  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table>
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{apiInfo && renderedRows}</tbody>
    </table>
  );
}

export default TableTwo;
