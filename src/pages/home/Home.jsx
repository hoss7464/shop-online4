import React from "react";
import { LandingContainer } from "./HomeElements";
import { Container1 } from "../../core-ui/MainContainers";
import HeroSection from "./heroSection/HeroSection";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import ScrollToTop from "../../core-ui/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <LandingContainer>
        <HeroSection />
        <Container1>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </Container1>
      </LandingContainer>
    </>
  );
};

export default Home;
