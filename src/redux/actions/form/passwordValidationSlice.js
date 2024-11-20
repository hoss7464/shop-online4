import { createSlice } from "@reduxjs/toolkit";
//---------------------------------------------------------------------------------------------------
//States : 
const initialState = {
  signupPasswordValidation: "",
  retrievePasswordValidation: "",
  signupConfirmPasswordValidation: "",
  retrieveConfirmPasswordValidation: "",
};
//---------------------------------------------------------------------------------------------------
//Main function for password valiation :
const validatePassword = (password) => {
  if (password.trim() === "") return true;
  const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegx.test(password);
};
//---------------------------------------------------------------------------------------------------

export const passwordValidationSlice = createSlice({
  name: "passwordValidation",
  initialState,
  reducers: {
    //Validation for sign up password : 
    validateSignupPassword: (state, action) => {
      const isValid = validatePassword(action.payload);
      state.signupPasswordValidation = isValid
        ? ""
        : "at least 8 char : at least has char, num";
    },
    //Validation for retrieve password : 
    validateRetrievePassword: (state, action) => {
      const isValid = validatePassword(action.payload);
      state.retrievePasswordValidation = isValid
        ? ""
        : "at least 8 char : at least has char, num";
    },
    //Validation for sign up confirm password : 
    validateSignupConfirmPassword: (state, action) => {
      const { password, confirmPassword } = action.payload;
      state.signupConfirmPasswordValidation =
        password === confirmPassword ? "" : "Password doesn't match.";
    },
    //Validation for retrieve confirm password : 
    validateRetrieveConfirmPassword: (state, action) => {
      const { password, confirmPassword } = action.payload;
      state.retrieveConfirmPasswordValidation =
        password === confirmPassword ? "" : "Password doesn't match.";
    },
    //To clear the states : 
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
