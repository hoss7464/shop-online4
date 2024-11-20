import { createSlice } from "@reduxjs/toolkit";

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
  retrievePassword : {
    password: "",
    confirmPassword: "",
  }
};

export const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { formName, name, value } = action.payload;
      state[formName][name] = value;
    },
    handlePhoneChange: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { handleChange, handlePhoneChange } = changeSlice.actions;

export default changeSlice.reducer;
