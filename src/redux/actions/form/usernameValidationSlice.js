import { createSlice } from "@reduxjs/toolkit";
//-----------------------------------------------------------------------------------------------------
//States :
const initialState = {
  signupUsernameError: "",
};
//-----------------------------------------------------------------------------------------------------
//Main function for username validation :
const validateUsername = (username) => {
  const usernameRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return usernameRegx.test(username);
};
//-----------------------------------------------------------------------------------------------------

export const usernameValidationSlice = createSlice({
  name: "usernameValidation",
  initialState,
  reducers: {
    //Validation for sign up username input :
    validateSignupUsername: (state, action) => {
      const username = action.payload.trim();
      if (username === "") {
        state.signupUsernameError = "username is required.";
      } else {
        const isValid = validateUsername(username);
        state.signupUsernameError = isValid
          ? ""
          : "More than 7 char, include char & number";
      }
    },
  },
});

export const { validateSignupUsername } = usernameValidationSlice.actions;

export default usernameValidationSlice.reducer;
