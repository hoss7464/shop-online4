import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../actions/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
