import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchInputQueryFilter,
  searchInputFilterClick,
} from "../../redux/actions/filter/filterSlice";
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
import { useNavigate } from "react-router-dom";
import myHome1 from "../../assets/svg/Home1.svg";
import myHome2 from "../../assets/svg/Home2.svg";
import myPurchase1 from "../../assets/svg/Purchase1.svg";
import myPurchase2 from "../../assets/svg/Purchase2.svg";
import myCategory1 from "../../assets/svg/Category1.svg";
import myCategory2 from "../../assets/svg/Category2.svg";
import Tooltip from "@mui/material/Tooltip";
import Category from "../category/Category";
//----------------------------------------------------------------------------------------------

const Navbar = () => {
  //Selectors for toggle click :
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggles = useSelector((state) => state.toggle.toggles);
  const selectedProducts = useSelector(
    (state) => state.purchase.selectedProducts
  );
  const searchValue = useSelector((state) => state.filter.searchValue);
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
  const handleSearchInputChange = (e) => {
    dispatch(searchInputQueryFilter(e.target.value));
  };

  const handleSearchIconClick = () => {
    if (searchValue.trim() !== "") { 
      navigate("/product");
      dispatch(searchInputFilterClick());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchValue.trim() !== "") {
        navigate("/product");
        dispatch(searchInputFilterClick());
      }
    }
  };

  return (
    <>
      <NavbarContainer>
        <NavbarActiveArea>
          <NavbarLeftSection>
            <NavbarLogoWrapper>
              <NavbarLogo />
            </NavbarLogoWrapper>

            <SearchWrapper1>
              <SearchIconWrapper onClick={handleSearchIconClick}>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchInputWrapper>
                <SearchInput
                  placeholder="search"
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  onKeyDown={handleKeyPress}
                />
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

              <Navlink to="/purchase">
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
              {/*we must wrapp two components blow so that when we hover over category area it remains visible **/}
              <div
                onMouseEnter={() => HoverMouseEnter("toggle3")}
                onMouseLeave={() => HoverMouseLeave("toggle3")}
                style={{ position: "relative" }}
              >
                <Navlink>
                  <Tooltip title="Category" placement="bottom">
                    <NavbarLinkIconWrapper>
                      <NavbarIcon
                        alt="category icon"
                        src={toggles["toggle3"] ? myCategory2 : myCategory1}
                      />
                    </NavbarLinkIconWrapper>
                  </Tooltip>
                </Navlink>
                {toggles["toggle3"] && <Category />}
              </div>
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
