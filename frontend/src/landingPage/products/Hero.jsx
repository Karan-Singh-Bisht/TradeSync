import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row justify-content-center text-center mt-5 p-3">
        <div className="col-12 col-md-8">
          <h1 className="display-4">Technology</h1>
          <h3 className="text-muted mt-3 fs-4">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mt-3 mb-5">
            Check out our{" "}
            <Link to={"#"} className="text-decoration-none">
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
