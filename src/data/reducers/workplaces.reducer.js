import {
  FETCH_WORKPLACES_PENDING,
  FETCH_WORKPLACES_SUCCESS,
  FETCH_WORKPLACES_ERROR,
} from "data/constans";

const initialWorkplaces = {
  pending: false,
  workplaces: [],
  error: null,
};

const workplacesReducer = (state = initialWorkplaces, action) => {
  switch (action.type) {
    case FETCH_WORKPLACES_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_WORKPLACES_SUCCESS:
      return {
        ...state,
        pending: false,
        workplaces: action.payload,
      };

    case FETCH_WORKPLACES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        workplaces: [],
      };

    default:
      return state;
  }
};

export default workplacesReducer;
