import React, { Component, useEffect, useState } from "react";
import { Message } from "semantic-ui-react";
import "./Message.css";

const messageStyle = {
  width: "50%",
  margin: "auto",
};

function WalletMessage() {
  const [message, setClick] = useState(true);
  const [currentAccount, setCurrentAccount] = useState(null);

  const handleClick = () => setClick(!message);

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

  useEffect(() => {
    checkWalletIsConnected();
  });

  return (
    <>
      {!currentAccount && message ? (
        <Message
          style={messageStyle}
          onDismiss={handleClick}
          header="No Wallet connected!"
          content="Please connect your Wallet to view your Bandidos"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default WalletMessage;
