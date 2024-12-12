import axios from "axios";
import { jwtDecode } from "jwt-decode";


export const login = (data,callback) => {
    // post data ke api fake store
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true , res.data.token)
    })
    .catch((err) => {
      callback(false,err)
    });
};


// buat username melalui jwt yg di ambil dr token api
export const getUsername = (token) =>{
  // jwt itu buat merubah username jadi token dan mengembalikanya
  const decoded = jwtDecode(token)
  console.log(decoded)
  return decoded.user
}
