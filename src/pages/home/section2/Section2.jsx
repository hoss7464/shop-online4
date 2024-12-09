import React from "react";
import { db2 } from "../../../db2/db2";
import {
  Section2Container,
  Section2TextContainer,
  Section2SwiperWrapper,
} from "./Section2Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../components/text/HeaderSubheaderSectionText";
import { HomeData2 } from "../../../helpers/HomeData";
import HeroSwiper from "../../../components/swiper/HeroSwiper";
import SliderCart from "../../../components/sliderCart/SliderCart";
//--------------------------------------------------------------------------------------------

const Section2 = () => {
  return (
    <>
      <Section2Container>
        <Section2TextContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomeData2.text3}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomeData2.text4}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section2TextContainer>
        <Section2SwiperWrapper>
          <HeroSwiper
            data={db2}
            slideNumber={4}
            sliceStart={8}
            sliceEnd={16}
            CustomComponent={SliderCart}
          />
        </Section2SwiperWrapper>
      </Section2Container>
    </>
  );
};

export default Section2;
