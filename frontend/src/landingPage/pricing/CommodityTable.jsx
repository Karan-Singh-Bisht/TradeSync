import React from "react";
import { NavLink } from "react-router-dom";

function CommodityCharges() {
  return (
    <div className="container my-5">
      <div className="border-bottom mb-5">
        <div className="d-flex justify-content-center flex-wrap">
          <NavLink
            to={"/pricing/tab-equities"}
            className="text-center mb-4 px-4 py-2"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
              borderBottom: isActive ? "2px solid blue" : "none",
              fontSize: "1.5rem",
              textDecoration: "none",
              transition: "color 0.3s, border-bottom 0.3s",
            })}
          >
            Equity
          </NavLink>

          <NavLink
            to={"/pricing/tab-currency"}
            className="text-center mb-4 px-4 py-2"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
              borderBottom: isActive ? "2px solid blue" : "none",
              fontSize: "1.5rem",
              textDecoration: "none",
              transition: "color 0.3s, border-bottom 0.3s",
            })}
          >
            Currency
          </NavLink>

          <NavLink
            to={"/pricing/tab-commodities"}
            className="text-center mb-4 px-4 py-2"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
              borderBottom: isActive ? "2px solid blue" : "none",
              fontSize: "1.5rem",
              textDecoration: "none",
              transition: "color 0.3s, border-bottom 0.3s",
            })}
          >
            Commodity
          </NavLink>
        </div>
      </div>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">Commodity futures</th>
            <th scope="col">Commodity options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>
          <tr>
            <td>0.01% on sell side (Non-Agri)</td>
            <td>0.05% on sell side</td>
          </tr>
          <tr>
            <td>
              <strong>Group A:</strong> <br />
              Exchange txn charge: 0.0021% <br />
              <strong>Group B:</strong> <br />
              Exchange txn charge: <br />
              CASTORSEED - 0.0005% <br />
              KAPAS - 0.0026% <br />
              PEPPER - 0.00005% <br />
              RBDPMOLEIN - 0.001%
            </td>
            <td>Exchange txn charge: 0.0418%</td>
          </tr>
          <tr>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>
              Agri: ₹1 / crore <br />
              Non-agri: ₹10 / crore
            </td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CommodityCharges;
