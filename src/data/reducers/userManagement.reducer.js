import { ADD_USER, EDIT_USER, DELETE_USER } from "data/constans";

const initialUser = {
  user: {},
  error: null,
};

const userManagementReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        action: action.id,
      };
    default:
      return state;
  }
};

export default userManagementReducer;
