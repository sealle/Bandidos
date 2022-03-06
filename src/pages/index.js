import React, { useState } from "react";
import Intro from "../components/Intro/index";
import Buy from "../components/Buy/index";
import Bandidos from "../components/Bandidos/index";
import Rewards from "../components/Rewards/index";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import Menu from "../components/Menu/index";
import Suggestions from "../components/Suggestions/index";
import Projects from "../components/Projects/index";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Validate Metamask connection and fetch NFT Data

  return (
    <>
      <Navbar toggle={toggle} />
      <Menu isOpen={isOpen} toggle={toggle} />
      <Sidebar />
      <Intro />
      <Buy />
      <Bandidos />
      <Rewards />
      <Suggestions />
      <Projects />
    </>
  );
}

export default Home;
