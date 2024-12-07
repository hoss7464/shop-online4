import { createSlice } from "@reduxjs/toolkit";

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: { selectedProducts: [] },
  reducers: {
    addSelectedProduct: (state, action) => {
      state.selectedProducts.push({
        ...action.payload,
        quantity: 1,
        basePrice: action.payload.price,
      });
    },
    increaseQuantity: (state, action) => {
      const product = state.selectedProducts.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity += 1;
        product.price = product.basePrice * product.quantity;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.selectedProducts.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.price = product.basePrice * product.quantity;
      }
    },
    removeSelectedProduct: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addSelectedProduct, increaseQuantity, decreaseQuantity, removeSelectedProduct } =
  purchaseSlice.actions;

export default purchaseSlice.reducer;
