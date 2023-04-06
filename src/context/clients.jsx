import { createContext, useState, useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";

const ClientContext = createContext();

function Provider({ children }) {
  const [apiInfo, setApiInfo] = useState(null);
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);

  const getToken = async () => {
    const token = await getIdTokenClaims();
    setAccessToken(token.__raw); // get the actual token from the response
  };

  const fetchClients = useCallback(async () => {
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
  });

  //   const deleteBookById = async (id) => {
  //     await axios.delete(`http://localhost:3001/books/${id}`);

  //     const updatedBooks = books.filter((book) => {
  //       return book.id !== id;
  //     });
  //     setBooks(updatedBooks);
  //   };

  //   const createBook = async (title) => {
  //     const response = await axios.post("http://localhost:3001/books", {
  //       title,
  //     });

  //     const updatedBooks = [...books, response.data];
  //     setBooks(updatedBooks);
  //   };

  const valueToShare = {
    apiInfo,
    fetchClients,
    getToken,
    apiInfo,
    accessToken
  };

  return (
    <ClientContext.Provider value={valueToShare}>
      {children}
    </ClientContext.Provider>
  );
}

export { Provider };
export default ClientContext;
