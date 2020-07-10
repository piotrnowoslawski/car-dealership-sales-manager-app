import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "data/constans";

const initialUser = {
  pending: false,
  user: {},
  error: null,
};

const userInfoReducer = (state = initialUser, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        user: {},
      };

    default:
      return state;
  }
};

export default userInfoReducer;
