import { createSlice } from "@reduxjs/toolkit";
import { db2 } from "../../../db2/db2";

const initialState = {
  allProducts: db2,
  filteredProducts: db2,
  category: null,
  brand: null,
  minPrice: null,
  maxPrice: null,
  sortType: "",
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    // Set Category Filter
    categoryFilterProducts: (state, action) => {
      state.category = action.payload;
      state.filteredProducts = applyAllFilters(state);
    },
    // Set Brand Filter
    brandFilterProducts: (state, action) => {
      state.brand = action.payload;
      state.filteredProducts = applyAllFilters(state);
    },
    // Set Min Price Filter
    minPriceFilterProducts: (state, action) => {
      state.minPrice = action.payload;
      state.filteredProducts = applyAllFilters(state);
    },
    // Set Max Price Filter
    maxPriceFilterProducts: (state, action) => {
      state.maxPrice = action.payload;
      state.filteredProducts = applyAllFilters(state);
    },
    // Sort Products Based on Minimum and Maximum Price
    sortProducts: (state, action) => {
      state.sortType = action.payload; 
      if (state.sortType === "minPrice") {
        state.filteredProducts = [...state.filteredProducts].sort(
          (a, b) => a.price - b.price
        );
      } else if (state.sortType === "maxPrice") {
        state.filteredProducts = [...state.filteredProducts].sort(
          (a, b) => b.price - a.price
        );
      }
    },
    // Reset All Filters
    resetAllFilters: (state) => {
      state.category = null;
      state.brand = null;
      state.minPrice = null;
      state.maxPrice = null;
      state.sortType = "";
      state.filteredProducts = state.allProducts;
    },
    // Set Search input filter : 
    searchInputQueryFilter: (state, action) => {
      const value = action.payload;
      state.searchValue = value;
      if (value && value.trim() !== "") {
        // Trigger the search filter when input is not empty
        state.filteredProducts = applyAllFilters(state);
      } else {
        // Reset filtered products if input is empty
        state.filteredProducts = state.allProducts;
      }
    },
    //Function to filter products on clicking search icon :
    searchInputFilterClick: (state) => {
      const { allProducts, searchValue } = state;
      if (searchValue && searchValue.trim() !== "") {
        state.filteredProducts = allProducts.filter((product) =>
          product.product.toLowerCase().includes(searchValue.toLowerCase()) || 
          product.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.header.toLowerCase().includes(searchValue.toLowerCase()) 
        );
      } else {
        state.filteredProducts = allProducts;
      }
    },
  
  },
});

// Helper function to apply all active filters
const applyAllFilters = (state) => {
  const { allProducts, category, brand, minPrice, maxPrice } = state;
  return allProducts.filter((product) => {
    const matchesCategory = category ? product.product === category : true;
    const matchesBrand = brand ? product.brand === brand : true;
    const matchesMinPrice = minPrice !== null ? product.price >= minPrice : true;
    const matchesMaxPrice = maxPrice !== null ? product.price <= maxPrice : true;

    return matchesCategory && matchesBrand && matchesMinPrice && matchesMaxPrice;
  });
};

export const {
  categoryFilterProducts,
  brandFilterProducts,
  minPriceFilterProducts,
  maxPriceFilterProducts,
  resetAllFilters,
  sortProducts,
  searchInputQueryFilter, 
  searchInputFilterClick,
} = filterSlice.actions;

export default filterSlice.reducer;
