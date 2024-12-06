import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../core-ui/Theme";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.text2};
`;

export const FooterWrap = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 577px) {
    margin: 0;
    padding-top: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  transition: 0.3s ease-out;

  &:hover {
    color: #2979ff;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5);
    transition: 0.2s ease-in-out;
    color: #2979ff;
  }
`;
