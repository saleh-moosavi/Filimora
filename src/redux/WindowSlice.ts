import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
  width: window.innerWidth,
  scroll: window.scrollY,
};

const windowSlice = createSlice({
  name: "windowSlice",
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

export default windowSlice.reducer;
export const { setTheme, setWidth, setScroll } = windowSlice.actions;
