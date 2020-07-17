import React from "react";
import { Logout } from "components";
import {
  LoginUserContainer,
  LoginUserTitle,
  LoginUsername,
} from "./TopBarUserLogged.css";

const TopBarUserLogged = ({ user }) => {
  return (
    <>
      <LoginUserContainer>
        <LoginUserTitle>Użytkownik:</LoginUserTitle>
        <LoginUsername>{`${user.firstName} ${user.lastName}`}</LoginUsername>
      </LoginUserContainer>
      <Logout />
    </>
  );
};

export default TopBarUserLogged;
