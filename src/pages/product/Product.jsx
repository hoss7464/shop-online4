import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  minPriceFilterProducts,
  maxPriceFilterProducts,
  resetAllFilters,
} from "../../redux/actions/filter/filterSlice";
import {
  ProductContainer,
  ProductWrapper,
  ProductRightWrapper,
  ProductLeftWrapper,
  ProductFilterWrapper,
  ProductBrandFilterWrapper,
  ProductBrandFilterWrapper3,
  ProductMobileInputFilterWrapper,
  ProductMobileInputWrapper,
  ProductMbileDropdownWrapper,
  ProductInputFilterWrapper,
  ProductInputFilterWrapper2,
  ProductInputFilterLabelWrapper,
  ProductInputFilterLabel,
  ProductInputFilterWrapper3,
  ProductInputFilter,
  ProductFilterResetBtnWrapper,
  ProductFilterResetBtn,
} from "./ProductsElements";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import BrandBtnFilter from "./BrandBtnFilter";
import MyDropDown1 from "./MyDropDown1";
import MyDropDown2 from "./MyDropDown2";
import SortDropdown from "./SortDropdown";
import ScrollToTop from "../../core-ui/ScrollToTop";
//--------------------------------------------------------------------------------------------

const Product = () => {
  const dispatch = useDispatch();
  //--------------------------------------------------------------------------------------------
  //Selectors : 
  const filteredProducts = useSelector((state) => state.filter.filteredProducts);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  //--------------------------------------------------------------------------------------------
  //Function to filter products based on min price : 
  const handleMinPriceChange = (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    dispatch(minPriceFilterProducts(value));
  };
  //Function to filter products based on max price : 
  const handleMaxPriceChange = (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    dispatch(maxPriceFilterProducts(value));
  };
  //--------------------------------------------------------------------------------------------
  //Function to reset all filters on productions : 
  const handleResetFilters = () => {
    dispatch(resetAllFilters());
  };
  //--------------------------------------------------------------------------------------------
  return (
    <>
      <ScrollToTop />
      <ProductContainer>
        <ProductWrapper>
          <ProductLeftWrapper>
            <ProductFilterWrapper>
              <ProductBrandFilterWrapper>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="iphone" brandName="Iphone" />
                  <BrandBtnFilter brandValue="samsung" brandName="Samsung" />
                </ProductBrandFilterWrapper3>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="xiaomi" brandName="Xiaomi" />
                  <BrandBtnFilter brandValue="hp" brandName="HP" />
                </ProductBrandFilterWrapper3>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="lenovo" brandName="Lenovo" />
                  <BrandBtnFilter brandValue="apple" brandName="Macbook" />
                </ProductBrandFilterWrapper3>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="intell" brandName="Intell" />
                  <BrandBtnFilter brandValue="nvidia" brandName="Nvidia" />
                </ProductBrandFilterWrapper3>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="vogati" brandName="Vogati" />
                  <BrandBtnFilter brandValue="nova" brandName="Nova" />
                </ProductBrandFilterWrapper3>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="samsung" brandName="Samsung" />
                  <BrandBtnFilter brandValue="lg" brandName="LG" />
                </ProductBrandFilterWrapper3>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="adidas" brandName="Adidas" />
                  <BrandBtnFilter brandValue="puma" brandName="Puma" />
                </ProductBrandFilterWrapper3>
                <ProductBrandFilterWrapper3>
                  <BrandBtnFilter brandValue="nike" brandName="Nike" />
                  <BrandBtnFilter
                    brandValue="faber-castell"
                    brandName="Faber-Castell"
                  />
                </ProductBrandFilterWrapper3>
              </ProductBrandFilterWrapper>

              <ProductInputFilterWrapper>
                <ProductInputFilterWrapper2>
                  <ProductInputFilterLabelWrapper>
                    <ProductInputFilterLabel>From :</ProductInputFilterLabel>
                  </ProductInputFilterLabelWrapper>
                  <ProductInputFilterWrapper3>
                    <ProductInputFilter
                      type="text"
                      placeholder="min-price"
                      value={minPrice || ""}
                      onChange={handleMinPriceChange}
                    />
                  </ProductInputFilterWrapper3>
                </ProductInputFilterWrapper2>
                <ProductInputFilterWrapper2 style={{ marginTop: "1rem" }}>
                  <ProductInputFilterLabelWrapper>
                    <ProductInputFilterLabel>To :</ProductInputFilterLabel>
                  </ProductInputFilterLabelWrapper>
                  <ProductInputFilterWrapper3>
                    <ProductInputFilter
                      type="text"
                      placeholder="max-price"
                      value={maxPrice || ""}
                      onChange={handleMaxPriceChange}
                    />
                  </ProductInputFilterWrapper3>
                </ProductInputFilterWrapper2>
              </ProductInputFilterWrapper>
              <SortDropdown />
              <ProductFilterResetBtnWrapper style={{ marginTop: "2rem" }}>
                <ProductFilterResetBtn onClick={handleResetFilters}>
                  Reset Filters
                </ProductFilterResetBtn>
              </ProductFilterResetBtnWrapper>
            </ProductFilterWrapper>
          </ProductLeftWrapper>
          <ProductRightWrapper>
            <ProductMobileInputFilterWrapper>
              <ProductMobileInputWrapper>
                <ProductInputFilterWrapper2>
                  <ProductInputFilterLabelWrapper>
                    <ProductInputFilterLabel>From :</ProductInputFilterLabel>
                  </ProductInputFilterLabelWrapper>
                  <ProductInputFilterWrapper3>
                    <ProductInputFilter
                      type="text"
                      placeholder="min-price"
                      value={minPrice || ""}
                      onChange={handleMinPriceChange}
                    />
                  </ProductInputFilterWrapper3>
                </ProductInputFilterWrapper2>
                <ProductInputFilterWrapper2 style={{ marginTop: "1rem" }}>
                  <ProductInputFilterLabelWrapper>
                    <ProductInputFilterLabel>To :</ProductInputFilterLabel>
                  </ProductInputFilterLabelWrapper>
                  <ProductInputFilterWrapper3>
                    <ProductInputFilter
                      type="text"
                      placeholder="max-price"
                      value={maxPrice || ""}
                      onChange={handleMaxPriceChange}
                    />
                  </ProductInputFilterWrapper3>
                </ProductInputFilterWrapper2>
                <ProductFilterResetBtnWrapper style={{ marginTop: "0.3rem" }}>
                  <ProductFilterResetBtn onClick={handleResetFilters}>
                    Reset Filters
                  </ProductFilterResetBtn>
                </ProductFilterResetBtnWrapper>
              </ProductMobileInputWrapper>

              {/* **/}
              <ProductMbileDropdownWrapper>
                <MyDropDown1 />
                <MyDropDown2 />
                <SortDropdown />
              </ProductMbileDropdownWrapper>
            </ProductMobileInputFilterWrapper>

            <Grid container spacing={2} justifyContent="flex-start">
              {filteredProducts.map((data) => (
                <ProductCard
                  key={data.id}
                  sliderId={data.id}
                  sliderName={data.header}
                  sliderProduct={data.product}
                  sliderCategory={data.category}
                  sliderPrice={data.price}
                  sliderImg={data.picture}
                />
              ))}
            </Grid>
          </ProductRightWrapper>
        </ProductWrapper>
      </ProductContainer>
    </>
  );
};

export default Product;
