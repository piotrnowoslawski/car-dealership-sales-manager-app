import { ADD_USER, EDIT_USER, DELETE_USER } from "data/constans";

export const addUser = (data, history) => {
  return (dispatch) => {
    const port = 3001;
    fetch(`http://localhost:${port}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response)
      .then((id) =>
        dispatch({
          type: ADD_USER,
          payload: id,
        })
      )
      .then(() => history.push(`/dashboard/users/${data.id}`));
  };
};

export const editUser = (data, history) => {
  console.log(data);
  return (dispatch) => {
    const port = 3001;
    fetch(`http://localhost:${port}/users/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response)
      .then((id) =>
        dispatch({
          type: EDIT_USER,
          payload: id,
        })
      )
      .then(() => history.push(`/dashboard/users/${data.id}`));
  };
};

export const deleteUser = (data, history) => {
  return (dispatch) => {
    const port = 3001;
    fetch(`http://localhost:${port}/users/${data}`, {
      method: "DELETE",
      body: JSON.stringify({ data }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response)
      .then((id) =>
        dispatch({
          type: DELETE_USER,
          payload: id,
        })
      )
      .then(() => history.push(`/dashboard/users`));
  };
};
