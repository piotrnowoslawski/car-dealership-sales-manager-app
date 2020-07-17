import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, logout } from "data/actions/auth.action";
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
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const loggingIn = useSelector((state) => state.authReducer.loggingIn);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(logout());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmitted(true);
    if (user.login && user.password) {
      dispatch(login(user.login, user.password, history));
    }
  };
  return (
    <>
      <LoginForm onSubmit={(e) => handleSubmit(e)}>
        <LoginInputField>
          <LoginInputLabel htmlFor="username">Login:</LoginInputLabel>
          <LoginInput
            type="text"
            id="username"
            placeholder="wprowadź login..."
            onChange={(e) => setUser({ ...user, login: e.target.value })}
          />
        </LoginInputField>
        <LoginInputField>
          <LoginInputLabel htmlFor="password">Hasło:</LoginInputLabel>
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
          <Button
            blue
            className="login__button"
            disabled={user.login === "" || user.password === "" ? true : false}
          >
            <ButtonImg src={logInIcon} alt="ikona logowania" />
            <ButtonText>Zaloguj</ButtonText>
          </Button>
        </ButtonsContainer>
      </LoginForm>
    </>
  );
};

export default Login;
