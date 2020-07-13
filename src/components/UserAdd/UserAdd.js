import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "data/fetch/userManagement.fetch";
import { UserForm } from "components";

const UserAdd = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAdd = (user) => {
    dispatch(addUser(user, history));
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
        handleForm={handleAdd}
        handleCancel={handleCancel}
        headerText={"Nowy użytkownik"}
        headerIconPath={"new-user"}
        headerIconTitle={"ikona nowego użytkownika"}
        submitText={"Zapisz"}
      />
    </>
  );
};

export default UserAdd;
