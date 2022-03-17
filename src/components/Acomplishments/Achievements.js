import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AchievementsStyles";

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
