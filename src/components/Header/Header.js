import React from "react";
import {
  AiFillGithub,
  AiFillBehanceSquare,
  AiFillLinkedin,
} from "react-icons/ai";

import { Container, Div3, SocialIcons } from "./HeaderStyles";

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
