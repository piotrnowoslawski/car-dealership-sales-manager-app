import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserForm } from "components";

const UserEdit = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const history = useHistory();
  const port = 3001;
  const url = `http://localhost:${port}/users/${userId}`;

  useEffect(() => {
    getUser(url);
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
        console.log(user);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const editUser = () => {};

  const handleCancel = (e) => {
    e.preventDefault();
    const answer = window.confirm("Czy napewno chcesz anulować?");
    if (answer) {
      history.push(`/dashboard/users/`);
    } else return;
  };

  return (
    <>
      <UserForm user={user} handleForm={editUser} handleCancel={handleCancel} />
    </>
  );
};

export default UserEdit;
