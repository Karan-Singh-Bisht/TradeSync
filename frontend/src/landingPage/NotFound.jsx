import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function NotFound() {
  return (
    <div className="container">
      <Navbar />
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h1 className="mt-5">404 Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
