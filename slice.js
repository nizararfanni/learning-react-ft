import { createSlice, configureStore } from "@reduxjs/toolkit";

// buat cart reducer
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// cek state
console.log("oncreate STORE :", store.getState());

// subcribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch store
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 5 }));
