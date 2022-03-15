import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillBehanceSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          {/* <DiCssdeck size="3rem" /> */}
          {/* <Span>Kirsty Richmond</Span> */}
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech Stack</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#achievements">
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/kirstyrichmond">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/kirstyrichmond/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.behance.net/kirstyrichmond">
        <AiFillBehanceSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
