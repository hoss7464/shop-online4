import styled from "styled-components";
import { colors } from "../../core-ui/Theme";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 700px;
  background-color: ${colors.background};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding-left: 56px;
    padding-right: 56px;
  }
  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    padding-left: 72px;
    padding-right: 72px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`;

export const PurchaseBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 6rem;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;
export const SelectedProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.sec3};
  border-radius: 24px;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    min-height: 150px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1079px) {
    align-items: flex-start;
    width: calc(100% - 300px);
    padding: 1rem;
    margin-right: 1rem;
    min-height: 200px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    align-items: flex-start;
    width: calc(100% - 400px);
    padding: 1rem;
    margin-right: 1rem;
    min-height: 200px;
  }
`;

export const SelectedProductTotalPriceWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.sec3};
  border-radius: 24px;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    min-height: 150px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1079px) {
    width: 300px;
    padding: 1rem;
    min-height: 200px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 400px;
    padding: 1rem;
    min-height: 200px;
  }
`;

export const CartSummaryHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: solid 1px ${colors.text2};
  padding-bottom: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;
export const CartSummaryHeader = styled.h3`
  color: ${colors.text1};
  font-size: 20px;
  font-weight: 600;
`;
export const CartSummaryTotalPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const CartSummaryTotalPriceTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;
export const CartSummaryTotalPriceText = styled.p`
  color: ${colors.text1};
  font-size: 18px;
`;
export const CartSummaryTotalPriceNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;
export const CartSummaryTotalPriceNumber = styled.p`
  color: ${colors.text1};
  font-size: 20px;
  font-weight: 700;
`;
//---------------------------------------------------------------
export const PurchaseCompoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.prime1};
  padding: 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  position: relative;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
  }
  @media only screen and (min-width: 993px) and (max-width: 1259px) {
    width: 100%;
  }
  @media only screen and (min-width: 1260px) and (max-width: 1920px) {
    width: 600px;
  }
`;

export const PurchaseCompoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;

export const CompoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 200px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    width: 350px;
    height: 180px;
  }
`;

export const CompoIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
`;

export const CompoContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    align-items: flex-end;
    margin-left: 1rem;
    margin-top: 0;
  }
`;

export const CompoHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-start;
  }
`;

export const CompoHeader = styled.p`
  font-weight: 700;
  color: ${colors.text1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
    text-align: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
    text-align: left;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const CompoBrand = styled.p`
  color: ${colors.text1};
  font-size: 16px;
  font-weight: 400;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    text-align: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    text-align: left;
  }
  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    text-align: left;
  }
`;

export const CompoPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    justify-content: flex-start;
  }
`;

export const CompoPrice = styled.p`
  font-weight: 600;
  color: ${colors.text1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    text-align: center;
    font-size: 14px;
  }
  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    text-align: right;
    font-size: 16px;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const CounterBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CounterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${colors.sec3};
  color: ${colors.text1};
  border-radius: 55px;
  cursor: pointer;
  padding: 0.5rem;
  background-color: ${colors.background};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.sec1};
    transition: all 0.3s ease-in-out;
  }
`;

export const CounterBtnIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CounterBtnMinusIcon = styled(FaMinus)`
  width: 12px;
  height: 12px;
  color: ${colors.text1};
`;

export const CounterBtnPlusIcon = styled(FaPlus)`
  width: 12px;
  height: 12px;
  color: ${colors.text1};
`;

export const CounterInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const CounterInput = styled.input`
  border: none;
  outline: none;
  width: 50px;
  height: 26px;
  background-color: ${colors.background};
  border-radius: 4px;
  text-align: center;
  &:active {
    border: none;
    outline: none;
  }
`;

export const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.sec3};
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 55%;
  padding: 0.3rem;
  cursor: pointer;
`

export const CounterCloseIcon = styled(IoClose)`
  width: 20px;
  height: 20px;
  color: ${colors.text1};
`;
