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
      const isValid = validateEmail(action.payload);
      state.signupEmailError = isValid ? "" : "Invalid Email Format";
    },
    //validation for sign in email : 
    validateSigninEmail: (state, action) => {
      const isValid = validateEmail(action.payload);
      state.signinEmailError = isValid ? "" : "Invalid Email Format";
    },
    //validation for forgotPassword email : 
    validateForgotPasswordEmail: (state, action) => {
      const isValid = validateEmail(action.payload);
      state.forgotPasswordEmailError = isValid ? "" : "Invalid Email Format";
    },
    //To clear the states :
    clearValidationErrors: (state) => {
      state.signupEmailError = "";
      state.signinEmailError = "";
      state.forgotPasswordEmailError = "";
    },
  },
});

export const {
  validateSignupEmail,
  validateSigninEmail,
  validateForgotPasswordEmail,
  clearValidationErrors,
} = emailValidationSlice.actions;

export default emailValidationSlice.reducer;
