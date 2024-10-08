import React from "react";

function Awards() {
  return (
    <div className="container mt-4 p-5" style={{ marginBottom: "3vw" }}>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img
            className="img-fluid"
            src="Images/largestBroker.svg"
            alt="Award SVG"
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-3">
          <h1 className="mb-3">Largest Stock Broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order <br />
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 mt-4">
              <ul>
                <li className="mb-3">Futures and Options</li>
                <li className="mb-3">Commodity Derivatives</li>
                <li className="mb-3">Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6 mt-4 mb-3">
              <ul>
                <li className="mb-3">Stocks and IPOs</li>
                <li className="mb-3">Direct Mutual Funds</li>
                <li className="mb-3">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            className="img-fluid"
            style={{ width: "90%" }}
            src="Images/pressLogos.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
