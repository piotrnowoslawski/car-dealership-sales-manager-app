import { ADD_WORKPLACE, EDIT_WORKPLACE, DELETE_WORKPLACE } from "data/constans";

export const addWorkplace = (workplace) => {
  return {
    type: ADD_WORKPLACE,
    workplace,
  };
};

export const editWorkplace = (workplace) => {
  return {
    type: EDIT_WORKPLACE,
    workplace,
  };
};

export const deleteWorkplace = (id) => {
  return {
    type: DELETE_WORKPLACE,
    id,
  };
};
