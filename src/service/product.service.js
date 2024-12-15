import axios from "axios";
// callback
export const getProduct = (call) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      call(res.data)
    })
    .catch((err) => {
      console.error(err);
    });
};
export const getDetailProduct = (id,call) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      call(res.data)
    })
    .catch((err) => {
      console.error(err);
    });
};
