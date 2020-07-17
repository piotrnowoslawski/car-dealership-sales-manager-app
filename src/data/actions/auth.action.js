import {
  USERS_LOGIN_PENDING,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
  LOGOUT,
} from "data/constans";
import { userLogin, userLogout } from "data/fetch/login.fetch";
import { alertError } from "data/actions/alert.actions";

export const login = (username, password, history) => {
  return (dispatch) => {
    dispatch(request({ username }));

    userLogin(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/dashboard");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertError(error));
      }
    );
  };

  function request(user) {
    return { type: USERS_LOGIN_PENDING, user };
  }
  function success(user) {
    return { type: USERS_LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: USERS_LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  userLogout();
  return { type: LOGOUT };
};
