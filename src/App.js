import React from "react";
import KaikasWalletConnect from "./component/kaikas/kaikas-wallet-connect";
import WalletConnectConnector from "./component/metamask/wallet-connect";

function App() {
  return (
    <div className="App">
      <WalletConnectConnector />
      <KaikasWalletConnect />
    </div>
  );
}

export default App;
