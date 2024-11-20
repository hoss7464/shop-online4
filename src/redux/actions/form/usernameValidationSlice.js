import { createSlice } from "@reduxjs/toolkit";
//-----------------------------------------------------------------------------------------------------
//States :
const initialState = {
    signupUsernameError : ""
}
//-----------------------------------------------------------------------------------------------------
//Main function for username validation :
const validateUsername = (username) => {
  if (username.trim() === "") return true
  const usernameRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return usernameRegx.test(username)
}
//-----------------------------------------------------------------------------------------------------

export const  usernameValidationSlice = createSlice({
    name : "usernameValidation",
    initialState,
    reducers : {
      //Validation for sign up username input : 
      validateSignupUsername : (state, action) => {
        const isValid = validateUsername(action.payload)
        state.signupUsernameError = isValid ? "" : "More than 7 char, include char & number"
      },
      //To clear the states : 
      clearUsernameValidationErrors : (state) => {
        state.signupUsernameError = ""
      }
    }
})

export const {validateSignupUsername, clearUsernameValidationErrors} = usernameValidationSlice.actions

export default usernameValidationSlice.reducer