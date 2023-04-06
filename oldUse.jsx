    // const [apiInfo, setApiInfo] = useState(null);
  
  // const [accessToken, setAccessToken] = useState(null);
  
  // useEffect(() => {
  //   if (accessToken) {
  //     const user_id = jwt_decode(accessToken).sub.slice(6);
  //     console.log(user_id);
  //     fetch(`/api/v1/clients/${user_id}`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: "Bearer " + accessToken,
  //       },
  //     })
  //       .then((data) => data.json())
  //       .then((data) => setApiInfo(data))
  //       .catch((error) => console.error(error));
  //   }
  // }, [accessToken]);



// useEffect(() => {
  //   fetch("/api/v1/users")
  //     .then((data) => data.json())
  //     .then((data) => setApiInfo(data));
  // }, []);

  // useEffect(() => {
  //   const getToken = async () => {
  //     const token = await getIdTokenClaims();
  //     setAccessToken(token.__raw); // get the actual token from the response
  //   };

  //   if (isAuthenticated) {
  //     getToken();
  //   }
  // }, [getIdTokenClaims, isAuthenticated]);

