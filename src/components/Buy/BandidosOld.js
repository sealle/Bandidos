import React, { Component, useEffect, useState } from "react";
import "../../App.css";
import { Button } from "../Button";
import { NftGallery } from "react-nft-gallery";
import logo from "../../images/Gundalf.jpg";
import NFTContainer from "../NFTContainer.js";

const titleStyle = {
  color: "black",
  margin: "auto",
  textAlign: "center",
};

function BandidosOld() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [nfts, setNFTs] = useState([]);

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

  const getNFTData = async () => {
    if (!currentAccount) return;

    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${currentAccount}`
    );

    const data = await response.json();
    console.log(data.items);
    setNFTs(data.items);
  };

  useEffect(() => {
    checkWalletIsConnected();
    getNFTData();
  }, [currentAccount]);

  return (
    <>
      <br />
      <h1 style={titleStyle}>Your Bandidos</h1>
      <br />
      <NFTContainer nfts={nfts} />
      {/*<NftGallery ownerAddress={currentAccount}/>
    <div style={{textAlign:"center"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <span>No Bandidos yet? Press below to buy get your Bandido now!</span>
     </div>*/}
      {/*needs API_KEY https://docs.opensea.io/reference/request-an-api-key*/}
      <div style={{ textAlign: "center" }}>
        <Button>Buy Bandidos</Button>
      </div>
    </>
  );
}

export default BandidosOld;
