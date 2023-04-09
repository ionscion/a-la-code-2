import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { ClientProfileDetails } from "./routes/ClientDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "clients/details",
        element: <ClientProfileDetails />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-za4id1uxfphft08n.us.auth0.com"
    clientId="uQ2crUwjk6sKYRLgrvfVw8VGVGhetdmo"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
