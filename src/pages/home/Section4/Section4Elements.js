import styled from "styled-components";
import { colors } from "../../../core-ui/Theme";
import { Link } from "react-router-dom";

export const Section4Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section4TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`;

export const Section4TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
//---------------------------------------------------------
export const Section4BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Section4CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.prime1};

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0.5rem;
    border-radius: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0.5rem 1rem;
    border-radius: 32px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 1rem;
    border-radius: 24px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    padding: 1rem;
    border-radius: 32px;
  }

  @media only screen and (min-width: 1080px) {
    padding: 1.5rem;
    border-radius: 32px;
  }
`;

export const Section4CardWrapper = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    align-items: center;
    flex-direction: ${({ LeftToRight }) =>
      LeftToRight ? "column" : "column-reverse"};
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: ${({ LeftToRight }) =>
      LeftToRight ? "column" : "column-reverse"};
  }

  @media only screen and (min-width: 769px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const Section4ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section4Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 19.5rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    height: 19.5rem;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    border-bottom-left-radius: 64px;
    border-bottom-right-radius: 64px;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 21.25rem;
    height: 17.63rem;
    border-top-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "16px" : "48px"};
    border-top-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "48px" : "16px"};
    border-bottom-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "16px" : "48px"};
    border-bottom-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "48px" : "16px"};
  }

  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    width: 24.81rem;
    height: 17.63rem;
    border-top-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "64px"};
    border-top-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "64px" : "24px"};
    border-bottom-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "64px"};
    border-bottom-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "64px" : "24px"};
  }

  @media only screen and (min-width: 1080px) {
    width: 30rem;
    height: 17.63rem;
    border-top-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "80px"};
    border-top-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "80px" : "24px"};
    border-bottom-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "80px"};
    border-bottom-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "80px" : "24px"};
  }
`;
//-------------------------------------------------------------
export const Section4InnerTextBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    height: 15.75rem;
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    height: 14rem;
    width: 100%;
  }

  @media only screen and (min-width: 769px) {
    height: 17.63rem;
  }
`;

export const Section4InnerTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Section4InnerTextHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section4InnerTextHeader = styled.h1`
  color: ${colors.text1};
  font-weight: 900;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 24px;
  }
`;
export const Section4InnerSubheaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 13.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 18.81rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 16.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    width: 18.63rem;
  }

  @media only screen and (min-width: 1080px) {
    width: 19rem;
  }
`;
export const Section4InnerSubheader = styled.h3`
  color: ${colors.text1};
  font-weight: 500;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) {
    font-size: 16px;
  }
`;
export const Section4InnerParaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 13.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 24.19rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 16.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 24.94rem;
  }

  @media only screen and (min-width: 1281px) {
    width: 30.44rem;
  }
`;
export const Section4InnerPara = styled.p`
  color: ${colors.text1};
  font-weight: 300;

  @media only screen and (min-width: 280px) and (max-width: 1079px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1080px) {
    font-size: 16px;
  }

`;
//--------------------------------------------------
export const Section4BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 55px;
  background: ${colors.background};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${colors.sec1};
    transition: all 0.3s ease-in-out;
  }
`;

export const Section4SecondaryBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: ${colors.text1};
  font-weight: 400;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.prime1};
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    padding: 8px;
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    padding: 8px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1080px) {
    padding: 16px;
    font-size: 16px;
  }

`;


