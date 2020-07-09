import React from "react";
import { useHistory } from "react-router-dom";
import { UserForm } from "components";

const UserAdd = () => {
  const history = useHistory();
  const port = 3001;
  const url = `http://localhost:${port}/users`;

  const addUser = (user) => {
    const options = {
      method: "post",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => history.push(`/dashboard/users/${data.id}`))
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    const answer = window.confirm("Czy napewno chcesz anulować?");
    if (answer) {
      history.push(`/dashboard/users/`);
    } else return;
  };

  return (
    <>
      <UserForm
        handleForm={addUser}
        handleCancel={handleCancel}
        submitText={"Zapisz"}
      />
    </>
  );
};

export default UserAdd;
