import React from "react";
import { Grid } from "@mui/material";
import {
  Section1Container,
  Section1TextContainer,
  Section1CardContainer,
} from "./Section1Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../components/text/HeaderSubheaderSectionText";
import Section1Cards from "./Section1Cards";
import { HomeData2, HomeData3 } from "../../../helpers/HomeData";

const Section1 = () => {
  return (
    <>
      <Section1Container>
        <Section1TextContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomeData2.text1}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomeData2.text2}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section1TextContainer>
        <Section1CardContainer>
          <Grid container spacing={2} justifyContent="center">
            {HomeData3.map((data, index) => {
              return (
                <Section1Cards
                  key={index}
                  Section1Src={data.cardImg}
                  Sec1CardHead={data.cardHeader}
                  Sec1CardPara={data.cardPara}
                />
              );
            })}
          </Grid>
        </Section1CardContainer>
      </Section1Container>
    </>
  );
};

export default Section1;
