import "materialize-css/dist/css/materialize.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SidebarPage from "./pages/SidebarPage";

function App() {
  const [apiInfo, setApiInfo] = useState(null);

  useEffect(() => {
    fetch("/api/v1/users")
      .then((data) => data.json())
      .then((data) => setApiInfo(data));
  }, []);

  let renderedUsers = null;
  if (apiInfo) {
    renderedUsers = apiInfo.map((user) => (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.password}</p>
      </div>
    ));
  }

  return (
    <div>
      <Header />
      <SidebarPage />
    </div>
  );
}

export default App;
