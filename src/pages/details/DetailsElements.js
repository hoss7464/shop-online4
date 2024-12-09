import styled from "styled-components";
import { colors } from "../../core-ui/Theme";
import { Link } from "react-router-dom";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 600px;
  margin-top: 6rem;
`;

export const DetailImgContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.prime1};
  padding: 1rem;
  border-radius: 30px;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    flex-direction: row;
  }
`;
export const DetailImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 300px;
    margin-right: 0;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-right: 0;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 300px;
    height: 400px;
    margin-right: 1rem;
  }
  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    width: 300px;
    height: 400px;
    margin-right: 1rem;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 300px;
    height: 400px;
    margin-right: 1rem;
  }
`;
export const DetailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;
export const DetailContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 400px;
    margin-top: 0;
  }
  @media only screen and (min-width: 993px) and (max-width: 1079px) {
    width: 400px;
    margin-top: 0;
  }
  @media only screen and (min-width: 1080px) and (max-width: 1920px) {
    width: 400px;
    margin-top: 0;
  }
`;
export const DetailTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;
export const DetailTextWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
export const DetailText = styled.p`
  color: ${colors.sec2};
  font-size: 14px;
  font-weight: 400;
`;

export const DetailPrice = styled.p`
color: ${colors.text1};
font-size: 20px;
font-weight: 800;
`;
export const DetailbtnWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${colors.sec3};
  cursor: pointer;
  color: ${colors.text1};
  font-size: 16px;
  font-weight: 600;
  margin-top: 2rem;

`;

