import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "data/fetch/users.fetch";
import { List, ListItem, StyledLink } from "./Users.css";
import { Button, ButtonImg, ButtonText } from "../Buttons/Buttons";
import addButtonIcon from "images/buttons/button-add-user-icon.png";

const Users = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <List>
        {users.map((item) => (
          <ListItem key={item.id}>
            <StyledLink to={`/dashboard/users/${item.id}`}>
              {item.firstName}
            </StyledLink>
          </ListItem>
        ))}
      </List>
      <Link to="/dashboard/users/new">
        <Button green>
          <ButtonImg src={addButtonIcon} alt="przycisk dodaj użytkownika" />
          <ButtonText>Dodaj użytkownika</ButtonText>
        </Button>
      </Link>
    </>
  );
};

export default Users;
