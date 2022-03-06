import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../ButtonOld";
import { ethers } from "ethers";
import { animateScroll as scroll } from "react-scroll";

function NavbarOld() {
  const [click, setClick] = useState(false);
  const [banner, setBannerClick] = useState(false);
  const [button, setButton] = useState(true);
  const [currentAccount, setCurrentAccount] = useState(null);

  const handleClick = () => setClick(!click);
  const handleBannerClick = () => setClick(!banner);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showButton();
    checkWalletIsConnected();
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={toggleHome}>
            Bandidos
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {click ? (
              <li className="nav-item">
                {currentAccount ? (
                  <p className="account">{currentAccount}</p>
                ) : (
                  <Button
                    buttonStyle="btn--outline--nav"
                    onClick={connectWalletHandler}
                  >
                    Connect Wallet
                  </Button>
                )}
              </li>
            ) : (
              ""
            )}
          </ul>
          {button ? (
            <div className="btn-connect-wallet">
              {currentAccount && !click ? (
                <p className="account">{currentAccount}</p>
              ) : (
                <Button
                  buttonStyle="btn--outline--nav"
                  onClick={connectWalletHandler}
                >
                  Connect Wallet
                </Button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}

export default NavbarOld;
