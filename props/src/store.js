// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPapaMoney = 0;

const papaMoneySlice = createSlice({
  name: "papaMoney",
  initialState: initialPapaMoney,
  reducers: {
    increaseSalary: (state, action) => {
      state += action.payload;
    },
    decreaseSalary: (state, action) => {
      state -= action.payload;
    },
  },
});

export const { increaseSalary, decreaseSalary } = papaMoneySlice.actions;

export default configureStore({
  reducer: {
    papaMoney: papaMoneySlice.reducer,
  },
});
