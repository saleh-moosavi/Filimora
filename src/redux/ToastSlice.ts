import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  text: string;
  isVisible: boolean;
  mode: "SUCCESS" | "ERROR" | "WARNING";
}

const initialState: IState = {
  text: "",
  isVisible: false,
  mode: "SUCCESS",
};

const toastSlice = createSlice({
  name: "toastSlice",
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<IState>) => {
      state.isVisible = action.payload.isVisible;
      state.text = action.payload.text;
      state.mode = action.payload.mode;
    },
  },
});

export default toastSlice.reducer;
export const { setToast } = toastSlice.actions;
