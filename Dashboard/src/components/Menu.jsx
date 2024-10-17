import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "black",
              })}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/orders"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "black",
              })}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/holdings"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "black",
              })}
            >
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/positions"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "black",
              })}
            >
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/funds"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "black",
              })}
            >
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/apps"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "black",
              })}
            >
              Apps
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
