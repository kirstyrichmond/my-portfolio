import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ButtonContainer, ProfilePhoto } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <ProfilePhoto src="/images/kirstyrichmond.png" />
      <SectionTitle main center>
        Kirsty Richmond
      </SectionTitle>
      <SectionText>
        Avid bike tourer, piano player and nature lover with a passion for
        coding.
      </SectionText>
      <ButtonContainer>
        <Button
          onClick={() =>
            (window.location = "mailto:kirsty.richmond.abc@hotmail.co.uk")
          }
        >
          Email me
        </Button>
      </ButtonContainer>
    </LeftSection>
  </Section>
);

export default Hero;
