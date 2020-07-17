import React from "react";
import { Container, StyledLink, LogoImg, LogoText } from "./TopBar.css";
import { useSelector, useDispatch } from "react-redux";
import { TopBarUserLogged } from "components";
import logo from "images/logo/logo-blue.png";

const TopBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  return (
    <>
      <Container>
        <StyledLink to="/dashboard">
          <LogoImg src={logo} alt="logo" />
          <LogoText>CDS Manager</LogoText>
        </StyledLink>
        {user ? <TopBarUserLogged user={user} /> : null}
      </Container>
    </>
  );
};

export default TopBar;
