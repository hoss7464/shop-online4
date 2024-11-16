import styled from "styled-components";
import { colors } from "../../core-ui/Theme";
import {Link} from "react-router-dom"

export const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  transition: 0.3s ease-in-out;
  background-color: ${colors.background};
  opacity: 0;
  top: -100%;
  &.open {
    opacity: 100%;
    top: 0;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  margin-top:70px ;
`;

export const SideLinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column ;
  width: 100%;
  padding-top:0.5rem ;
  padding-bottom:1rem ;
`;

export const SideLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:0.5rem ;
  padding-bottom:0.5rem ;
  cursor: pointer;
  font-size:16px ;
  margin-top:1rem ;
  border-radius:8px ;
  color: ${colors.text1};
  padding: 16px 32px;
  font-weight: 400;
`;
