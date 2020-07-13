import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "data/constans";

export const getUsers = () => {
  const api = "https://salty-journey-27131.herokuapp.com/api";
  return (dispatch) => {
    dispatch({
      type: FETCH_USERS_PENDING,
    });

    fetch(`${api}/users`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_USERS_ERROR,
          payload: error,
        })
      );
  };
};
