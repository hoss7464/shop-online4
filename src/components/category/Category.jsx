import React from "react";
import { useDispatch } from "react-redux";
import {categoryFilterProducts} from "../../redux/actions/filter/filterSlice"
import {
  CategoryContainer,
  AllCategoryWrapper,
  AllCategoryLink,
  CategoryWrapper1,
  CategoryWrapper2,
  CategoryHeaderWrapper,
  CategoryHeader,
  CategoryLinkWrapper,
  CategoryLinkWrapper2,
  CategoryLink,
  CategoryBtn,
} from "./CategoryElements";
import { CatData1 } from "../../helpers/CategoryData";
//------------------------------------------------------------------------------------------------------

const Category = () => {
  //----------------------------------------------------------------------------------------------------
    const dispatch = useDispatch()
  //----------------------------------------------------------------------------------------------------
  //Filter products based on category
    const handleFilter = (value) => {dispatch(categoryFilterProducts(value))}
  //----------------------------------------------------------------------------------------------------  
  return (
    <>
      <CategoryContainer>
        <AllCategoryWrapper>
          <AllCategoryLink to="/product" >
            <CategoryBtn value="" onClick={() => handleFilter("")} >{CatData1.text19}</CategoryBtn>
          </AllCategoryLink>
        </AllCategoryWrapper>
        <CategoryWrapper1>
          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text12}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="pencils" onClick={() => handleFilter("pencils")}>{CatData1.text13}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text15}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="t-shirt" onClick={() => handleFilter("t-shirt")}>{CatData1.text16}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="shoes" onClick={() => handleFilter("shoes")}>{CatData1.text17}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text1}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="pot" onClick={() => handleFilter("pot")}>{CatData1.text2}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="coffee" onClick={() => handleFilter("coffee")}>{CatData1.text3}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="iron" onClick={() => handleFilter("iron")}>{CatData1.text4}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="refrigerator" onClick={() => handleFilter("refrigerator")}>
                    {CatData1.text5}
                  </CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text6}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="cellphone" onClick={() => handleFilter("cellphone")}>{CatData1.text7}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="mobile-accessory" onClick={() => handleFilter("mobile-accessory")}>
                    {CatData1.text8}
                  </CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="laptop" onClick={() => handleFilter("laptop")}>{CatData1.text9}</CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="laptop-accessory" onClick={() => handleFilter("laptop-accessory")}>
                    {CatData1.text10}
                  </CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/product">
                  <CategoryBtn value="pc-accessory" onClick={() => handleFilter("pc-accessory")}>
                    {CatData1.text11}
                  </CategoryBtn>
                </CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>
        </CategoryWrapper1>
      </CategoryContainer>
    </>
  );
};

export default Category;
