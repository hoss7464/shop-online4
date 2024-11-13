import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../core-ui/Theme";
import { IoLogoStencil } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { HiPlus, HiMenu } from "react-icons/hi";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: ${colors.background};
  position: fixed;
  z-index: 1000;
  @media only screen and (min-width: 280px) and (max-width: 1920px) {
    padding: 0 24px 0 24px;
    height: 80px;
  }

  @media only screen and (min-width: 1921px) {
    padding: 0 232px 0 232px;
    height: 124px;
  }
`;

export const NavbarActiveArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const NavbarLeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NavbarLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarLogo = styled(IoLogoStencil)`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 44px;
    height: 44px;
  }
  @media only screen and (min-width: 577px) {
    width: 50px;
    height: 50px;
  }
`;

export const SearchWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 55px;
  border: solid 2.5px ${colors.prime1};
  background-color: ${colors.background};
  padding: 0.3rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-left: 1rem;
  }
  @media only screen and (min-width: 577px) {
    margin-left: 2rem;
  }
`;
export const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.prime1};
  border-radius: 50%;

  cursor: pointer;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0.3rem;
  }
  @media only screen and (min-width: 577px) {
    padding: 0.5rem;
  }
`;
export const SearchIcon = styled(FiSearch)`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
  @media only screen and (min-width: 577px) {
    width: 18px;
    height: 18px;
  }
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: inherit;
  &:active {
    border: none;
    outline: none;
  }

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 160px;
    padding: 0.3rem;
  }
  @media only screen and (min-width: 577px) {
    width: 250px;
    padding: 0.5rem;
  }
`;

export const NavbarRightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LinkWrpper1 = styled.div`
  height: 100%;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 993px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
  }
`;
export const Navlink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarLinkIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  border-radius: 50%;
  margin-right: 1rem;
  cursor: pointer;
  border: solid 3px ${colors.prime1};
  padding: 0.6rem;
  &:hover {
    background-color: ${colors.sec1};
  }
`;
export const NavbarIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SignInUpWrapper = styled.div`
  height: 100%;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 993px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const SignInUpLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.background};
  padding: 0.2rem;
  border-radius: 8px;
  border: solid 3px ${colors.prime1};
`;

export const SignInTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.7rem;
`;
export const SignInText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.text1};
`;
export const SignInIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.prime1};
  border-radius: 4px;
  padding: 0.3rem;
`;
export const SignInIcon = styled(FaArrowRight)`
  width: 16px;
  height: 16px;
  color: ${colors.text1};
`;

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.prime1};
  padding: 0.2rem;
  border-radius: 8px;
  border: solid 3px ${colors.prime1};
`;

export const SignUpIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  border-radius: 4px;
  padding: 0.3rem;
`;

export const SignUpIcon = styled(HiPlus)`
  width: 16px;
  height: 16px;
  color: ${colors.text1};
`;

export const HamburgerWrapper1 = styled.div`
  height: 100%;
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 993px) {
    display: none;
  }
`;
export const HamburgerWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  border-radius: 50%;
  cursor: pointer;
  border: solid 3px ${colors.prime1};
  padding: 0.6rem;
  &:hover {
    background-color: ${colors.sec1};
  }
`;
export const HamburgerIcon = styled(HiMenu)`
  width: 20px;
  height: 20px;
`;
