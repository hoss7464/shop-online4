import { createSlice } from "@reduxjs/toolkit";
//------------------------------------------------------------------------------------------------------
//States :
const initialState = {
  signupPhoneError: "",
};
//------------------------------------------------------------------------------------------------------
//Main function for phone validation :
const validatePhone = (phone) => {
  const phoneRegx = /^\+?[1-9]\d{7,14}$/;
  return phoneRegx.test(phone);
};
//------------------------------------------------------------------------------------------------------

export const phoneValidationSlice = createSlice({
  name: "phoneValidation",
  initialState,
  reducers: {
    //Validation for sign up phone input :
    validateSignupPhone: (state, action) => {
      const phone = action.payload.trim();
      if (phone === "") {
        state.signupPhoneError = "Phone is required.";
      } else {
        const isValid = validatePhone(phone);
        state.signupPhoneError = isValid ? "" : "Invalid Phone Number Format";
      }
    },
  },
});

export const { validateSignupPhone } = phoneValidationSlice.actions;

export default phoneValidationSlice.reducer;
