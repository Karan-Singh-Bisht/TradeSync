import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5 col-12 mb-4">
          <h1 className="">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price
            <br /> transparency in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="#">
            See pricing &nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-md-7 col-12 d-flex flex-wrap justify-content-between">
          <div
            className="d-flex flex-column align-items-center mb-4"
            style={{ width: "30%" }}
          >
            <img
              className="img-fluid"
              style={{ maxWidth: "50%" }}
              src="Images/pricing-eq.svg"
              alt=""
            />
            <p className="text-muted text-center" style={{ fontSize: "12px" }}>
              Free account <br /> opening
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center mb-4"
            style={{ width: "30%" }}
          >
            <img
              className="img-fluid"
              style={{ maxWidth: "50%" }}
              src="Images/pricing-eq.svg"
              alt=""
            />
            <p className="text-muted text-center" style={{ fontSize: "12px" }}>
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center mb-4"
            style={{ width: "30%" }}
          >
            <img
              className="img-fluid"
              style={{ maxWidth: "50%" }}
              src="Images/other-trades.svg"
              alt=""
            />
            <p className="text-muted text-center" style={{ fontSize: "12px" }}>
              Intraday and <br /> F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
