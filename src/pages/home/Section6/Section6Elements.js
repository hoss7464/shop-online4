import styled from "styled-components";
import { colors } from "../../../core-ui/Theme";

export const Section6Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section6TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`;

export const Section6CardContainer = styled.div`
  @media only screen and (min-width: 280px) and (max-width: 1280px) {
    width: 100%;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 55.69rem;
  }

  @media only screen and (min-width: 1441px) {
    width: 70rem;
  }
`;

export const Section6CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${colors.prime1};
  padding: 1rem;
  border-radius: 16px;
`;
export const Section6StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Section6TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
export const Section6Text = styled.p`
  color: ${colors.text1};
  font-weight: 300;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 16px;
  }
`;
export const Section6SubheaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Section6Subheader = styled.h3`
  color: ${colors.text1};
  font-weight: 500;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 16px;
  }
`;
export const Section6HeaderIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Section6IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border-radius: 50%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 32px;
    height: 32px;
  }

  @media only screen and (min-width: 993px) {
    width: 40px;
    height: 40px;
  }
`;
export const Section6Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export const Section6HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section6Header = styled.h1`
  color: ${colors.text1};
  font-weight: 600;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 24px;
  }
`;
