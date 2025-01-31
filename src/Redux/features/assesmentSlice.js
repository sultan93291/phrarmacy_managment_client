import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asssesMentData: [],
};

export const assesmentSlice = createSlice({
  name: "assesmentSlice",
  initialState,
  reducers: {
    setassesmentData: (state, action) => {
      const newData = action.payload; // New assessment data (must contain a unique 'id')
      const existingIndex = state.asssesMentData.findIndex(
        item => item.id === newData.id
      );

      if (existingIndex !== -1) {
        // Update existing assessment
        state.asssesMentData[existingIndex] = newData;
      } else {
        // Add new assessment
        state.asssesMentData.push(newData);
      }

      // Save updated array to localStorage
      localStorage.setItem(
        "asssesMentData",
        JSON.stringify(state.asssesMentData)
      );
    },

    getAssesmentData: state => {
      const data = localStorage.getItem("asssesMentData");
      state.asssesMentData = data ? JSON.parse(data) : [];
    },

    getAssesmentById: (state, action) => {
      const id = action.payload;
      const data = JSON.parse(localStorage.getItem("asssesMentData")) || [];
      return data.find(item => item.id === id) || null;
    },

    updateAssesmentData: (state, action) => {
      const { id, updatedFields } = action.payload; // id of assessment & fields to update
      const existingIndex = state.asssesMentData.findIndex(
        item => item.id === id
      );

      if (existingIndex !== -1) {
        // Update only the specified fields, keeping other fields intact
        state.asssesMentData[existingIndex] = {
          ...state.asssesMentData[existingIndex],
          ...updatedFields,
        };

        // Save updated array to localStorage
        localStorage.setItem(
          "asssesMentData",
          JSON.stringify(state.asssesMentData)
        );
      }
    },
  },
});

export const {
  setassesmentData,
  getAssesmentData,
  getAssesmentById,
  updateAssesmentData,
} = assesmentSlice.actions;
export default assesmentSlice.reducer;
