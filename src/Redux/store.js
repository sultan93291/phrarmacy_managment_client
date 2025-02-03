// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./features/loggedInUserSlice";
import assesMentReducer from "./features/assesmentSlice";
import checkOutMedicineReducer from "./features/medicineDetails";
import { apiSlice } from "./features/api/apiSlice"; // Import the API slice

export default configureStore({
  reducer: {
    loggedInuserSlice: loggedUserReducer, // Keep your existing slice
    assesmentSlice: assesMentReducer,
    checkOutMedicineReducer: checkOutMedicineReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // Add the RTK Query API slice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK Query middleware
});
