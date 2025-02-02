import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUserData: {},
  assesMentRedirectLink: "",
  checkoutRedirect: false,
};

export const loggedInUserSlice = createSlice({
  name: "loggedInUserSlice",
  initialState,
  reducers: {
    setLoggedInUserData: (state, action) => {
      state.loggedInUserData = action.payload;
    },
    setAssesmentRedirect: (state, action) => {
      state.assesMentRedirectLink = action.payload;
    },
    removeAssesmentRedirect: ((state, action) => {
      state.assesMentRedirectLink = "";
    })
  },
});

export const { setLoggedInUserData, setAssesmentRedirect } =
  loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
