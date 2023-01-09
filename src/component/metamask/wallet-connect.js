import React, { useState } from "react";
import Home from "../metamask/home";
import Login from "../metamask/login";
import Web3 from "web3";
import "./wallet-connect.css";

const WalletConnectConnector = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(null);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    const balance = await web3.eth.getBalance(accounts[0]);
    const amount = web3.utils.fromWei(balance);
    setCurrentBalance(amount);

    if (accounts.length === 0) {
      console.log("Please Connect to Meta Mask");
      alert("meta mask connect")
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ background: "#741188" }}>
          <div className="col-lg-6 text-light mt-3 mb-3">
            <h4>React & web3</h4>{" "}
          </div>
          <div className="col-lg-6 text-light mt-3 mb-3 text-end ">
            <p>{currentAccount}</p>
          </div>
        </div>
      </div>

      {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
      {isConnected && (
        <Home currentAccount={currentAccount} currentBalance={currentBalance} />
      )}
    </>
  );
};
export default WalletConnectConnector;
