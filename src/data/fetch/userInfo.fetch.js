import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "data/constans";

export const getUser = (data) => {
  const api = "https://salty-journey-27131.herokuapp.com/api";
  return (dispatch) => {
    dispatch({
      type: GET_USER_PENDING,
    });

    fetch(`${api}/users/${data}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: GET_USER_SUCCESS,
          payload: data,
        })
      )
      .catch((error) =>
        dispatch({
          type: GET_USER_ERROR,
          payload: error,
        })
      );
  };
};
