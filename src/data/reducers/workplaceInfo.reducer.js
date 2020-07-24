import {
  GET_WORKPLACE_PENDING,
  GET_WORKPLACE_SUCCESS,
  GET_WORKPLACE_ERROR,
} from "data/constans";

const initialWorkplace = {
  pending: false,
  workplace: {},
  error: null,
};

const workplaceInfoReducer = (state = initialWorkplace, action) => {
  switch (action.type) {
    case GET_WORKPLACE_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case GET_WORKPLACE_SUCCESS:
      return {
        ...state,
        pending: false,
        workplace: action.payload,
      };

    case GET_WORKPLACE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        workplace: {},
      };

    default:
      return state;
  }
};

export default workplaceInfoReducer;
