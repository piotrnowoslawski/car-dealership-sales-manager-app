import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "data/fetch/users.fetch";

const Users = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={`/dashboard/users/${item.id}`}>{item.firstName}</Link>
          </li>
        ))}
      </ul>
      <Link to="/dashboard/users/new">
        <button>Dodaj użytkownika</button>
      </Link>
    </>
  );
};

export default Users;
