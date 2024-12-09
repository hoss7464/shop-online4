import { createSlice } from "@reduxjs/toolkit";

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    selectedProducts: JSON.parse(localStorage.getItem("selectedProducts")) || [],
    selectedDetailProduct: JSON.parse(localStorage.getItem("selectedDetailProduct")) || null,
  },
  reducers: {
    addSelectedProduct: (state, action) => {
      state.selectedProducts.push({
        ...action.payload,
        quantity: 1,
        basePrice: action.payload.price,
      });
      // Save updated state to local storage
      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
    },
    increaseQuantity: (state, action) => {
      const product = state.selectedProducts.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity += 1;
        product.price = product.basePrice * product.quantity;
        // Save updated state to local storage
        localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.selectedProducts.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.price = product.basePrice * product.quantity;
        // Save updated state to local storage
        localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
      }
    },
    removeSelectedProduct: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload
      );
      // Save updated state to local storage
    localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
    },
    setSelectedDetailProduct: (state, action) => {
      state.selectedDetailProduct = action.payload;
      // Save selected detail product to local storage
      localStorage.setItem("selectedDetailProduct", JSON.stringify(action.payload));
    },
  },
});

export const {
  addSelectedProduct,
  increaseQuantity,
  decreaseQuantity,
  removeSelectedProduct,
  setSelectedDetailProduct,
} = purchaseSlice.actions;

export default purchaseSlice.reducer;
