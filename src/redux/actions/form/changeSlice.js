import { createSlice } from "@reduxjs/toolkit";
//----------------------------------------------------------------------------------------------
//States :
const initialState = {
  signup: {
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  },
  signin: {
    email: "",
    password: "",
  },
  forgotPassword: {
    email: "",
  },
  retrievePassword: {
    password: "",
    confirmPassword: "",
  },
};
//----------------------------------------------------------------------------------------------

export const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    //onchange function for inputs :
    handleChange: (state, action) => {
      const { formName, name, value } = action.payload;
      state[formName][name] = value;
    },
    //onchange function for phone input :
    handlePhoneChange: (state, action) => {
      const phoneValue = action.payload.trim();
      state.signup.phone = phoneValue.startsWith("+")
        ? phoneValue
        : `+${phoneValue}`;
    },
    //reset signup fields :
    resetSignupForm: (state) => {
      state.signup = {
        email: "",
        fullname: "",
        phone: "",
        password: "",
        confirmPassword: "",
      };
    },
    //reset sign in fields :
    resetSigninForm: (state) => {
      state.signin = {
        email: "",
        password: "",
      };
    },
    //reset forgot password field :
    resetForgotPsswordForm: (state) => {
      state.forgotPassword = {
        email: "",
      };
    },
    //reset retrieve password fields:
    resetRetievePasswordForm: (state) => {
      state.retrievePassword = {
        password: "",
        confirmPassword: "",
      };
    },
  },
});

export const {
  handleChange,
  handlePhoneChange,
  resetSignupForm,
  resetSigninForm,
  resetForgotPsswordForm,
  resetRetievePasswordForm
} = changeSlice.actions;

export default changeSlice.reducer;
