import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Components/navbar.css";

// image import
import udaanLogo from "../assets/udaanLogo.png";

function Navbar() {
  
  return (
    <div className="navbarBody">

      {/* left side of navbar */}
      <div className="leftNavbarSide"></div>
        <img src={udaanLogo} alt="udaan Logo" className="navbarUdaanLogo"/>

      {/* right side of navbar */}
      <div className="rightNavbarSide">
        <div className="navbarLinkContainer">
          <NavLink activeClassName="active" to="/" className="navbarLinks">Home</NavLink>
          <NavLink activeClassName="active" to="/" className="navbarLinks">About</NavLink>
          <NavLink activeClassName="active" to="/jobs" className="navbarLinks">Jobs</NavLink>
          <NavLink activeClassName="active" to="/scholarships" className="navbarLinks">Scholarship</NavLink>
          <NavLink activeClassName="active" to="/" className="navbarLinks">Heroes</NavLink>
          <NavLink activeClassName="active" to="/" className="navbarLinks">NGOs</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;