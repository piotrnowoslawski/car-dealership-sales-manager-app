import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "data/fetch/userInfo.fetch";
import { editUser } from "data/fetch/userManagement.fetch";
import { UserForm } from "components";

const UserEdit = () => {
  const { userId } = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.userInfoReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  const handleEdit = (user) => {
    dispatch(editUser(user, history));
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
        user={user}
        handleForm={handleEdit}
        handleCancel={handleCancel}
        submitText={"Zapisz"}
      />
    </>
  );
};

export default UserEdit;
