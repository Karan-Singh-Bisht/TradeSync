import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="d-flex">
          <div className="col-4 p-3 mt-5">
            <div className="m-3">
              <img
                style={{ width: "150px" }}
                src="Images/zerodhafundhouse.png"
              />
            </div>
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <div className="m-3">
              <img style={{ width: "150px" }} src="Images/sensibull-logo.svg" />
            </div>
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <div className="m-3">
              <img style={{ width: "150px" }} src="Images/tijori.svg" />
            </div>
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="col-4 p-3 mt-5">
            <div className="m-3">
              <img style={{ width: "150px" }} src="Images/streakLogo.png" />
            </div>
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <div className="m-3">
              <img style={{ width: "150px" }} src="Images/smallcaseLogo.png" />
            </div>
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <div className="m-3">
              <img style={{ width: "150px" }} src="Images/dittoLogo.png" />
            </div>
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
