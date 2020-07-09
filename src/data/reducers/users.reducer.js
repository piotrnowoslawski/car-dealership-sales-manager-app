import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "data/constans";

const initialUsers = {
  pending: false,
  users: [],
  error: null,
};

function usersReducer(state = initialUsers, action) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload,
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
}

export default usersReducer;
