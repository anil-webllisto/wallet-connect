import React, { useState } from "react";
import Caver from "caver-js";

const Login = (props) => {
  const [isconnects, setIsConnects] = useState();

  const onLoginHandleKaikas = async () => {
    try {
      if (window.klaytn) {
        const caver = new Caver(window.klaytn);
        setIsConnects(true);
        await window.klaytn.enable();
        props.onLoginKaikas();
        setIsConnects(false);
        return caver;
      } else {
        const provider = new Caver.providers.HttpProvider(
          ` https://scope.klaytn.com`
        );
        const caver = new Caver(provider);
        return caver;
      }
    } catch (error) {
      // throw new Error(err.message);
    }
  };

  return (
    <>
      <div
        className=" col-lg-6  text-center mt-5 button_metamask_connect mx-auto "
        style={{ height: "120px" }}
      >
        <button
          type="button"
          className="btn btn button_design mt-5 "
          onClick={onLoginHandleKaikas}
        >
          {!isconnects && " Kaikas-Wallet"}
          {isconnects && "Loading..."}
        </button>
      </div>
    </>
  );
};

export default Login;
