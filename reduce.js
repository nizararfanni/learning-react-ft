import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  // inisialisasi state di dalam parameter
  state = {
    cart: [
      {
        id: 1,
        qty: 10,
      },
    ],
  },
  //   action dr state
  action
) => {
  // pake switch kondision dengan type addtocart
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store atau wadah state
const store = legacy_createStore(cartReducer);
console.log("onclick store :", store.getState());

// susbcribe untuk melihat perubahan yg di lakukan  di dispacth
store.subscribe(() => {
  console.log("store_change :", store.getState());
});

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 10 } };
store.dispatch(action2);
