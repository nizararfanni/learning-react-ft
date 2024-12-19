import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "./slice/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("oncreate STORE :", store.getState());

store.subscribe(() => {
  console.log("on change store ;", store.getState());
});

export default store;
