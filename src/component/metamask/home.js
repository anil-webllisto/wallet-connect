import React from "react";

const Home = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mx-auto button_metamask_connect mt-5 "
            style={{ height: "220px" }}
          >
            <div className="mt-5">
              <h3 className="text-center mt-4">
                {" "}
                Welcome To Connect Meta Mask Wallet
              </h3>
              <p className="text-center">
                <b>Address :-</b> {props.currentAccount}
              </p>
              <p className="text-center">
                {" "}
                <b>Balance :-</b> &nbsp; &nbsp;{props.currentBalance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
