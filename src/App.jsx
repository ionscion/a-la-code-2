import "materialize-css/dist/css/materialize.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SidebarPage from "./pages/SidebarPage";
import { Table } from "./components/Table";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [apiInfo, setApiInfo] = useState(null);
  const {isAuthenticated} = useAuth0();

  useEffect(() => {
    fetch("/api/v1/users")
      .then((data) => data.json())
      .then((data) => setApiInfo(data));
  }, []);

  return (
    <div>
      <Header />
      <SidebarPage />
      {/* {isAuthenticated && renderedUsers} */}
      <Table data={apiInfo}/>
    </div>
  );
}

export default App;
