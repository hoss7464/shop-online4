import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../actions/toggleSlice";
import changeReducer from "../actions/form/changeSlice";
import emailValidationReducer from "../actions/form/emailValidationSlice";
import usernameValidationReducer from "../actions/form/usernameValidationSlice"
import phoneValidationReducr from "../actions/form/phoneValidationSlice"
import passwordValidationReducer from "../actions/form/passwordValidationSlice"
import purchaseReducer from "../actions/purchase/purchaseSlice"
//----------------------------------------------------------------------------------------------

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    change: changeReducer,
    emailValidation: emailValidationReducer,
    usernameValidation : usernameValidationReducer,
    phoneValidation : phoneValidationReducr,
    passwordValidation : passwordValidationReducer,
    purchase : purchaseReducer,
  },
});
