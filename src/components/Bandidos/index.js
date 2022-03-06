import React, { useState, useEffect } from "react";
import {
  BandidosContainer,
  BandidosBg,
  BandidosContent,
  BandidosH1,
  BandidosP,
  BandidosBox,
  BandidosImg,
  BandidosImageContainer,
  BandidosWrapper,
} from "./Bandidos";
import Bandido from "../../images/Bandido.jpg";
import { Grid, Image } from "semantic-ui-react";

function Bandidos() {
  const [value, setValue] = useState("0");

  const changeValue = (newValue) => setValue(newValue);

  return (
    <BandidosContainer id="bandidos">
      <BandidosWrapper>
        <BandidosContent>
          <BandidosH1>
            You are currently hunting the following Bandidos
          </BandidosH1>
          <BandidosBox>
            <BandidosImageContainer>
              <BandidosImg src={Bandido} />
            </BandidosImageContainer>
            <BandidosImageContainer>
              <BandidosImg src={Bandido} />
            </BandidosImageContainer>
            <BandidosImageContainer>
              <BandidosImg src={Bandido} />
            </BandidosImageContainer>
          </BandidosBox>
        </BandidosContent>
      </BandidosWrapper>
    </BandidosContainer>
  );
}

export default Bandidos;
