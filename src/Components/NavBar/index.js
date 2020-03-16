import React from "react";
import { MainNav, Anchor, Wrapper, Image, ImageWrapper } from "../NavBar/styles";
import noobsjs from '../../public/images/noobsjs.png'

export const NavBar = () => {
  return (
    <Wrapper>
      <MainNav>
        <Anchor href="#contact">Home</Anchor>
        <Anchor href="#contact">Contact</Anchor>
      </MainNav>
    </Wrapper>
  );
};
