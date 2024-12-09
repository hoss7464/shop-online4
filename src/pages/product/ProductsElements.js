import styled from "styled-components";
import { colors } from "../../core-ui/Theme";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${colors.background};
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 720px;
  margin-bottom: 2rem;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    margin-top: 6rem;
  }
  @media only screen and (min-width: 769px) {
    margin-top: 7rem;
  }
`;

export const ProductRightWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  min-height: 720px;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) {
    width: calc(100% - 260px);
  }
`;

export const ProductLeftWrapper = styled.div`
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  width: 260px;
  min-height: 720px;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
  }
`;
//----------------------------------------------------------------
export const ProductionCartWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.prime1};
  padding: 6px;
  border-radius: 30px;
`;
//----------------------------------------------------------------
export const ProductFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const ProductBrandFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const ProductBrandFilterWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const ProductBrandFilterWrapper3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ProductBrandFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${colors.prime1};
  color: ${colors.text1};
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    color: ${colors.prime1};
    background-color: ${colors.sec1};
  }
`;

//--------------------------------------------------------
export const ProductMobileInputFilterWrapper = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    display: flex;
    width: 100%;
  }
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
export const ProductMobileInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProductMbileDropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;
//-------------------------------------------------------
export const ProductInputFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
`;
export const ProductInputFilterWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;
export const ProductInputFilterLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInputFilterLabel = styled.label`
  color: ${colors.text1};
  font-size: 12px;
`;
export const ProductInputFilterWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;
export const ProductInputFilter = styled.input`
  background-color: ${colors.prime1};
  border: none;
  outline: none;
  border-radius: 55px;
  width: 150px;
  height: 32px;
  padding-left: 0.5rem;
`;
//----------------------------------------------------------------
export const ProductFilterResetBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const ProductFilterResetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 12px;
  border-radius: 55px;
  background-color: ${colors.sec3};
  color: ${colors.text1};
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.sec1};
    color: ${colors.prime1};
  }
`;
//----------------------------------------------------------------