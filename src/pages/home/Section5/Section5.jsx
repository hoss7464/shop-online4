import React from "react";
import { db2 } from "../../../db2/db2";
import {
  Section5Container,
  Section5TextContainer,
  Section5SwiperWrapper,
} from "./Section5Elements";
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

const Section5 = () => {
  return (
    <>
      <Section5Container>
        <Section5TextContainer>
        <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomeData2.text15}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomeData2.text16}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section5TextContainer>
        <Section5SwiperWrapper>
        <HeroSwiper
            data={db2}
            slideNumber={4}
            sliceStart={23}
            sliceEnd={31}
            CustomComponent={SliderCart}
          />
        </Section5SwiperWrapper>
      </Section5Container>
    </>
  );
};

export default Section5;
