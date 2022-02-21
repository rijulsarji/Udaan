import React from "react";
import "../CSS/Routes/scholarships.css";
import { FaSearch } from "react-icons/fa";

function Scholarships() {

  return (
    <div className="scholarshipBody">
      
      {/* search box */}
      <div className="scholarshipSearch">
        <div className="scholarshipSearchOutline">
          <FaSearch className="scholarshipSearchIcon" />
          <input type="text" placeholder="Enter your search" />
        </div>
      </div>

    </div>
  );
}

export default Scholarships;