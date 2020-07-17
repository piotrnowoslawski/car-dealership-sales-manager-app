import { API } from "data/constans";

export const userLogin = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: username, password: password }),
  };

  return fetch(`${API}/account/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
};

export function userLogout() {
  localStorage.removeItem("user");
  return fetch(`${API}/account/logout`);
}

function handleResponse(res) {
  return res.json().then((data) => {
    if (!res.ok) {
      if (res.status === 401) {
        userLogout();
        window.location.reload(true);
      }
      const error = data && data.error;
      return Promise.reject(error);
    }

    return data;
  });
}
