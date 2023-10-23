import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  initialState,
  name: "icecreams",
  reducers: {
    orderCreams: (state) => {
      state.numberOfIcecreams--;
    },
    stockCreams: (state, action) => {
      state.numberOfIcecreams += action.payload;
    },
  },
});
export default icecreamSlice.reducer;
export const { orderCreams, stockCreams } = icecreamSlice.actions;
