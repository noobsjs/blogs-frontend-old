import React from "react";
import noobsteam from "../../public/images/noobsteam.jpg";
import {
  Image,
  CenterText,
  MainImage,
  SocialDiv,
  AnchorLink,
  FacebookStyle,
  InstagramStyle,
  TwitterStyle
} from "./styles";
import noobsjs from "../../public/images/noobsjs.png";

export const LandigPage = () => {
  return (
    <div>
      <Image src={noobsteam} />
      <div>
        <CenterText>
          <MainImage src={noobsjs} />
          <SocialDiv>
            <AnchorLink href="https://www.facebook.com/noobsjs/">
              <FacebookStyle />
            </AnchorLink>
            <AnchorLink href="https://twitter.com/noobsjs">
              <TwitterStyle />
            </AnchorLink>
            <AnchorLink href="https://www.instagram.com/noobs.js/">
              <InstagramStyle />
            </AnchorLink>
          </SocialDiv>
        </CenterText>
      </div>
    </div>
  );
};

const social = {
  color: "#F0DB4F"
};
