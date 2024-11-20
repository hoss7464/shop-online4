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
  retrievePassword : {
    password: "",
    confirmPassword: "",
  }
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
      state.phone = action.payload;
    },
  },
});

export const { handleChange, handlePhoneChange } = changeSlice.actions;

export default changeSlice.reducer;
