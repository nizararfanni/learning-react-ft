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
    cart: cartSlice,
  },
});

// dispatch store
store.dispatch(cartSlice.action.addToCart({ id: 1, qty: 5 }));
