import React, { useState } from "react";
import KaikasWalletInfo from "./kaikas-wallet-info";

import Login from "./login";

const KaikasWalletConnect = () => {
  const [isConnectWallet, setIsConnectWallet] = useState(false);
  const [curentaddresskaikas, setCurrentAdddressKaikas] = useState(null);
  const [currentbalancekaikas, setCurrentBalanceKaikas] = useState(null);

  const onLoginKaikas = async (provider) => {
    const klaytn = window.klaytn;
    const accounts = await klaytn.enable();
    const account = accounts[0];

    const balance = await window.caver.klay.getBalance(account);
    setCurrentBalanceKaikas(balance);

    if (accounts.length === 0) {
      console.log("Please Connect to Meta Mask");
    } else if (accounts[0] !== curentaddresskaikas) {
      setCurrentAdddressKaikas(accounts[0]);
      setIsConnectWallet(true);
    }
  };

  const onLogoutkaikas = () => {
    setIsConnectWallet(false);
  };

  return (
    <>
      {!isConnectWallet && (
        <Login onLoginKaikas={onLoginKaikas} onLogoutkaikas={onLogoutkaikas} />
      )}
      {isConnectWallet && (
        <KaikasWalletInfo
          curentaddresskaikas={curentaddresskaikas}
          currentbalancekaikas={currentbalancekaikas}
        />
      )}
    </>
  );
};
export default KaikasWalletConnect;
