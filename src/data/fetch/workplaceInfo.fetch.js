import {
  API,
  GET_WORKPLACE_PENDING,
  GET_WORKPLACE_SUCCESS,
  GET_WORKPLACE_ERROR,
} from "data/constans";

export const getWorkplace = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_WORKPLACE_PENDING,
    });

    fetch(`${API}/workplace/${data}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: GET_WORKPLACE_SUCCESS,
          payload: data,
        })
      )
      .catch((error) =>
        dispatch({
          type: GET_WORKPLACE_ERROR,
          payload: error,
        })
      );
  };
};
