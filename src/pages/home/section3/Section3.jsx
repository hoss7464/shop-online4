import React from "react";
import { db2 } from "../../../db2/db2";
import {
  Section3Container,
  Section3TextContainer,
  Section3SwiperWrapper,
} from "./Section3Elements";
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
//-----------------------------------------------------------------------------------------

const Section3 = () => {
  return (
    <>
      <Section3Container>
        <Section3TextContainer>
        <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomeData2.text5}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomeData2.text6}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section3TextContainer>
        <Section3SwiperWrapper>
        <HeroSwiper
            data={db2}
            slideNumber={4}
            sliceStart={16}
            sliceEnd={24}
            CustomComponent={SliderCart}
          />
        </Section3SwiperWrapper>
      </Section3Container>
    </>
  );
};

export default Section3;
