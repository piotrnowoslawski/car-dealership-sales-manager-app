import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  // const users = useSelector((state) => state.usersReducer.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(user));
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
            onChange={(e) => setUser({ ...user, login: e.target.value })}
          />
        </LoginInputField>
        <LoginInputField>
          <LoginInputLabel htmlFor={password}>Hasło:</LoginInputLabel>
          <LoginInput
            type="password"
            id="password"
            placeholder="wprowadź hasło ..."
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
