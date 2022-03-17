import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiFirebase,
  DiReact,
  DiHeroku,
  DiIllustrator,
  DiJavascript1,
  DiNodejs,
  DiPhotoshop,
  DiPostgresql,
  DiWordpress,
  DiCss3,
  DiNpm,
  DiSass,
} from "react-icons/di";
import { SiExpo, SiJest, SiNextdotjs, SiExpress, SiTailwindcss, SiReactrouter } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListItem,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>
      I have worked with a range of software developement technologies across
      the stack.
    </SectionText>
    <ListTitle>Front End</ListTitle>
    <List>
      <ListItem>
        <DiReact size="6rem" />
      </ListItem>
      <ListItem>
        <SiReactrouter size="6rem" />
      </ListItem>
      <ListItem>
        <DiJavascript1 size="6rem" />
      </ListItem>
      <ListItem>
        <SiExpo size="6rem" />
      </ListItem>
      <ListItem>
        <AiFillHtml5 size="6rem" />
      </ListItem>
      <ListItem>
        <DiCss3 size="6rem" />
      </ListItem>
      <ListItem>
        <DiSass size="6rem" />
      </ListItem>
      <ListItem>
        <SiTailwindcss size="6rem" />
      </ListItem>
      <ListItem>
        <DiIllustrator size="6rem" />
      </ListItem>
      <ListItem>
        <DiPhotoshop size="6rem" />
      </ListItem>
      <ListItem>
        <DiWordpress size="6rem" />
      </ListItem>
    </List>
    <ListTitle>Back End</ListTitle>
    <List>
      <ListItem>
        <DiNpm size="6rem" />
      </ListItem>
      <ListItem>
        <DiHeroku size="6rem" />
      </ListItem>
      <ListItem>
        <DiFirebase size="6rem" />
      </ListItem>
      <ListItem>
        <DiPostgresql size="6rem" />
      </ListItem>
      <ListItem>
        <DiNodejs size="6rem" />
      </ListItem>
      <ListItem>
        <SiJest size="6rem" />
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
