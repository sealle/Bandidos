import logo from "./images/Gundalf.jpg";
import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import { NftGallery } from "react-nft-gallery";
import Home from "./pages/index";
import FAQ from "./pages/faq";
import Whitepaper from "./pages/whitepaper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RemoveScrollBar } from "react-remove-scroll-bar";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/whitepaper" exact element={<Whitepaper />} />
          <Route path="/faq" exact element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
