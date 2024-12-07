import React from "react";
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
} from "./SliderCrtElements";
import CartShoppingIcon from "../../assets/svg/CartShoppingIcon.svg";

const SliderCart = ({
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
          <SliderCartpriceTextWrapper>
            <SliderCartpriceText>${sliderPrice}</SliderCartpriceText>
          </SliderCartpriceTextWrapper>
        </SliderCartTextWrapper>
      </SliderCartBtnTextWrapper>
      <SliderCartImgWrapper>
        <SliderCartImg alt="cart photo" src={sliderImg} />
      </SliderCartImgWrapper>
    </>
  );
};

export default SliderCart;
