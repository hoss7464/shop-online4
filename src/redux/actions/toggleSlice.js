import { createSlice } from "@reduxjs/toolkit";
//-------------------------------------------------------------------------------------------------------

export const toggleSlice = createSlice({
  name: "toggle",
  //States : 
  initialState: {
    toggles: {
      sidebar: false,
    },
  },
  reducers: {
    //Toggle function on click :
    clickToggle: (state, action) => {
      const toggleKey = action.payload;
      state.toggles[toggleKey] = !state.toggles[toggleKey];
    },
    //Toggle function on hover :
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
