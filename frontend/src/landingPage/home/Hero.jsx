import React from "react";

function Hero() {
  return (
    <div className="p-5">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="/Images/homeHero.png"
              alt="Hero Image"
              className="img-fluid mb-5"
            />
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className="mt-5 fw-semibold">Invest in everything</h1>
            <p className="text-center fs-4">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <button
              type="button"
              className="btn btn-primary my-3"
              style={{ width: "150px" }} // You can set a fixed width or use Bootstrap's sizing classes like "col-md-2" etc.
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
