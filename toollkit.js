import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { act } from "react";

// Buat action untuk menambah barang ke keranjang
const addToCart = createAction("ADD_TO_CART");

// Buat cart reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload); // Mengakses state langsung karena state adalah array
  });
});

// action login
const login = createAction("LOGIN");
// buat login reducer
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// Buat store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
// cek state
console.log("oncreate store :", store.getState());
console.log("oncreate login :", store.getState());

// Subscribe untuk memantau perubahan di store
store.subscribe(() => {
  console.log("store_change : ", store.getState());
});
// Subscribe untuk memantau perubahan di login
store.subscribe(() => {
  console.log("login_change : ", store.getState());
});

// Dispatch aksi untuk menambah barang ke keranjang
store.dispatch(addToCart({ id: 2, qty: 20 }));

// dispatch aksi untuk login
store.dispatch(login());
