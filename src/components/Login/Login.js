import React, { useState } from "react";
import {
  ButtonsContainer,
  Button,
  ButtonImg,
  ButtonText,
  ButtonTransparent,
} from "components/Buttons/Buttons";
import {
  LoginForm,
  LoginInputField,
  LoginInputLabel,
  LoginInput,
} from "./Login.css";
import logInIcon from "images/buttons/button-login-icon.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <LoginForm onSubmit={(e) => handleSubmit(e)}>
        <LoginInputField>
          <LoginInputLabel htmlFor={username}>Login:</LoginInputLabel>
          <LoginInput
            type="text"
            id="username"
            placeholder="wprowadź login..."
          />
        </LoginInputField>
        <LoginInputField>
          <LoginInputLabel htmlFor={password}>Hasło:</LoginInputLabel>
          <LoginInput
            type="password"
            id="password"
            placeholder="wprowadź hasło ..."
          />
        </LoginInputField>
        <ButtonsContainer>
          <ButtonTransparent>Zmień hasło</ButtonTransparent>
          <ButtonTransparent>Hasło zablokowane</ButtonTransparent>
          <Button blue className="login__button">
            <ButtonImg src={logInIcon} alt="ikona logowania" />
            <ButtonText>Zaloguj</ButtonText>
          </Button>
        </ButtonsContainer>
      </LoginForm>
    </>
  );
};

export default Login;
