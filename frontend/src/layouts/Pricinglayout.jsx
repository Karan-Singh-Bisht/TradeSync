import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../landingPage/Navbar";
import Footer from "../landingPage/Footer";

function Pricinglayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/pricing/tab-equities");
  }, []);
  return (
    <div className="pricing-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Pricinglayout;
