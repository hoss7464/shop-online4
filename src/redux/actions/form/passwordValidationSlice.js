import { createSlice } from "@reduxjs/toolkit";
//---------------------------------------------------------------------------------------------------
//States :
const initialState = {
  signupPasswordValidation: "",
  retrievePasswordValidation: "",
  signupConfirmPasswordValidation: "",
  retrieveConfirmPasswordValidation: "",
  signinPasswordValidation: ""
};
//---------------------------------------------------------------------------------------------------
//Main function for password valiation :
const validatePassword = (password) => {
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
      const password = action.payload.trim();
      if (password === "") {
        state.signupPasswordValidation = "Password is required.";
      } else {
        const isValid = validatePassword(password);
        state.signupPasswordValidation = isValid
          ? ""
          : "at least 8 char : at least has char, num";
      }
    },
    //Validation for retrieve password :
    validateRetrievePassword: (state, action) => {
      const password = action.payload.trim();
      if (password === "") {
        state.retrievePasswordValidation = "Password is required.";
      } else {
        const isValid = validatePassword(password);
        state.retrievePasswordValidation = isValid
          ? ""
          : "at least 8 char : at least has char, num";
      }
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
    validateSigninPassword : (state, action) => {
      const password = action.payload.trim()
      if (password === "") {
        state.signinPasswordValidation = "Password is required."
      }
    }
    
  },
});

export const {
  validateSignupPassword,
  validateRetrievePassword,
  validateSignupConfirmPassword,
  validateRetrieveConfirmPassword,
  validateSigninPassword
} = passwordValidationSlice.actions;

export default passwordValidationSlice.reducer;
