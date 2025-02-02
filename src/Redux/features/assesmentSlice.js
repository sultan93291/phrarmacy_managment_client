import { createSlice } from "@reduxjs/toolkit";

// Utility Functions for localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("assesmentData");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return [];
  }
};

const saveToLocalStorage = data => {
  try {
    localStorage.setItem("assesmentData", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const initialState = {
  assesmentData: loadFromLocalStorage(), // Load data from localStorage on init,
  isAssesMent: {
    assesmentId: "",
    assesmentResult: "",
  },
  medicineId: "",
  assesMentId: "",
};

export const assesmentSlice = createSlice({
  name: "assesmentSlice",
  initialState,
  reducers: {
    // Add or update assessment data
    setAssesmentData: (state, action) => {
      state.assesmentData = loadFromLocalStorage(); // Sync with localStorage before updating

      const newData = action.payload; // Must contain a unique 'id'
      const existingIndex = state.assesmentData.findIndex(
        item => item.id === newData.id
      );

      if (existingIndex !== -1) {
        // Update existing data
        state.assesmentData[existingIndex] = newData;
      } else {
        // Add new data
        state.assesmentData.push(newData);
      }

      saveToLocalStorage(state.assesmentData); // Save updated data
    },

    // Get assessment data by ID
    getAssesmentData: (state, action) => {
      state.assesmentData = loadFromLocalStorage(); // Ensure latest data
      const id = action.payload;
      return state.assesmentData.find(item => item.id === id) || null;
    },

    // Check if an ID exists
    isIdPresent: (state, action) => {
      const assesmentData = loadFromLocalStorage(); // ✅ No draft mutation
      const { id } = action.payload;
      assesmentData.find(item => {
        if (item.id === id) {
          state.isAssesMent.assesmentId = item.id;
          state.isAssesMent.assesmentResult = true;
          return true;
        } else {
          state.isAssesMent.assesmentId = null;
          state.isAssesMent.assesmentResult = false;
        }
      });
    },
    // Clear all assessment data (optional)
    clearAssesmentData: state => {
      state.assesmentData = [];
      localStorage.removeItem("assesmentData");
    },
    storeMedicineId: (state, action) => {
      const { id, assesMentId } = action.payload;
      state.medicineId = id;
      state.assesMentId = assesMentId;
    },
  },
});

export const {
  setAssesmentData,
  getAssesmentData,
  isIdPresent,
  clearAssesmentData,
  storeMedicineId,
} = assesmentSlice.actions;

export default assesmentSlice.reducer;
