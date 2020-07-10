import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "data/constans";

export const getUserPending = (id) => ({
  type: GET_USER_PENDING,
  id,
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserError = (error) => ({
  type: GET_USER_ERROR,
  payload: error,
});
