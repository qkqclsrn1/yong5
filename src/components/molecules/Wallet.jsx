import React, { useState } from "react";

const wallet = () => {
  const [account, setAccount] = useState(null);
  const [connectButton, setConnectButton] = useState("Connect Wallet");
  // const [walletAddress, SetWalletAddress] = useState("")

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      alert("Please install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setAccount(newAccount);
  };
  const chainChangeHandler = (chainId) => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangeHandler);
  window.ethereum.on("chainChanged", chainChangeHandler);
};
export default wallet;
