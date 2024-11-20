import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupEmailError: "",
  signinEmailError: "",
  forgotPasswordEmailError: "",
};

const validateEmail = (email) => {
  if (email.trim() === "") return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const emailValidationSlice = createSlice({
  name: "emailValidation",
  initialState,
  reducers: {
    validateSignupEmail: (state, action) => {
      const isValid = validateEmail(action.payload);
      state.signupEmailError = isValid ? "" : "Invalid Email Format";
    },
    validateSigninEmail: (state, action) => {
      const isValid = validateEmail(action.payload);
      state.signinEmailError = isValid ? "" : "Invalid Email Format";
    },
    validateForgotPasswordEmail: (state, action) => {
      const isValid = validateEmail(action.payload);
      state.forgotPasswordEmailError = isValid ? "" : "Invalid Email Format";
    },
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
