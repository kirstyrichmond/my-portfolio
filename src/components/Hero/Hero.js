import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Kirsty <br />
        Richmond
      </SectionTitle>
      <SectionText>
        Avid bike tourer, piano player and nature lover with a passion for
        coding.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "mailto:kirsty.richmond.abc@hotmail.co.uk")
        }
      >
        Email me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
