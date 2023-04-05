import { useState, useEffect } from "react";
import Header from "./components/Header";
import SidebarPage from "./pages/SidebarPage";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import TablePage from "./pages/TablePage";
import jwt_decode from "jwt-decode";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/Appbar";

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
      fetch(`/api/v1/users/${user_id}`, {
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
    <div>
      {/* <Header /> */}
      <ButtonAppBar />
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
      {isAuthenticated && <Dashboard />}
      {/* <SidebarPage /> */}
      {isAuthenticated && <TablePage apiInfo={apiInfo} />}
    </div>
  );
}

export default App;
