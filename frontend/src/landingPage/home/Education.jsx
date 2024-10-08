import React from "react";

function Education() {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-md-6 col-12 mb-4">
          <img
            src="Images/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12">
          <h2 className="mb-3">Free and open market education</h2>
          <p className="text-muted mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a style={{ textDecoration: "none" }} href="#">
            Varsity &nbsp; <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted my-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a style={{ textDecoration: "none" }} href="#">
            Trading Q&A &nbsp; <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
