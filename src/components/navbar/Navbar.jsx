import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  hoverEnableToggle,
  hoverDisableToggle,
  clickToggle,
} from "../../redux/actions/toggleSlice";
import {
  NavbarContainer,
  NavbarActiveArea,
  NavbarLeftSection,
  NavbarRightSection,
  NavbarLogoWrapper,
  NavbarLogo,
  SearchWrapper1,
  SearchIconWrapper,
  SearchIcon,
  SearchInputWrapper,
  SearchInput,
  LinkWrpper1,
  Navlink,
  NavbarLinkIconWrapper,
  NavbarIcon,
  MySpan,
  SignInUpWrapper,
  SignInUpLink,
  SignInWrapper,
  SignInTextWrapper,
  SignInText,
  SignInIconWrapper,
  SignInIcon,
  SignUpWrapper,
  SignUpIconWrapper,
  SignUpIcon,
  HamburgerWrapper1,
  HamburgerWrapper2,
  HamburgerIcon,
} from "./NavbarElements";
import myHome1 from "../../assets/svg/Home1.svg";
import myHome2 from "../../assets/svg/Home2.svg";
import myPurchase1 from "../../assets/svg/Purchase1.svg";
import myPurchase2 from "../../assets/svg/Purchase2.svg";
import myCategory1 from "../../assets/svg/Category1.svg";
import myCategory2 from "../../assets/svg/Category2.svg";
import Tooltip from "@mui/material/Tooltip";
//----------------------------------------------------------------------------------------------

const Navbar = () => {
  //Selectors for toggle click :
  const dispatch = useDispatch();
  const toggles = useSelector((state) => state.toggle.toggles);
  const selectedProducts = useSelector((state) => state.purchase.selectedProducts)
  const productCount = selectedProducts.length;
  //----------------------------------------------------------------------------------------------
  //Hover function :
  const HoverMouseEnter = (id) => {
    dispatch(hoverEnableToggle(id));
  };
  const HoverMouseLeave = (id) => {
    dispatch(hoverDisableToggle(id));
  };
  //----------------------------------------------------------------------------------------------

  return (
    <>
      <NavbarContainer>
        <NavbarActiveArea>
          <NavbarLeftSection>
            <NavbarLogoWrapper>
              <NavbarLogo />
            </NavbarLogoWrapper>
            <SearchWrapper1>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchInputWrapper>
                <SearchInput placeholder="search" />
              </SearchInputWrapper>
            </SearchWrapper1>
          </NavbarLeftSection>
          <NavbarRightSection>
            <LinkWrpper1>
              <Navlink to="/">
                <Tooltip title="Home" placement="bottom">
                  <NavbarLinkIconWrapper
                    onMouseEnter={() => HoverMouseEnter("toggle1")}
                    onMouseLeave={() => HoverMouseLeave("toggle1")}
                  >
                    <NavbarIcon
                      alt="home icon"
                      src={toggles["toggle1"] ? myHome2 : myHome1}
                    />
                  </NavbarLinkIconWrapper>
                </Tooltip>
              </Navlink>

              <Navlink to="/purchase" >
                <Tooltip title="Purchase" placement="bottom">
                  <NavbarLinkIconWrapper
                    onMouseEnter={() => HoverMouseEnter("toggle2")}
                    onMouseLeave={() => HoverMouseLeave("toggle2")}
                  >
                    <NavbarIcon
                      alt="purchase icon"
                      src={toggles["toggle2"] ? myPurchase2 : myPurchase1}
                    />
                    {productCount > 0 && <MySpan>{productCount}</MySpan>}
                  </NavbarLinkIconWrapper>
                </Tooltip>
              </Navlink>

              <Navlink>
                <Tooltip title="Category" placement="bottom">
                  <NavbarLinkIconWrapper
                    onMouseEnter={() => HoverMouseEnter("toggle3")}
                    onMouseLeave={() => HoverMouseLeave("toggle3")}
                  >
                    <NavbarIcon
                      alt="category icon"
                      src={toggles["toggle3"] ? myCategory2 : myCategory1}
                    />
                  </NavbarLinkIconWrapper>
                </Tooltip>
              </Navlink>
            </LinkWrpper1>

            <SignInUpWrapper>
              <SignInUpLink to="/signin" style={{ marginRight: "1rem" }}>
                <SignInWrapper>
                  <SignInTextWrapper>
                    <SignInText>Log In</SignInText>
                  </SignInTextWrapper>
                  <SignInIconWrapper>
                    <SignInIcon />
                  </SignInIconWrapper>
                </SignInWrapper>
              </SignInUpLink>

              <SignInUpLink to="/signup">
                <SignUpWrapper>
                  <SignInTextWrapper>
                    <SignInText>Sign Up</SignInText>
                  </SignInTextWrapper>
                  <SignUpIconWrapper>
                    <SignUpIcon />
                  </SignUpIconWrapper>
                </SignUpWrapper>
              </SignInUpLink>
            </SignInUpWrapper>

            <HamburgerWrapper1 onClick={() => dispatch(clickToggle("sidebar"))}>
              <HamburgerWrapper2>
                <HamburgerIcon />
              </HamburgerWrapper2>
            </HamburgerWrapper1>
          </NavbarRightSection>
        </NavbarActiveArea>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
