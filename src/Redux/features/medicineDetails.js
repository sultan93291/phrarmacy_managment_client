import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const savedData = localStorage.getItem("checkOutMedicine");
  return savedData ? JSON.parse(savedData) : [];
};

const getInitialRoyalMail = () => {
  const savedData = localStorage.getItem("mailTrack");
  return savedData ? JSON.parse(savedData) : {};
};

const initialState = {
  checkOutMedicineDetials: getInitialState(),
  royalMail: getInitialRoyalMail(),
};

export const checkOutMedicineDetialsSlice = createSlice({
  name: "checkOutMedicineDetialsSlice",
  initialState,
  reducers: {
    addMedicineToCheckout: (state, action) => {
      const existingMedicineIndex = state.checkOutMedicineDetials.findIndex(
        medicine => medicine.medicine_id === action.payload.medicine_id
      );

      if (existingMedicineIndex !== -1) {
        // Update existing medicine
        state.checkOutMedicineDetials[existingMedicineIndex] = action.payload;
      } else {
        // Add new medicine
        state.checkOutMedicineDetials.push(action.payload);
      }

      localStorage.setItem(
        "checkOutMedicine",
        JSON.stringify(state.checkOutMedicineDetials)
      );
    },
    removeMedicineFromCheckout: (state, action) => {
      const idToRemove = action.payload;
      state.checkOutMedicineDetials = state.checkOutMedicineDetials.filter(
        medicine => medicine.medicine_id !== idToRemove
      );
      localStorage.setItem(
        "checkOutMedicine",
        JSON.stringify(state.checkOutMedicineDetials)
      );
    },
    clearCheckout: state => {
      state.checkOutMedicineDetials = [];
      localStorage.removeItem("checkOutMedicine");
    },
    addRoyalMailServiceData: (state, action) => {
      const { isRoyalMail, OptionValue } = action.payload;
      const RoyalMailData = {
        isRoyalMail,
        OptionValue,
      };
      localStorage.setItem("mailTrack", JSON.stringify(RoyalMailData));
    },
    removeMailServiceData: state => {
      localStorage.removeItem("mailTrack");
    },
  },
});

export const {
  addMedicineToCheckout,
  removeMedicineFromCheckout,
  clearCheckout,
  addRoyalMailServiceData,
  removeMailServiceData,
} = checkOutMedicineDetialsSlice.actions;

export default checkOutMedicineDetialsSlice.reducer;
