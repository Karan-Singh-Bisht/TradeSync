import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="Images/logo.svg" alt="logo" height="20px" />
        </a>

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
              <a className="nav-link" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
