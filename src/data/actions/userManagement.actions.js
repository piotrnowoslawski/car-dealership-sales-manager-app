import { ADD_USER, EDIT_USER, DELETE_USER } from "data/constans";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};
