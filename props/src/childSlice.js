// childSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialMoneyState = {
  firstChildMoney: 0,
  secondChildMoney: 0,
};

const childMoneySlice = createSlice({
  name: "childMoney",
  initialState: initialMoneyState,
  reducers: {
    giveMoney: (state, action) => {
      if (action.payload.child === "firstChild") {
        state.firstChildMoney += action.payload.amount;
      } else if (action.payload.child === "secondChild") {
        state.secondChildMoney += action.payload.amount;
      }
    },
  },
});

export const { giveMoney } = childMoneySlice.actions;

export default childMoneySlice.reducer;
