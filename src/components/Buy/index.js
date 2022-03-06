import React, { useState, useEffect } from "react";
import {
  BuyContainer,
  BuyWrapper,
  InfoRow,
  BuyH1,
  BuyP,
  Column1,
  Column2,
  ImgWrapper,
  SelectWrapper,
  BuyImg,
  BuyH2,
  ColumnRow,
  BuyContent,
} from "./Buy";
import BandidoUnreveiled from "../../images/BandidoUnreveiled.jpg";
import NumberInput from "semantic-ui-react-numberinput";
import { Button } from "../ButtonOld";

function Buy() {
  const [value, setValue] = useState("0");

  const changeValue = (newValue) => setValue(newValue);

  return (
    <>
      <BuyContainer id="buy">
        <BuyWrapper>
          <BuyContent>
            <BuyH1>Become a Bounty Hunter</BuyH1>
            <ColumnRow>
              <Column1>
                <ImgWrapper>
                  <BuyImg src={BandidoUnreveiled} />
                </ImgWrapper>
              </Column1>
              <Column2>
                <SelectWrapper>
                  <NumberInput
                    defaultValue={0}
                    size="large"
                    buttonPlacement="leftAndRight"
                    value={value}
                    onChange={changeValue}
                  />
                  <br />
                  <Button buttonStyle="btn--outline">Mint</Button>
                  <br />
                  <br />
                  <BuyP>X/X available</BuyP>
                  <BuyP>Price</BuyP>
                </SelectWrapper>
              </Column2>
            </ColumnRow>
            <BuyH2>The Story</BuyH2>
            <InfoRow>
              <BuyP>Bandidos are savages from the wild west...</BuyP>
              <BuyP>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </BuyP>
            </InfoRow>
          </BuyContent>
        </BuyWrapper>
      </BuyContainer>
    </>
  );
}

export default Buy;
