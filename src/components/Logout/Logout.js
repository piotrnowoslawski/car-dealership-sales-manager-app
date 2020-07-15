import React from "react";
import { useHistory } from "react-router-dom";
import { LogoutButton, LogoutButtonImg, LogoutButtonText } from "./Logout.css";
import logoutIcon from "images/buttons/button-logout-icon.png";

const Logout = () => {
  const history = useHistory();
  const handleLogut = (e) => {
    e.preventDefault();
    history.push("/");
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
