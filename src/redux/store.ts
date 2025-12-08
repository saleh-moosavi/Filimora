import toastSlice from "./ToastSlice";
import windowSlice from "./WindowSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    toastSlice: toastSlice,
    windowSlice: windowSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
