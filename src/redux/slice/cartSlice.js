import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("card")) || [],
  },
  reducers: {
    ADD_TO_CART: (state, action) => {
      // kondisi jika ada id yang sama maka di tambah
      const sameItem = state.data.find((item) => item.id === action.payload.id);

      if (sameItem) {
        sameItem.qty++;
      } else {
        // mengakses state data langsung
        state.data.push(action.payload);
      }
    },
  },
});

export const { ADD_TO_CART } = cartSlice.actions;
// export default reducer
export default cartSlice.reducer;
