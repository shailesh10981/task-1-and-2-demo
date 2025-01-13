import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // linking the counter slice
  },
});

export default store;
