import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain=""
    clientId=""
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <LoginButton />
    <LogoutButton />
    <RouterProvider router={router} />
  </Auth0Provider>
);
