import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { Button } from "../Button";
import { ethers } from "ethers";
import { animateScroll as scroll } from 'react-scroll';

const SidebarOld = ({ toggle }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrollNav, setScrollNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const showButton = () => {
    if (window.innerHeight <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <sid scrollNav={scrollNav} className="sidebar">
        <div className="sidebar-container">
          <ul className={click ? "sid-menu active" : "sid-menu"}>
            <li className="sid-item">
              <div to="/" className="sid-links" onClick={toggleHome}>
                Home
              </div>
            </li>
            <br />
            <li className="sid-item">
              <Link
                to="/suggestions"
                className="sid-links"
                onClick={closeMobileMenu}
              >
                Bandidos
              </Link>
            </li>
            <br />  
            <li className="sid-item">
              <div
                onClick={toggle}
                to="rewards"
                className="sid-links"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Rewards
              </div>
            </li>
            <br />
            <li className="sid-item">
              <Link
                to="/suggestions"
                className="sid-links"
                onClick={closeMobileMenu}
              >
                Suggestions
              </Link>
            </li>
          </ul>
        </div>
      </sid>
    </>
  );
}

export default SidebarOld;
