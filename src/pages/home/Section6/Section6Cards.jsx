import React from "react";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import {
  Section6CardWrapper,
  Section6StarWrapper,
  Section6TextWrapper,
  Section6Text,
  Section6SubheaderWrapper,
  Section6Subheader,
  Section6HeaderIconWrapper,
  Section6HeaderWrapper,
  Section6Header,
  Section6IconWrapper,
  Section6Icon,
} from "./Section6Elements";

const Section6Cards = ({
  Sec6Text,
  Sec6Subheader,
  Sec6Alt,
  Sec6SrcImg,
  Sec6Header,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Section6CardWrapper>
          <Section6StarWrapper>
            <Rating
              style={{ color: "#989898" }}
              name="half-rating-read"
              defaultValue={2.5}
              precision={5}
              readOnly
            />
          </Section6StarWrapper>
          <Section6TextWrapper>
            <Section6Text>{Sec6Text}</Section6Text>
          </Section6TextWrapper>
          <Section6SubheaderWrapper>
            <Section6Subheader>product: {Sec6Subheader}</Section6Subheader>
          </Section6SubheaderWrapper>
          <Section6HeaderIconWrapper>
            <Section6IconWrapper>
              <Section6Icon alt={Sec6Alt} src={Sec6SrcImg} />
            </Section6IconWrapper>
            <Section6HeaderWrapper>
              <Section6Header>{Sec6Header}</Section6Header>
            </Section6HeaderWrapper>
          </Section6HeaderIconWrapper>
        </Section6CardWrapper>
      </Grid>
    </>
  );
};

export default Section6Cards;
