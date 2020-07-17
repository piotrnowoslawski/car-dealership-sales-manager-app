import {
  API,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "data/constans";

export const getUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_PENDING,
    });

    fetch(`${API}/users/${data}`)
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
