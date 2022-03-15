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
