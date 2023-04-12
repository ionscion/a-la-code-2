import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Table = ({ data }) => {
  const { isAuthenticated } = useAuth0();

  let renderedUsers = null;
  if (data) {
    renderedUsers = data.map((user) => (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    ));
  }

  return isAuthenticated && <div>{renderedUsers}</div>;
};
