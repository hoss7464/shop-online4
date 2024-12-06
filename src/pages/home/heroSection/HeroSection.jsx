import React from "react";
import { db2 } from "../../../db2/db2";
import {
  HeroContainer,
  HeroWrapper1,
  TextBtnWrapper,
  HeroHeaderWrapper,
  HeroHeader,
  HeroSubheaderWrapper,
  HeroSubheader,
  HeroLinkWrapper,
  HeroLinkBtn,
  HeroBtnTextWrapper,
  HeroBtnText,
  HeroBtnIconWrapper,
  HeroBtnIcon,
  HeroPictureWrapper,
  HeroPicture,
  HeroWrapper2,
} from "./HeroElements";
import HeroImg from "../../../assets/svg/HeroImg.svg";
import HeroSwiper from "../../../components/swiper/HeroSwiper";
import SliderCart from "../../../components/sliderCart/SliderCart";
import { HomeData1 } from "../../../helpers/HomeData";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper1>
          <TextBtnWrapper>
            <HeroHeaderWrapper>
              <HeroHeader>
                <span style={{ color: "#525252" }}>Radman</span> Online Shop
              </HeroHeader>
            </HeroHeaderWrapper>
            <HeroSubheaderWrapper>
              <HeroSubheader>{HomeData1.text1}</HeroSubheader>
            </HeroSubheaderWrapper>
            <HeroLinkWrapper>
              <HeroLinkBtn to="/signup">
                <HeroBtnTextWrapper>
                  <HeroBtnText>Get started</HeroBtnText>
                </HeroBtnTextWrapper>
                <HeroBtnIconWrapper>
                  <HeroBtnIcon />
                </HeroBtnIconWrapper>
              </HeroLinkBtn>
            </HeroLinkWrapper>
          </TextBtnWrapper>
          <HeroPictureWrapper>
            <HeroPicture alt="hero img" src={HeroImg} />
          </HeroPictureWrapper>
        </HeroWrapper1>
        <HeroWrapper2>
          <HeroSwiper
            data={db2}
            slideNumber={5}
            sliceStart={0}
            sliceEnd={8}
            CustomComponent={SliderCart}
          />
        </HeroWrapper2>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
