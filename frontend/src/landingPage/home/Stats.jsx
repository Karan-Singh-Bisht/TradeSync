import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-md-12 col-lg-6">
          <h1 className="my-5">
            <strong>Trust with Confidence</strong>
          </h1>
          <h3 className="mt-4">Customer-first Always</h3>
          <p className="text-muted mb-4">
            That's why 1.5+ crore customers trust Zerodha with <br />
            ₹4.5+ lakh crores of equity investments and contribute to <br />
            15% of daily retail exchange volumes in India.
          </p>
          <h3>No spam or gimmicks</h3>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push
            <br />
            notifications. High quality apps that you use at your
            <br /> pace, the way you like.
          </p>
          <h3>The Zerodha Universe</h3>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments <br />
            in 30+ fintech startups offer you tailored services
            <br /> specific to your needs.
          </p>
          <h3>Do better with money</h3>
          <p className="text-muted mb-4">
            With initiatives like{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Nudge
            </a>{" "}
            and{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Kill Switch
            </a>
            , we don't just
            <br />
            facilitate transactions, but actively help you do better
            <br /> with your money.
          </p>
        </div>
        <div className="col-md-12 col-lg-6">
          <img
            className="img-fluid mt-5"
            src="Images/ecosystem.png"
            alt="Technology Image"
          />
          <div className="row text-center mt-3">
            <div className="col">
              <a
                style={{ textDecoration: "none", marginRight: "2vw" }}
                href="#"
              >
                Explore Our Products <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                Try Kite Demo <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
