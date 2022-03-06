import React from "react";
import {
  RewardContainer,
  RewardBg,
  RewardContent,
  RewardH1,
  RewardH2,
  RewardFigures,
  RewardGrid,
  RewardP,
  RewardWrapper,
} from "./Rewards";

function Rewards() {
  return (
    <RewardContainer id="rewards">
      <RewardWrapper>
      <RewardContent>
        <RewardH1>Gold Miner Steve</RewardH1>
        <RewardFigures>
          <RewardGrid>
            <RewardH2>#Value Portfolio</RewardH2>
            <RewardP>400'000</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>#ROI</RewardH2>
            <RewardP>40'000</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>%Change 24h</RewardH2>
            <RewardP style={{color: "green"}}>+8.52%</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>#last ROI</RewardH2>
            <RewardP>35'000</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>ØROI</RewardH2>
            <RewardP>37'500</RewardP>
          </RewardGrid>
        </RewardFigures>
        <br/>
        <RewardH1>Carsen's Vegetable Farm</RewardH1>
        <RewardFigures>
          <RewardGrid>
            <RewardH2>#Value Portfolio</RewardH2>
            <RewardP>150'000</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>#ROI</RewardH2>
            <RewardP>15'000</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>%Change 24h</RewardH2>
            <RewardP style={{color: "red"}}>-0.02%</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>#last ROI</RewardH2>
            <RewardP>15'250</RewardP>
          </RewardGrid>
          <RewardGrid>
            <RewardH2>ØROI</RewardH2>
            <RewardP>15'125</RewardP>
          </RewardGrid>
        </RewardFigures>
        <br/>
        <RewardH1>City Bank</RewardH1>
        <RewardH2>200'000</RewardH2>
      </RewardContent>
      </RewardWrapper>
    </RewardContainer>
  );
}

export default Rewards;
