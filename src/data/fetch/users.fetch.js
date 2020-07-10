import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "data/constans";

export const getUsers = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_USERS_PENDING,
    });

    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: data,
        })
      )
      .catch((error) =>
        dispatch({
          type: FETCH_USERS_ERROR,
          payload: error,
        })
      );
  };
};
