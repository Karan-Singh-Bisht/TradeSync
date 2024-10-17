import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row p-5 mt-5 text-center">
        <h1>Charges</h1>
        <h3 className="text-muted mt-3 fs-5">List of all charges and taxes</h3>
      </div>

      {/* Charges List Section */}
      <div className="row p-5 mt-5 text-center">
        {/* Free equity delivery */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="/Images/pricing0.svg"
            className="img-fluid"
            alt="Free equity delivery"
          />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Intraday and F&O trades */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="/Images/other-trades.svg"
            className="img-fluid"
            alt="Intraday and F&O trades"
          />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Free direct MF */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="/Images/pricing-eq.svg"
            className="img-fluid"
            alt="Free direct MF"
          />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
