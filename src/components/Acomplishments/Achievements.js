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
    text: "Merit",
  },
  {
    title: "Piano",
    text: "Grade 7",
  },
  {
    title: "Guitar",
    text: "Grade 5",
  },
];

const Achievements = () => (
  <Section id="achievements">
    <SectionDivider />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Achievements;
