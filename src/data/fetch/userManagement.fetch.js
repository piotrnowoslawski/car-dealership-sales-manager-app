import { ADD_USER, EDIT_USER, DELETE_USER } from "data/constans";
const api = "https://salty-journey-27131.herokuapp.com/api";

export const addUser = (data, history) => {
  return (dispatch) => {
    fetch(`${api}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push(`/dashboard/users/${data._id}`);
        dispatch({
          type: ADD_USER,
          payload: data,
        });
      });
  };
};

export const editUser = (data, history) => {
  return (dispatch) => {
    fetch(`${api}/users/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push(`/dashboard/users/${data._id}`);
        dispatch({
          type: EDIT_USER,
          payload: data,
        });
      });
  };
};

export const deleteUser = (data, history) => {
  return (dispatch) => {
    fetch(`${api}/users/${data}`, {
      method: "DELETE",
      body: JSON.stringify({ data }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res)
      .then((data) =>
        dispatch({
          type: DELETE_USER,
          payload: data,
        })
      )
      .then(() => history.push(`/dashboard/users`));
  };
};
