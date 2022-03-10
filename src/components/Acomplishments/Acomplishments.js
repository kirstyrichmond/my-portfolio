import React from "react";
// import { GiGrandPiano } from "react-icons/gi";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
  IconContainer,
} from "./AcomplishmentsStyles";

const data = [
  {
    title: "NCA Awards",
    // icon: <GiGrandPiano />,
    text: "Merit",
  },
  {
    title: "Piano",
    // icon: <GiGrandPiano />,
    text: "Grade 7",
  },
  {
    title: "Guitar",
    // icon: <GiGrandPiano />,
    text: "Grade 5",
  },
  // { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          {/* <IconContainer icon={card.icon} /> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
