import axios from "axios";

export const login = (data) => {
  axios
    .post("'https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
