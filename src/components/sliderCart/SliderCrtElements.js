import styled from "styled-components";
import { colors } from "../../core-ui/Theme";

export const SliderCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.prime1};
  border-radius: 30px;
  padding: 6px;
`;

export const SliderCartBtnTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SliderCartBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: ${colors.background};
  transition: all 0.3s ease-in-out;
  padding: 0.7rem;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.sec1};
    transition: all 0.3s ease-in-out;
  }
`;

export const SliderCartBtn = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 32px;
    height: 38px;
  }
  @media only screen and (min-width: 769px) {
    width: 38px;
    height: 44px;
  }
`;

export const SliderCartTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const SliderCartNameTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const SliderCartNameText = styled.p`
  color: ${colors.text2};
  font-size: 16px;
  font-weight: 400;
`;

export const SliderCartpriceTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const SliderCartpriceText = styled.p`
  color: ${colors.text1};
  font-size: 20px;
  font-weight: 700;
`;

export const SliderCartImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
`;

export const SliderCartImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
`;
