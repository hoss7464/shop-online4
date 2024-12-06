import styled from "styled-components";
import { colors } from "../../../core-ui/Theme";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 720px;
  position: relative;
  padding-top: 6rem;
`;

export const HeroWrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
    padding-left: 140px;
    padding-right: 140px;
  }
`;

export const TextBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
`;

export const HeroHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) {
    justify-content: flex-start;
  }
`;

export const HeroHeader = styled.h1`
  font-weight: 900;
  color: ${colors.text1};
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 993px) {
    font-size: 32px;
  }
`;

export const HeroSubheaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) {
    justify-content: flex-start;
  }
`;

export const HeroSubheader = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.text1};
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    text-align: center;
  }
  @media only screen and (min-width: 577px) {
    text-align: left;
  }
`;

export const HeroLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }
  @media only screen and (min-width: 577px) {
    justify-content: flex-start;
  }
`;

export const HeroLinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 55px;
  background-color: ${colors.sec1};
  padding: 12px 16px;
`;

export const HeroBtnTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;

export const HeroBtnText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.prime1};
`;

export const HeroBtnIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBtnIcon = styled(FaArrowRight)`
  width: 16px;
  height: 16px;
  color: ${colors.prime1};
`;

export const HeroPictureWrapper = styled.div`
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
  }
`;

export const HeroPicture = styled.img`
  object-fit: cover;

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 325px;
    height: 300px;
  }
  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    width: 350px;
    height: 325px;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 425px;
    height: 400px;
  }
`;
export const HeroWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
`;
