import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { alertClear } from "data/actions/alert.actions";
import { Login } from "components";
import {
  Container,
  LogoContainer,
  LogoImg,
  LogoText,
  LogoTextSpan,
  AlertContainer,
  AlertContainerSpan,
  AlertContainerImg,
} from "./Home.css";
import logo from "images/logo/logo-blue.png";
import alertIcon from "images/alerts/alert-icon.png";

const Home = () => {
  const alert = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertClear());
    });
  }, []);
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
        {alert.message && (
          <AlertContainer>
            <AlertContainerImg src={alertIcon} alt="ikona ostrzeżenia" />
            <AlertContainerSpan>
              {alert.message === "login should be _id" || "wrong password"
                ? "Błędny login lub hasło"
                : null}
            </AlertContainerSpan>
          </AlertContainer>
        )}
      </Container>
    </>
  );
};

export default Home;
