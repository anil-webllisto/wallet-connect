import React from "react";

const KaikasWalletInfo = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mx-auto button_metamask_connect mt-5"
            style={{ height: "220px" }}
          >
            <h2 className="text-center mt-4">
              {" "}
              Welcome To Connect kaikas Wallet
            </h2>
            <p className="text-center">
              <b>Address :-</b> {props.curentaddresskaikas}
            </p>
            <p className="text-center">
              {" "}
              <b>Balance :-</b> &nbsp; &nbsp;{props.currentbalancekaikas}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KaikasWalletInfo;
