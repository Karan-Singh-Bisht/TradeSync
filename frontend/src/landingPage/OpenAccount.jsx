import React from "react";

function OpenAccount() {
  return (
    <div className="p-5">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className="my-4 text-center  fw-semibold">
              Open a Zerodha account
            </h1>
            <p className="text-center text-muted fs-5">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
            <button
              type="button"
              className=" btn btn-primary my-3"
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

export default OpenAccount;
