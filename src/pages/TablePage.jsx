import TableTwo from "../components/TableTwo";

function TablePage({ apiInfo }) {
  const config = [
    { label: "Name", render: (user) => user.name },
    {
      label: "Email",
      render: (user) => user.email,
    },
  ];

  const keyFn = (user) => {
    return user.user_id;
  };

  return (
    <div>
      <TableTwo keyFn={keyFn} apiInfo={apiInfo} config={config} />
    </div>
  );
}

export default TablePage;
