import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Sideb,
  SidebarContainer,
  SidebarItem,
  SidebarLinks,
  SidebarLogo,
  SidebarMenu,
  SidebarBtn,
  SidebarBtnLink,
} from "./Sidebar";

const Sidebar = ({ toggle }) => {
  const [scrollSidebar, setScrollSidebar] = useState(false);

  const changeSidebar = () => {
    if (window.scrollY >= 80) {
      setScrollSidebar(true);
    } else {
      setScrollSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeSidebar);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Sideb scrollSidebar={scrollSidebar}>
        <SidebarContainer>
          <SidebarMenu>
            <SidebarItem>
              <SidebarLinks
                onClick={toggleHome}
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </SidebarLinks>
            </SidebarItem>
            <SidebarItem>
              <SidebarLinks
                to="buy"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Buy
              </SidebarLinks>
            </SidebarItem>
            <SidebarItem>
              <SidebarLinks
                to="bandidos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Bandidos
              </SidebarLinks>
            </SidebarItem>
            <SidebarItem>
              <SidebarLinks
                to="rewards"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Rewards
              </SidebarLinks>
            </SidebarItem>
            <SidebarItem>
              <SidebarLinks
                to="suggestions"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Suggestions
              </SidebarLinks>
            </SidebarItem>
            <SidebarItem>
              <SidebarLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </SidebarLinks>
            </SidebarItem>
          </SidebarMenu>
        </SidebarContainer>
      </Sideb>
    </>
  );
};

export default Sidebar;
