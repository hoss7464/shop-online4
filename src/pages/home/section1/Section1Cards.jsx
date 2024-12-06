import React from "react";
import {
  Section1CardWrapper,
  Section1CardIconWrapper,
  Section1CardHeadingParaWrapper,
  Section1CardHeadingWrapper,
  Section1CardHeading,
  Section1CardParaWrapper,
  Section1CardPara,
  Section1BtnWrapper,
  Section1CardBtnContainer,
  Section1CardBtn,
} from "./Section1Elements";
import { Grid } from "@mui/material";

const Section1Cards = ({ Section1Src, Sec1CardHead, Sec1CardPara }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Section1CardWrapper>
          <Section1CardIconWrapper>
            <Section1Src />
          </Section1CardIconWrapper>
          <Section1CardHeadingParaWrapper>
            <Section1CardHeadingWrapper>
              <Section1CardHeading>{Sec1CardHead}</Section1CardHeading>
            </Section1CardHeadingWrapper>
            <Section1CardParaWrapper>
              <Section1CardPara>{Sec1CardPara}</Section1CardPara>
            </Section1CardParaWrapper>
          </Section1CardHeadingParaWrapper>
          <Section1BtnWrapper>
            <Section1CardBtnContainer>
              <Section1CardBtn to="/signup">Join Us</Section1CardBtn>
            </Section1CardBtnContainer>
          </Section1BtnWrapper>
        </Section1CardWrapper>
      </Grid>
    </>
  );
};

export default Section1Cards;
