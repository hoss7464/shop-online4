import React from "react";
import { LandingContainer } from "./HomeElements";
import {Container1} from "../../core-ui/MainContainers"
import HeroSection from "./heroSection/HeroSection";
import Section1 from "./section1/Section1";

const Home = () => {
  return (
    <>
      <LandingContainer>
        <HeroSection />
        <Container1>
          <Section1 />
        </Container1>
      </LandingContainer>
    </>
  );
};

export default Home;
