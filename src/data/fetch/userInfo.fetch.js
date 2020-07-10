import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "data/constans";

export const getUser = (data) => {
  const port = 3001;
  return (dispatch) => {
    dispatch({
      type: GET_USER_PENDING,
    });

    fetch(`http://localhost:${port}/users/${data}`)
      .then((response) => response.json())
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
