import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const UserInfo = ({}) => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const history = useHistory();
  const port = 3001;
  const userApi = `http://localhost:${port}/users/${userId}`;

  useEffect(() => {
    getUser(userApi);
  }, []);

  const getUser = (url) => {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Brak połączenia");
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const deleteUser = (url) => {
    const answer = window.confirm("Czy napewno chcesz usunąć użytkownika?");
    if (answer) {
      const options = {
        method: "delete",
        body: JSON.stringify(user),
        headers: new Headers({
          "Content-Type": "applicationjson",
        }),
      };

      return fetch(url, options)
        .then((res) => res.json())
        .then(() => history.push("/dashboard/users"))
        .catch((error) => console.error(`Error: ${error}`));
    } else return;
  };

  return (
    <>
      {user.name}
      <Link to="/dashboard/users">
        <button>Zamknij</button>
      </Link>
      <button onClick={() => deleteUser(userApi)}>Usuń</button>
      <button>Edytuj</button>
    </>
  );
};

export default UserInfo;
