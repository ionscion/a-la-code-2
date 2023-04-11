import ClientContext from "../context/clients";
import { useContext } from "react";

export function contextLoader() {
    const { fetchClients, getToken, apiInfo, accessToken } =
    useContext(ClientContext);
    return apiInfo;
  }