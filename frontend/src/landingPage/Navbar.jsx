import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to={"/"}>
          <img src="Images/logo.svg" alt="logo" height="20px" />
        </Link>

        {/* Toggler button for mobile screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3 text-muted">
            <li className="nav-item">
              <Link className="nav-link" to={"/signup"}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/products"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/support"}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
