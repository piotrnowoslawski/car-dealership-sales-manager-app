import {
  USERS_LOGIN_PENDING,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
  LOGOUT,
} from "data/constans";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOGIN_PENDING:
      return {
        loggingIn: true,
        user: action.user,
      };
    case USERS_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case USERS_LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
