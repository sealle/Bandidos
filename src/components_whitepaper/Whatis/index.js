import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  What,
  WhatisContainer,
  WhatisItem,
  WhatisLinks,
  WhatisLogo,
  WhatisMenu,
  WhatisBtn,
  WhatisBtnLink,
} from "./Whatis";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const Whatis = ({ toggle }) => {
  const [scrollWhatis, setScrollWhatis] = useState(false);
  const [visible, setVisible] = React.useState(true);

  const changeWhatis = () => {
    if (window.scrollY >= 80) {
      setScrollWhatis(true);
    } else {
      setScrollWhatis(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeWhatis);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <What scrollWhatis={scrollWhatis}>
        <WhatisContainer>
          <WhatisMenu>
            <WhatisItem>
              <WhatisLinks
                onClick={toggleHome}
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                What is
              </WhatisLinks>
            </WhatisItem>
            <WhatisItem>
              <WhatisLinks
                to="buy"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Buy
              </WhatisLinks>
            </WhatisItem>
            <WhatisItem>
              <WhatisLinks
                to="bandidos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Bandidos
              </WhatisLinks>
            </WhatisItem>
            <WhatisItem>
              <WhatisLinks
                to="rewards"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Rewards
              </WhatisLinks>
            </WhatisItem>
            <WhatisItem>
              <WhatisLinks
                to="suggestions"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Suggestions
              </WhatisLinks>
            </WhatisItem>
            <WhatisItem>
              <WhatisLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </WhatisLinks>
            </WhatisItem>
          </WhatisMenu>
        </WhatisContainer>
      </What>
    </>
  );
};

export default Whatis;
