import React from "react";
import { NavLink } from "react-router-dom";

function CurrencyTable() {
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

      <div className="table-responsive mt-5">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Currency futures</th>
              <th scope="col">Currency options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.03% or ₹ 20/executed order whichever is lower</td>
              <td>₹ 20/executed order</td>
            </tr>
            <tr>
              <td>No STT</td>
              <td>No STT</td>
            </tr>
            <tr>
              <td>
                NSE: <br />
                Exchange txn charge: 0.00035% <br />
                BSE: <br />
                Exchange txn charge: 0.00045%
              </td>
              <td>
                NSE: <br />
                Exchange txn charge: 0.0311% <br />
                BSE: <br />
                Exchange txn charge: 0.001%
              </td>
            </tr>
            <tr>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrencyTable;
