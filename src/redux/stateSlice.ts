import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
  width: window.innerWidth,
  scroll: window.scrollY,
};

const stateSlice = createSlice({
  name: "stateManager",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.darkmode = !state.darkmode;
    },
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export default stateSlice.reducer;
export const { setTheme, setWidth, setScroll } = stateSlice.actions;
