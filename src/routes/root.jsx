import Header from "../components/Header";
import SidebarPage from "../pages/SidebarPage";
import { useAuth0 } from "@auth0/auth0-react";
import App from "../app";

function Root() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <App />
    </div>
  );
}

export default Root;
