import React from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedProduct, setSelectedDetailProduct } from "../../redux/actions/purchase/purchaseSlice";
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
import { ProductionCartWrapper, SliderCartImgLink } from "./ProductsElements";
import CartShoppingIcon from "../../assets/svg/CartShoppingIcon.svg";
//--------------------------------------------------------------------------------------------

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
  //--------------------------------------------------------------------------------------------
  //Selectors : 
  const selectedProducts = useSelector((state) => state.purchase.selectedProducts);
  //--------------------------------------------------------------------------------------------
  //Function to add products just once : 
  const isAlreadySelected = selectedProducts.some(
    (product) => product.id === sliderId
  );
  //Function to add products into purchase cart on click : 
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
  //--------------------------------------------------------------------------------------------
  //Function to pass the information of the products into detail page : 
  const handleImageClick = () => {
    dispatch(
      setSelectedDetailProduct({
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
  };
  //--------------------------------------------------------------------------------------------
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductionCartWrapper>
          <SliderCartBtnTextWrapper>
            <SliderCartBtnWrapper
              style={{
                backgroundColor: isAlreadySelected ? "#0067FF" : "#efefef",
              }}
              onClick={handleButtonClick}
            >
              <SliderCartBtn alt="cart shopping icon" src={CartShoppingIcon} />
            </SliderCartBtnWrapper>
            <SliderCartTextWrapper>
              <SliderCartNameTextWrapper>
                <SliderCartNameText>{sliderName}</SliderCartNameText>
              </SliderCartNameTextWrapper>
              <SliderCartNameTextWrapper>
                <SliderCartNameText>
                  {" "}
                  Product: {sliderProduct}
                </SliderCartNameText>
              </SliderCartNameTextWrapper>
              <SliderCartNameTextWrapper>
                <SliderCartNameText>
                  Category: {sliderCategory}
                </SliderCartNameText>
              </SliderCartNameTextWrapper>
              <SliderCartpriceTextWrapper>
                <SliderCartpriceText>${sliderPrice}</SliderCartpriceText>
              </SliderCartpriceTextWrapper>
            </SliderCartTextWrapper>
          </SliderCartBtnTextWrapper>
          <SliderCartImgLink to="/details">
            <SliderCartImgWrapper onClick={handleImageClick}>
              <SliderCartImg alt="cart photo" src={sliderImg} />
            </SliderCartImgWrapper>
          </SliderCartImgLink>
        </ProductionCartWrapper>
      </Grid>
    </>
  );
};

export default ProductCard;
