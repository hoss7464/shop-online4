import React from "react";
import {
  Section6Container,
  Section6TextContainer,
  Section6CardContainer,
} from "./Section6Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../components/text/HeaderSubheaderSectionText";
import { HomeData2, HomeData4 } from "../../../helpers/HomeData";
import { Grid } from "@mui/material";
import Section6Cards from "./Section6Cards";

const Section6 = () => {
  return (
    <>
      <Section6Container>
        <Section6TextContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomeData2.text17}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomeData2.text18}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section6TextContainer>
        <Section6CardContainer>
          <Grid container spacing={2}>
            {HomeData4.map((data, index) => {
              return (
                <Section6Cards
                  key={index}
                  Sec6Text={data.text}
                  Sec6Subheader={data.subheader}
                  Sec6Alt={data.alt}
                  Sec6SrcImg={data.img}
                  Sec6Header={data.header}
                />
              );
            })}
          </Grid>
        </Section6CardContainer>
      </Section6Container>
    </>
  );
};

export default Section6;
