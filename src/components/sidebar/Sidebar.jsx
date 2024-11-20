import React from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { clickToggle } from "../../redux/actions/toggleSlice";
import { useLocation } from "react-router-dom";
import {
  SidebarContainer,
  SidebarWrapper,
  SideLinkContainer,
  SideLink,
} from "./Sidebar";
//------------------------------------------------------------------------------------------------------

const Sidebar = () => {
  const Location = useLocation();
  //Selectors : 
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toggle.toggles["sidebar"] || false);
  //------------------------------------------------------------------------------------------------------
  //Toggle function :
  const handleToggle = () => {
    dispatch(clickToggle("sidebar"));
  };
  //------------------------------------------------------------------------------------------------------

  return (
    <>
      <SidebarContainer className={isOpen ? "open" : ""}>
        <SidebarWrapper>
          <SideLinkContainer>
            <SideLink
              to="/"
              onClick={handleToggle}
              className={Location.pathname === "/" ? "active-color" : null}
            >
              Home
            </SideLink>
            <SideLink
              to="/product"
              onClick={handleToggle}
              className={
                Location.pathname === "/product" ? "active-color" : null
              }
            >
              Product
            </SideLink>
            <SideLink
              to="/purchase"
              onClick={handleToggle}
              className={
                Location.pathname === "/purchase" ? "active-color" : null
              }
            >
              Purchase
            </SideLink>
            <SideLink
              to="/signin"
              onClick={handleToggle}
              className={
                Location.pathname === "/signin" ? "active-color" : null
              }
            >
              Sign In
            </SideLink>
            <SideLink
              to="/signup"
              onClick={handleToggle}
              className={
                Location.pathname === "/signup" ? "active-color" : null
              }
            >
              Sign Up
            </SideLink>
          </SideLinkContainer>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
