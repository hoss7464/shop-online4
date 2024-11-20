import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupPasswordValidation: "",
  retrievePasswordValidation: "",
  signupConfirmPasswordValidation: "",
  retrieveConfirmPasswordValidation: "",
};

const validatePassword = (password) => {
  if (password.trim() === "") return true;
  const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegx.test(password);
};

export const passwordValidationSlice = createSlice({
  name: "passwordValidation",
  initialState,
  reducers: {
    validateSignupPassword: (state, action) => {
      const isValid = validatePassword(action.payload);
      state.signupPasswordValidation = isValid
        ? ""
        : "at least 8 char : at least has char, num";
    },
    validateRetrievePassword: (state, action) => {
      const isValid = validatePassword(action.payload);
      state.retrievePasswordValidation = isValid
        ? ""
        : "at least 8 char : at least has char, num";
    },
    validateSignupConfirmPassword: (state, action) => {
      const { password, confirmPassword } = action.payload;
      state.signupConfirmPasswordValidation =
        password === confirmPassword ? "" : "Password doesn't match.";
    },
    validateRetrieveConfirmPassword: (state, action) => {
      const { password, confirmPassword } = action.payload;
      state.retrieveConfirmPasswordValidation =
        password === confirmPassword ? "" : "Password doesn't match.";
    },
    clearValidationErrors: (state) => {
      state.signupPasswordValidation = "";
      state.retrievePasswordValidation = "";
      state.signupConfirmPasswordValidation = "";
      state.retrieveConfirmPasswordValidation = "";
    },
  },
});

export const {
  validateSignupPassword,
  validateRetrievePassword,
  validateSignupConfirmPassword,
  validateRetrieveConfirmPassword,
  clearValidationErrors,
} = passwordValidationSlice.actions;

export default passwordValidationSlice.reducer;
