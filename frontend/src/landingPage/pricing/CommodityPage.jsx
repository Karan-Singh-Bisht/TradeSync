import React from "react";
import CommodityCharges from "./CommodityTable";
import Hero from "./Hero";

function CommodityPage() {
  return (
    <div className="container">
      <Hero />
      <CommodityCharges />
    </div>
  );
}

export default CommodityPage;
