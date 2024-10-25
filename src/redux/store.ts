import stateManagerReducer from "./stateSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    stateManager: stateManagerReducer,
  },
});

export default store;
