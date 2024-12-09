import React from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedProduct } from "../../redux/actions/purchase/purchaseSlice";
import {
  SliderCartBtnTextWrapper,
  SliderCartBtnWrapper,
  SliderCartBtn,
  SliderCartTextWrapper,
  SliderCartNameTextWrapper,
  SliderCartNameText,
  SliderCartpriceTextWrapper,
  SliderCartpriceText,
  SliderCartImgWrapper,
  SliderCartImg,
} from "../../components/sliderCart/SliderCrtElements";
import { ProductionCartWrapper } from "./ProductsElements";
import CartShoppingIcon from "../../assets/svg/CartShoppingIcon.svg";

const ProductCard = ({
  sliderName,
  sliderPrice,
  sliderImg,
  sliderId,
  sliderProduct,
  sliderCategory,
  sliderBrand,
  sliderCode,
  sliderCurrentPrice,
}) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.purchase.selectedProducts
  );

  const isAlreadySelected = selectedProducts.some(
    (product) => product.id === sliderId
  );

  const handleButtonClick = () => {
    if (!isAlreadySelected) {
      dispatch(
        addSelectedProduct({
          id: sliderId,
          name: sliderName,
          price: sliderPrice,
          img: sliderImg,
          product: sliderProduct,
          category: sliderCategory,
          brand: sliderBrand,
          code: sliderCode,
          currentPrice: sliderCurrentPrice,
        })
      );
    }
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductionCartWrapper>
        <SliderCartBtnTextWrapper>
          <SliderCartBtnWrapper
            style={{ backgroundColor: isAlreadySelected ? "#0067FF" : "#efefef"}}
            onClick={handleButtonClick}
          >
            <SliderCartBtn alt="cart shopping icon" src={CartShoppingIcon} />
          </SliderCartBtnWrapper>
          <SliderCartTextWrapper>
            <SliderCartNameTextWrapper>
              <SliderCartNameText>{sliderName}</SliderCartNameText>
            </SliderCartNameTextWrapper>
            <SliderCartNameTextWrapper>
              <SliderCartNameText> Product: {sliderProduct}</SliderCartNameText>
            </SliderCartNameTextWrapper>
            <SliderCartNameTextWrapper>
              <SliderCartNameText>Category: {sliderCategory}</SliderCartNameText>
            </SliderCartNameTextWrapper>
            <SliderCartpriceTextWrapper>
              <SliderCartpriceText>${sliderPrice}</SliderCartpriceText>
            </SliderCartpriceTextWrapper>
          </SliderCartTextWrapper>
        </SliderCartBtnTextWrapper>
        <SliderCartImgWrapper>
          <SliderCartImg alt="cart photo" src={sliderImg} />
        </SliderCartImgWrapper>
        </ProductionCartWrapper>
      </Grid>
    </>
  );
};

export default ProductCard;
