import React, { useEffect } from "react";
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

  const handleCancel = (e) => {};

  return (
    <>
      <UserForm
        user={user}
        handleForm={handleEdit}
        handleCancel={handleCancel}
        headerText={"Edycja użytkownika"}
        headerIconPath={"edit-user"}
        headerIconTitle={"ikona edycji użytkownika"}
        submitText={"Zapisz"}
      />
    </>
  );
};

export default UserEdit;
