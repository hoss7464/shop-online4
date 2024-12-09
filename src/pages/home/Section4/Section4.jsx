import React from "react";
import "./Section4.css"
import {
  Section4Container,
  Section4TextContainer,
  Section4BoxWrapper,
  Section4CardContainer,
  Section4CardWrapper,
  Section4ImgContainer,
  Section4Img,
  Section4InnerTextBtnContainer,
  Section4InnerTextWrapper,
  Section4InnerTextHeaderContainer,
  Section4InnerTextHeader,
  Section4InnerSubheaderContainer,
  Section4InnerSubheader,
  Section4InnerParaContainer,
  Section4InnerPara,
  Section4BtnContainer,
  Section4SecondaryBtn,
} from "./Section4Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../components/text/HeaderSubheaderSectionText";
import { HomeData2 } from "../../../helpers/HomeData";
import ShopImg1 from "../../../assets/png/Shop1.jpg"
import ShopImg2 from "../../../assets/png/Shop2.jpg"
//-------------------------------------------------------------------------------------------

const Section4 = () => {
  return (
    <>
      <Section4Container>
        <Section4TextContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomeData2.text7}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomeData2.text8}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section4TextContainer>

        <Section4BoxWrapper>
          <Section4CardContainer className="section4-card-margin">
            <Section4CardWrapper>
              <Section4InnerTextBtnContainer>
                <Section4InnerTextWrapper>
                  <Section4InnerTextHeaderContainer>
                    <Section4InnerTextHeader>{HomeData2.text9}</Section4InnerTextHeader>
                  </Section4InnerTextHeaderContainer>
                  <Section4InnerSubheaderContainer>
                    <Section4InnerSubheader>{HomeData2.text10}</Section4InnerSubheader>
                  </Section4InnerSubheaderContainer>
                  <Section4InnerParaContainer>
                    <Section4InnerPara>{HomeData2.text11}</Section4InnerPara>
                  </Section4InnerParaContainer>
                </Section4InnerTextWrapper>
                  <Section4BtnContainer>
                    <Section4SecondaryBtn to="/signup">Join Us</Section4SecondaryBtn>
                  </Section4BtnContainer>
              </Section4InnerTextBtnContainer>

              <Section4ImgContainer>
                <Section4Img alt="shop img 1" src={ShopImg1} />
              </Section4ImgContainer>
              
            </Section4CardWrapper>
          </Section4CardContainer>

          <Section4CardContainer>
            <Section4CardWrapper LeftToRight>
            <Section4ImgContainer LeftToRight>
                <Section4Img alt="shop img 2" LeftToRight src={ShopImg2} />
              </Section4ImgContainer>
              <Section4InnerTextBtnContainer>
                <Section4InnerTextWrapper>
                  <Section4InnerTextHeaderContainer>
                    <Section4InnerTextHeader>{HomeData2.text12}</Section4InnerTextHeader>
                  </Section4InnerTextHeaderContainer>
                  <Section4InnerSubheaderContainer>
                    <Section4InnerSubheader>{HomeData2.text13}</Section4InnerSubheader>
                  </Section4InnerSubheaderContainer>
                  <Section4InnerParaContainer>
                    <Section4InnerPara>{HomeData2.text14}</Section4InnerPara>
                  </Section4InnerParaContainer>
                </Section4InnerTextWrapper>
                  <Section4BtnContainer>
                    <Section4SecondaryBtn to="/signup">Join Us</Section4SecondaryBtn>
                  </Section4BtnContainer>
              </Section4InnerTextBtnContainer>
              
            </Section4CardWrapper>
          </Section4CardContainer>

        </Section4BoxWrapper>
      </Section4Container>
    </>
  );
};

export default Section4;
