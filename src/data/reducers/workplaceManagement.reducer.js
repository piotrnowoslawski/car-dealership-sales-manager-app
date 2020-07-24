import { ADD_WORKPLACE, EDIT_WORKPLACE, DELETE_WORKPLACE } from "data/constans";

const initialWorkplace = {
  workplace: {},
  error: null,
};

const workplaceManagementReducer = (state = initialWorkplace, action) => {
  switch (action.type) {
    case ADD_WORKPLACE:
      return {
        ...state,
        workplace: action.payload,
      };
    case EDIT_WORKPLACE:
      return {
        ...state,
        workplace: action.payload,
      };
    case DELETE_WORKPLACE:
      return {
        ...state,
        action: action.id,
      };
    default:
      return state;
  }
};

export default workplaceManagementReducer;
