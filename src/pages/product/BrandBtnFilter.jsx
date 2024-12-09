import React from "react";
import {
  ProductBrandFilterWrapper2,
  ProductBrandFilterButton,
} from "./ProductsElements";
import { brandFilterProducts} from "../../redux/actions/filter/filterSlice";
import { useDispatch } from "react-redux";

const BrandBtnFilter = ({brandValue, brandName}) => {
    const dispatch = useDispatch()
    const clickFilter = (value) => {
        dispatch(brandFilterProducts(value))
    }
  return (
    <>
      <ProductBrandFilterWrapper2>
        <ProductBrandFilterButton onClick={() => clickFilter(brandValue)}>
          {brandName}
        </ProductBrandFilterButton>
      </ProductBrandFilterWrapper2>
    </>
  );
};

export default BrandBtnFilter;
