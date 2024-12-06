import styled from "styled-components";
import { colors } from "../../../core-ui/Theme";
import { Link } from "react-router-dom";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export const Section1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section1TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`;

export const Section1CardContainer = styled.div`
  width: 100%;
`;

export const Section1CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.prime1};
  border-radius: 16px;

  @media only screen and (min-width: 280px) and (max-width: 1079px) {
    padding: 16px 8px;
  }

  @media only screen and (min-width: 1080px) {
    padding: 16px 16px;
  }
`;
export const Section1CardIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  border-radius: 55px;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0.7rem;
  }
  @media only screen and (min-width: 577px) {
    padding: 1rem;
  }
`;

export const Section1ServiceIcon = styled(RiCustomerServiceFill)`
  color: ${colors.text1};
  width: 24px;
  height: 24px;
`;
export const Section1LocationIcon = styled(FaLocationDot)`
  color: ${colors.text1};
  width: 24px;
  height: 24px;
`;
export const Section1CalenderIcon = styled(FaCalendarDays)`
  color: ${colors.text1};
  width: 24px;
  height: 24px;
`;
export const Section1StarIcon = styled(FaStar)`
  color: ${colors.text1};
  width: 24px;
  height: 24px;
`;

export const Section1CardHeadingParaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;
export const Section1CardHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;
export const Section1CardHeading = styled.h1`
  color: ${colors.text1};
  font-weight: 400;
  font-size: 16px;
`;
export const Section1CardParaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Section1CardPara = styled.p`
  color: ${colors.text1};
  font-weight: 300;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 12px;
  }
`;
export const Section1BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Section1CardBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${colors.background};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.sec1};
    transition: all 0.3s ease-in-out;
  }
`;

export const Section1CardBtn = styled(Link)`
  color: ${colors.text1};
  padding: 8px 16px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.prime1};
    transition: all 0.3s ease-in-out;
  }
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) {
    font-size: 16px;
  }
`;
