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
  assesmentData: loadFromLocalStorage(),
  isAssesMent: {
    assesmentId: "",
    assesmentResult: false, // Initialize as false for clarity
  },
  medicineId: "",
  assesMentId: "",
};

export const assesmentSlice = createSlice({
  name: "assesmentSlice",
  initialState,
  reducers: {
    setAssesmentData: (state, action) => {
      state.assesmentData = loadFromLocalStorage();
      const newData = action.payload;
      const existingIndex = state.assesmentData.findIndex(
        item => item.id === newData.id
      );

      if (existingIndex !== -1) {
        state.assesmentData[existingIndex] = newData;
      } else {
        state.assesmentData.push(newData);
      }

      saveToLocalStorage(state.assesmentData);
    },

    getAssesmentData: (state, action) => {
      state.assesmentData = loadFromLocalStorage();
      const id = action.payload;
      return state.assesmentData.find(item => item.id === id) || null;
    },

    isIdPresent: (state, action) => {
      const assesmentData = loadFromLocalStorage();
      const { id } = action.payload;
      const found = assesmentData.find(item => item.id === id);
      if (found) {
        state.isAssesMent.assesmentId = found.id; // Fixed: Use 'found' instead of 'item'
        state.isAssesMent.assesmentResult = true;
      } else {
        state.isAssesMent.assesmentId = null;
        state.isAssesMent.assesmentResult = false;
      }
    },

    clearAssesmentData: state => {
      state.assesmentData = [];
      localStorage.removeItem("assesmentData");
    },

    storeMedicineId: (state, action) => {
      const { id, assesMentId } = action.payload;
      state.medicineId = id || state.medicineId;
      state.assesMentId = assesMentId || state.assesMentId || "";
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
