import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Product Details Section */}
        <div className="col-12 col-md-6 p-md-5" style={{ padding: "20px" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="d-flex flex-column flex-md-row gap-4">
            {/* Learn More and App Store */}
            <div className="d-flex flex-column gap-4 mt-4 mt-md-0">
              <a style={{ textDecoration: "none" }} href={learnMore}>
                Learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div
          className="col-12 col-md-6 mb-4 mb-md-0"
          style={{ padding: "20px" }}
        >
          <img
            className="img-fluid object-fit-cover"
            src={imageURL}
            alt="product"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
