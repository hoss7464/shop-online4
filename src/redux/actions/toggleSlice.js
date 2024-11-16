import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggles: {
      sidebar: false,
    },
  },
  reducers: {
    clickToggle: (state, action) => {
      const toggleKey = action.payload;
      state.toggles[toggleKey] = !state.toggles[toggleKey];
    },
    hoverEnableToggle : (state, action) => {
      const id = action.payload
      state.toggles[id] = true
    },
    hoverDisableToggle : (state, action) => {
      const id = action.payload
      state.toggles[id] = false
    }
  },
});

export const { clickToggle, hoverEnableToggle, hoverDisableToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
