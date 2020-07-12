import React from "react";
import { Container, StyledLink, LogoImg, LogoText } from "./TopBar.css";
import logo from "images/logo/logo-blue.png";

const TopBar = () => {
  return (
    <>
      <Container>
        <StyledLink to="/dashboard">
          <LogoImg src={logo} alt="logo" />
          <LogoText>CDS Manager</LogoText>
          {/* <LogoText>Car Dealership Sales Manager</LogoText> */}
        </StyledLink>
      </Container>
    </>
  );
};

export default TopBar;
