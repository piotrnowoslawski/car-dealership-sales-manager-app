import React from "react";
import { Login } from "components";
import {
  Container,
  LogoContainer,
  LogoImg,
  LogoText,
  LogoTextSpan,
} from "./Home.css";
import logo from "images/logo/logo-blue.png";

const Home = () => {
  return (
    <>
      <Container>
        <LogoContainer>
          <LogoImg src={logo} alt="logo aplikacji" />
          <LogoText>
            Car Dealership Sales <LogoTextSpan>Manager</LogoTextSpan>
          </LogoText>
        </LogoContainer>
        <Login />
      </Container>
    </>
  );
};

export default Home;
