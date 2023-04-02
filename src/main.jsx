import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import LoginButton from "./login";
import LogoutButton from "./logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
