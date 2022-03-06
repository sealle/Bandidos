import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const What = styled.div`
  background: linear-gradient(
    90deg,
    rgb(28, 27, 27, 0.8) 0%,
    rgb(26, 23, 23, 0.8) 100%
  );
  height: 100%;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 900;
  overflow-x: hidden;
  padding-top: 100px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WhatisContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 350px;
`;

export const WhatisLogo = styled(LinkR)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const WhatisMenu = styled.ul`
  height: 100%;
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 160px;
  justify-content: end;
  margin-right: 2rem;
  float: right;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WhatisItem = styled.li`
  height: 80px;
`;

export const WhatisBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WhatisLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid white;
  }
`;

export const WhatisBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
