import React from "react";
import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import {
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
} from "react-icons/di";
import { SiExpo, SiJest, SiTailwindcss, SiReactrouter, SiGraphql, SiTypescript, SiFirebase } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";


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
        <DiReact title="React" size="6rem" />
      </ListItem>
      <ListItem>
        <FaVuejs title="Vue" size="5rem" />
      </ListItem>
      <ListItem>
        <SiTypescript title="Typescript" size="6rem" />
      </ListItem>
      <ListItem>
        <DiJavascript1 title="Javascript" size="6rem" />
      </ListItem>
      <ListItem>
        <SiReactrouter title="React Router" size="6rem" />
      </ListItem>
      <ListItem>
        <SiExpo title="Expo" size="6rem" />
      </ListItem>
      <ListItem>
        <AiFillHtml5 title="HTML" size="6rem" />
      </ListItem>
      <ListItem>
        <DiCss3 title="CSS" size="6rem" />
      </ListItem>
      <ListItem>
        <SiTailwindcss title="TailwindCSS" size="6rem" />
      </ListItem>
      <ListItem>
        <DiIllustrator title="Illustrator" size="6rem" />
      </ListItem>
      <ListItem>
        <DiPhotoshop title="Photoshop" size="6rem" />
      </ListItem>
      <ListItem>
        <DiWordpress title="Wordpress" size="6rem" />
      </ListItem>
    </List>
    <ListTitle>Back End</ListTitle>
    <List>
    <ListItem>
        <SiGraphql title="GraphQL" size="6rem" />
      </ListItem>
      <ListItem>
        <DiPostgresql title="PostgreSQL" size="6rem" />
      </ListItem>
      <ListItem>
        <AiFillApi title="API" size="6rem" />
      </ListItem>
      <ListItem>
        <DiNpm title="NPM" size="6rem" />
      </ListItem>
      <ListItem>
        <DiHeroku title="Heroku" size="6rem" />
      </ListItem>
      <ListItem >
        <SiFirebase title="Firebase" size="6rem" />
      </ListItem>
      <ListItem>
        <DiNodejs title="Node" size="6rem" />
      </ListItem>
      <ListItem>
        <SiJest title="Jest" size="6rem" />
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
