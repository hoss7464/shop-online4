import styled from "styled-components";
import {colors} from "../../core-ui/Theme"
import { Link } from "react-router-dom";

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 3.6rem;
  right: 19%;
  position: absolute;
  background-color: ${colors.sec3};
  border-radius: 8px;
  padding: 1rem;
  border: solid 1px ${colors.sec3};
`;

export const AllCategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px ${colors.sec3};
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;

`;
export const AllCategoryLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.text1};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colors.sec1};
    transition: all 0.2s ease-in-out;
  }
`;

export const CategoryWrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  min-width: 600px;
`;
export const CategoryWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const CategoryHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CategoryHeader = styled.h1`
  font-weight: 900;
  color: ${colors.text1};
  font-size: 18px;
`;

export const CategoryLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;

`;
export const CategoryLinkWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  
`;

export const CategoryLink = styled(Link)`
  color: ${colors.text1};
  font-weight: 500;
  font-size: 16px;
  transition: all 0.5s ease-in-out;
  width: 100%;
  text-align: left;

  &:hover {
    color: ${colors.sec1};
    transition: all 0.2s ease-in-out;
  }
`;

export const CategoryBtn = styled.button`
border: none;
outline: none;
color: ${colors.text1};
transition: all 0.1s ease-in-out;
font-size: 17px;
cursor: pointer;
background-color: inherit;
&:hover {
    color: ${colors.sec1};
    transition: all 0.1s ease-in-out;
}
`
