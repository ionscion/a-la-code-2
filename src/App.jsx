import { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/Appbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Modal from "./components/Modal";
import ClientDataTable from "./components/ClientDataTable";
import ClientContext from "./context/clients";
import jwt_decode from "jwt-decode";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0B746C",
    },
    secondary: {
      main: "#0B746C",
    },
  },
});

function App() {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const { fetchClients, getToken, apiInfo, accessToken } =
    useContext(ClientContext);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      getToken();
    }
  }, [getIdTokenClaims, isAuthenticated]);

  useEffect(() => {
    if (accessToken) {
      fetchClients();
    }
  }, [accessToken]);

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      {isAuthenticated && <Dashboard />}
      {isAuthenticated && <ClientDataTable apiInfo={apiInfo} />}
      <Modal title={"Trusts"} body={"A trust is a confusing thing!"} />
    </ThemeProvider>
  );
}

export default App;
