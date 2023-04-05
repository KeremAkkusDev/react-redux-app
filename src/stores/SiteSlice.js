import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: "site",
  initialState: {
    dark: false,
    language: "TR",
  },
  reducers: {
    themeChange: (state) => {
      state.dark = !state.dark;
    },
    languageChange: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { themeChange, languageChange } = siteSlice.actions;
export default siteSlice.reducer;
