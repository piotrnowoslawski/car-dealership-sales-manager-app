import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "data/fetch/users.fetch";

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
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

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
