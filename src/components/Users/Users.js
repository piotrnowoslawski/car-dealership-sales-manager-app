import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const port = 3001;
  const usersApi = `http://localhost:${port}/users`;

  useEffect(() => {
    getUsers(usersApi);
  }, []);

  const getUsers = (url) => {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Brak połączenia");
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          <Link to={`/dashboard/users/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
