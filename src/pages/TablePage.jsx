import TableTwo from "../components/TableTwo";
import { useAuth0 } from "@auth0/auth0-react";

function TablePage({ apiInfo }) {
  const isAuthenticated = useAuth0();
  const config = [
    { label: "Name", render: (user) => user.name },
    {
      label: "Email",
      render: (user) => user.email,
    },
  ];

  const keyFn = (user) => {
    return user.id;
  };

  return (
    <div>
      {isAuthenticated && (
        <TableTwo keyFn={keyFn} apiInfo={apiInfo} config={config} />
      )}
    </div>
  );
}

export default TablePage;
