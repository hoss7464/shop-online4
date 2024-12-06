import styled from "styled-components";
import { colors } from "../../core-ui/Theme";

export const SectionHeaderTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 10790px) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export const SectionHeaderTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-bottom: solid 2px ${colors.prime1};
  margin-bottom: 0.5rem;
`;

export const SectionHeaderText = styled.h1`
  color: ${colors.text1};
  font-weight: 900;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1441px) {
    font-size: 32px;
  }
`;

export const SectionSubheaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SectionSubheaderText = styled.p`
  color: ${colors.text1};
  font-weight: 400;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) {
    font-size: 24px;
  }
`;
