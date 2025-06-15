import { createSlice } from "@reduxjs/toolkit";

// Initial state of Join Team form 
const initialState = {
  joinTeam: {
    fullName: "",
    email: "",
    phNumber: "",
    DOB: "",
    city: "",
    education: "",
    occupation: "",
    reference: "",
    purpose: "",
    govId: "",
    hrs: "",
    exExp: "",
    remoteOrOffice: "",
    limitation: "",
    program: "",
    description: "",
  },
  errors: {
    fullName: null,
    email: null,
    phNumber: null,
    DOB: null,
    city: null,
    education: null,
    occupation: null,
    reference: null,
    purpose: null,
    govId: null,
    hrs: null,
    exExp: null,
    remoteOrOffice: null,
    limitation: null,
    program: null,
    description: null,
  },
  submission: {

  },
  isSubmitted : false
};

export const formSlice = createSlice({
  name: "joinTeam",
  initialState,
  reducers: {
    // function to reset the state 
    resetForm : (state) => {
      state.joinTeam = initialState.joinTeam
    },

    // function  to update each field 
    updateFields: (state, action) => {
      const { field, value } = action.payload; 
      state.joinTeam[field] = value; 
    },

    // function to submit data 
    submitData: (state) => {
      state.submission = state.joinTeam;
      localStorage.setItem("User Form", JSON.stringify(state.submission));
      state.isSubmitted = true
    },

    // validation function to check empty string and email phone validations 
    validations: (state, action) => {
      const { field } = action.payload; 

      const fieldValue = state.joinTeam[field];

      // Regular expression to validate emails 
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // Regular expression to validate phoneNumbers 
      const phRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm;

      // Regular expression to validate Date of birth
      const dobRegex =
        /(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[1,2])(\/|-)(19|20)\d{2}/gm;

      
      if (!fieldValue || fieldValue.trim() === "") {
        state.errors[field] = "This field is required";
      } else {
        state.errors[field] = null;
      }
      if (field === "email") {
        if (!regex.test(fieldValue)) {
          state.errors.email = "Enter a valid email";
        }
      }
      if (field === "phNumber") {
        if (!phRegex.test(fieldValue)) {
          state.errors.phNumber = "Enter a valid number";
        }
      }
      if (field === "DOB") {
        if (!dobRegex.test(fieldValue)) {
          state.errors.DOB = "Enter a valid date of birth";
        }
      }
    },
  },
});

export const { resetForm, updateFields,submitData, validations } = formSlice.actions;
export default formSlice.reducer;
