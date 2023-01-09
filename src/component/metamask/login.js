import React, { useState } from "react";
import "./wallet-connect.css";

const Login = (props) => {
  const [isConnecting, setIsConnecting] = useState();

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      setIsConnecting(true);

      await provider.request({
        method: "eth_requestAccounts",
      });
      setIsConnecting(true);
    }
    props.onLogin(provider);
  };

  return (
    <>
      <div
        className=" col-lg-6  text-center mt-5 button_metamask_connect mx-auto "
        style={{ height: "120px" }}
      >
        <button
          type="button"
          className="btn btn button_design mt-5"
          onClick={onLoginHandler}
        >
          {!isConnecting && "Metamask-Wallet"}
          {isConnecting && "Loading..."}
        </button>
      </div>
    </>
  );
};

export default Login;
