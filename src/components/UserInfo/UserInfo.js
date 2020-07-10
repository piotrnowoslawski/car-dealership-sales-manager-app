import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "data/fetch/userInfo.fetch";
import { deleteUser } from "data/fetch/userManagement.fetch";

const UserInfo = () => {
  const { userId } = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.userInfoReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const answer = window.confirm("Czy napewno chcesz usunąć użytkownika?");
    if (answer) {
      dispatch(deleteUser(userId, history));
    } else return;
  };

  return (
    <>
      {user.firstName}
      <Link to="/dashboard/users">
        <button>Zamknij</button>
      </Link>
      <button onClick={(e) => handleEdit(e)}>Usuń</button>
      <Link to={`/dashboard/users/${userId}/edit`}>
        <button>Edytuj</button>
      </Link>
    </>
  );
};

export default UserInfo;
