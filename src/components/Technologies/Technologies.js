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
  DiPython
} from "react-icons/di";
import { SiExpo, SiJest, SiTailwindcss, SiReactrouter, SiGraphql, SiTypescript, SiFirebase, SiFlask, SiSqlite, SiRedux } from "react-icons/si";
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
import { technologies } from "../../constants/constants";

const iconComponents = {
  DiReact,
  SiRedux,
  FaVuejs,
  SiTypescript,
  DiJavascript1,
  SiReactrouter,
  SiExpo,
  AiFillHtml5,
  DiCss3,
  SiTailwindcss,
  DiIllustrator,
  DiPhotoshop,
  DiWordpress,
  DiPython,
  SiFlask,
  SiSqlite,
  SiGraphql,
  DiPostgresql,
  AiFillApi,
  DiNpm,
  DiHeroku,
  SiFirebase,
  DiNodejs,
  SiJest
};

const Technologies = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>
      I have worked with a range of software developement technologies across
      the stack.
    </SectionText>
    {technologies.map(({ id, category, items }) => (
      <React.Fragment key={id}>
        <ListTitle>{category}</ListTitle>
        <List>
          {items.map(({ id: itemId, name, icon, size }) => {
            const IconComponent = iconComponents[icon];
            return (
              <ListItem key={itemId}>
                <IconComponent title={name} size={size} />
              </ListItem>
            );
          })}
        </List>
      </React.Fragment>
    ))}
  </Section>
);

export default Technologies;
