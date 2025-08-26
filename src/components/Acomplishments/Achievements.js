import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AchievementsStyles";
import { achievements } from "../../constants/constants";

const Achievements = () => (
  <Section id="achievements">
    <SectionDivider />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {achievements.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Achievements;
