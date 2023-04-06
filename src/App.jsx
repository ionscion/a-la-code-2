import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/Appbar";
import DataTable from "./components/DataTable";
import { red, purple, green, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Modal from "./components/Modal";
import ClientDataTable from "./components/ClientDataTable";

let theme = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: green[400],
    },
  },
});

function App() {
  const [apiInfo, setApiInfo] = useState(null);
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);

  // useEffect(() => {
  //   fetch("/api/v1/users")
  //     .then((data) => data.json())
  //     .then((data) => setApiInfo(data));
  // }, []);

  useEffect(() => {
    const getToken = async () => {
      const token = await getIdTokenClaims();
      setAccessToken(token.__raw); // get the actual token from the response
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [getIdTokenClaims, isAuthenticated]);

  useEffect(() => {
    if (accessToken) {
      const user_id = jwt_decode(accessToken).sub.slice(6);
      console.log(user_id);
      fetch(`/api/v1/clients/${user_id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((data) => data.json())
        .then((data) => setApiInfo(data))
        .catch((error) => console.error(error));
    }
  }, [accessToken]);

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      {isAuthenticated && <Dashboard />}
      {/* {isAuthenticated && <DataTable apiInfo={apiInfo} />} */}
      {isAuthenticated && <ClientDataTable apiInfo={apiInfo} />}
      <Modal title={"Trusts"} body={"A trust is a confusing thing!"} />
      <Modal title={"Estates"} body={"Causes much confusion!"} />
    </ThemeProvider>
  );
}

export default App;
