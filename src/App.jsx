//Note this has been moved to routes/root.jsx

import {  useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/Appbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ClientDataTable from "./components/ClientDataTable";
import ClientContext from "./context/clients";
import { Outlet } from "react-router-dom";


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
  const {
    fetchClients,
    getToken,
    apiInfo,
    accessToken,
  } = useContext(ClientContext);
  

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
      <Outlet apiInfo={apiInfo}/>
    </ThemeProvider>
  );
}

export default App;
