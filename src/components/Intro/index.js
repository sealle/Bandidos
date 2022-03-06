import React from "react";
import Image from "../../images/DeathValley_Home.jpg";

import {
  IntroContainer,
  IntroBg,
  ImageBg,
  IntroContent,
  IntroH1,
  IntroP,
} from "./Intro";

function Intro() {
  return (
    <IntroContainer id="home">
      <IntroBg>
        <ImageBg src={Image} />
      </IntroBg>
      <IntroContent>
        <IntroH1>Welcome to Candy's Creek</IntroH1>
        <IntroP>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </IntroP>
      </IntroContent>
    </IntroContainer>
  );
}

export default Intro;
