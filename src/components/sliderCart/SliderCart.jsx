import React from "react";
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

const SliderCart = ({ sliderName, sliderPrice, sliderImg }) => {
  return (
    <>
      <SliderCartBtnTextWrapper>
        <SliderCartBtnWrapper>
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
