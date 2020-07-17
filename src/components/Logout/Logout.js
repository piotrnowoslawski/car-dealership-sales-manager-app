import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogoutButton, LogoutButtonImg, LogoutButtonText } from "./Logout.css";
import logoutIcon from "images/buttons/button-logout-icon.png";
import { logout } from "data/actions/auth.action";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogut = (e) => {
    e.preventDefault();
    history.push("/");
    dispatch(logout());
  };
  return (
    <>
      <LogoutButton onClick={(e) => handleLogut(e)}>
        <LogoutButtonImg src={logoutIcon} alt="ikona wylogowania" />
        <LogoutButtonText>Wyloguj</LogoutButtonText>
      </LogoutButton>
    </>
  );
};

export default Logout;
