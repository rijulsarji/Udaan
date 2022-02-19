import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="navbarLinks">Home</Link>
          <Link to="/" className="navbarLinks">About</Link>
          <Link to="/" className="navbarLinks">Jobs</Link>
          <Link to="/" className="navbarLinks">Scholarship</Link>
          <Link to="/" className="navbarLinks">Heroes</Link>
          <Link to="/" className="navbarLinks">NGOs</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;