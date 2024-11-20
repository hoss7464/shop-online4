import { createSlice } from "@reduxjs/toolkit";
//------------------------------------------------------------------------------------------------------
//States : 
const initialState = {
  signupPhoneError : "",
}
//------------------------------------------------------------------------------------------------------
//Main function for phone validation : 
const validatePhone = (phone) => {
  if (phone.trim() === "") return true
  const phoneRegx = /^\+?[1-9]\d{7,14}$/;
  return phoneRegx.test(phone)
}
//------------------------------------------------------------------------------------------------------

export const phoneValidationSlice = createSlice({
    name : "phoneValidation",
    initialState,
    reducers : {
      //Validation for sign up phone input :
        validateSignupPhone : (state, action) => {
            const isValid = validatePhone(action.payload)
            state.signupPhoneError = isValid ? "" : "Invalid Phone Number Format"
        },
        //To clear phone states :
        clearPhoneValidationErrors : (state) => {
            state.signupPhoneError = ""
        }
    }
})

export const {validateSignupPhone, clearPhoneValidationErrors} = phoneValidationSlice.actions

export default phoneValidationSlice.reducer