import { ADD_WORKPLACE, EDIT_WORKPLACE, DELETE_WORKPLACE } from "data/constans";

export const addWorkplace = (data, history) => {
  return (dispatch) => {
    fetch(`${API}/workplace`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // history.push(`/dashboard/users/${data._id}`);
        dispatch({
          type: ADD_WORKPLACE,
          payload: data,
        });
      });
  };
};

export const editWorkplace = (data, history) => {
  return (dispatch) => {
    fetch(`${API}/workplace/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // history.push(`/dashboard/workplace/${data._id}`);
        dispatch({
          type: EDIT_WORKPLACE,
          payload: data,
        });
      });
  };
};

export const deleteWorkplace = (data, history) => {
  return (dispatch) => {
    fetch(`${API}/workplace/${data}`, {
      method: "DELETE",
      body: JSON.stringify({ data }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res)
      .then((data) =>
        dispatch({
          type: DELETE_WORKPLACE,
          payload: data,
        })
      );
    //   .then(() => history.push(`/dashboard/workplace`));
  };
};
