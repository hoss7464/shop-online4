import { createSlice } from "@reduxjs/toolkit";
//------------------------------------------------------------------------------------------------
//States :
const initialState = {
  signupEmailError: "",
  signinEmailError: "",
  forgotPasswordEmailError: "",
};
//------------------------------------------------------------------------------------------------
//Main email validation function
const validateEmail = (email) => {
  if (email.trim() === "") return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
//------------------------------------------------------------------------------------------------

const emailValidationSlice = createSlice({
  name: "emailValidation",
  initialState,
  reducers: {
    //validation for sign up email :
    validateSignupEmail: (state, action) => {
      const email = action.payload.trim();
      if (email === "") {
        state.signupEmailError = "Email is required.";
      } else {
        const isValid = validateEmail(email);
        state.signupEmailError = isValid ? "" : "Invalid email format.";
      }
    },
    //validation for sign in email :
    validateSigninEmail: (state, action) => {
      const email = action.payload.trim();
      if (email === "") {
        state.signinEmailError = "Email is required.";
      } else {
        const isValid = validateEmail(email);
        state.signinEmailError = isValid ? "" : "Invalid email format.";
      }
    },
    //validation for forgotPassword email :
    validateForgotPasswordEmail: (state, action) => {
      const email = action.payload.trim();
      if (email === "") {
        state.forgotPasswordEmailError = "Email is required.";
      } else {
        const isValid = validateEmail(email);
        state.forgotPasswordEmailError = isValid ? "" : "Invalid email format.";
      }
    },
  },
});

export const {
  validateSignupEmail,
  validateSigninEmail,
  validateForgotPasswordEmail,
} = emailValidationSlice.actions;

export default emailValidationSlice.reducer;
