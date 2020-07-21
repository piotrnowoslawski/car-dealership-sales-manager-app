import {
  FETCH_WORKPLACES_PENDING,
  FETCH_WORKPLACES_SUCCESS,
  FETCH_WORKPLACES_ERROR,
} from "data/constans";

export const fetchUsersPending = () => ({
  type: FETCH_WORKPLACES_PENDING,
});

export const fetchUsersSuccess = (workplaces) => ({
  type: FETCH_WORKPLACES_SUCCESS,
  payload: workplaces,
});

export const fetchUsersError = (error) => ({
  type: FETCH_WORKPLACES_ERROR,
  payload: error,
});
