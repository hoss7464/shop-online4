import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupPhoneError : "",
}

const validatePhone = (phone) => {
  if (phone.trim() === "") return true
  const phoneRegx = /^\+?[1-9]\d{7,14}$/;
  return phoneRegx.test(phone)
}


export const phoneValidationSlice = createSlice({
    name : "phoneValidation",
    initialState,
    reducers : {
        validateSignupPhone : (state, action) => {
            const isValid = validatePhone(action.payload)
            state.signupPhoneError = isValid ? "" : "Invalid Phone Number Format"
        },
        clearPhoneValidationErrors : (state) => {
            state.signupPhoneError = ""
        }
    }
})

export const {validateSignupPhone, clearPhoneValidationErrors} = phoneValidationSlice.actions

export default phoneValidationSlice.reducer