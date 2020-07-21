import {
  API,
  FETCH_WORKPLACES_PENDING,
  FETCH_WORKPLACES_SUCCESS,
  FETCH_WORKPLACES_ERROR,
} from "data/constans";

export const getWorkplaces = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WORKPLACES_PENDING,
    });

    fetch(`${API}/workplace`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_WORKPLACES_SUCCESS,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_WORKPLACES_ERROR,
          payload: error,
        })
      );
  };
};
