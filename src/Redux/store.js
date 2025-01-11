import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./features/loggedInUserSlice";

export default configureStore({
  reducer: {
    loggedInuserSlice: loggedUserReducer,
  },
});
