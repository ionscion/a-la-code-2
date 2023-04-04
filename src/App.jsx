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
  const { isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  useAuth0()
    .getAccessTokenSilently()
    .then((jwt) => {
      console.log(jwt);
      console.log(jwt_decode(jwt));
      setAccessToken(jwt);
    });

  // const accessToken = useAuth0().getAccessTokenSilently();
  useEffect(() => {
    fetch("/api/v1/users")
      .then((data) => data.json())
      .then((data) => setApiInfo(data));
  }, []);

  // useEffect(() => {
  //   fetch("/api/v1/users", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + accessToken,
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((data) => setApiInfo(data));
  // }, []);

  // useEffect(() => {
  //   const decoded = jwt_decode(accessToken); // Decode the JWT token
  //   console.log(accessToken);
  //   console.log(decoded);
  //   const userId = decoded.sub; // Extract the user id from the decoded token

  //   fetch(`/api/v1/users/${userId}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer " + accessToken,
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((data) => setApiInfo(data));
  // }, [accessToken]);

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
