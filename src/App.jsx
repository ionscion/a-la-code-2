import { useState, useEffect } from "react";
import Header from "./components/Header";
import SidebarPage from "./pages/SidebarPage";
import { Table } from "./components/Table";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import TablePage from "./pages/TablePage";

function App() {
  const [apiInfo, setApiInfo] = useState(null);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    fetch("/api/v1/users")
      .then((data) => data.json())
      .then((data) => setApiInfo(data));
  }, []);

  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
      <Header />
      <SidebarPage />
      {/* <Table data={apiInfo} /> */}
      <TablePage apiInfo={apiInfo} />
    </div>
  );
}

export default App;
