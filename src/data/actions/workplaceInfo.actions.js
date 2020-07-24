import {
  GET_WORKPLACE_PENDING,
  GET_WORKPLACE_SUCCESS,
  GET_WORKPLACE_ERROR,
} from "data/constans";

export const getWorkplacePending = (id) => ({
  type: GET_WORKPLACE_PENDING,
  id,
});

export const getWorkplaceSuccess = (workplace) => ({
  type: GET_WORKPLACE_SUCCESS,
  payload: workplace,
});

export const getWorkplaceError = (error) => ({
  type: GET_WORKPLACE_ERROR,
  payload: error,
});
