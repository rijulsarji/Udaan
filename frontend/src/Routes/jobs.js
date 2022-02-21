import React from "react";
import "../CSS/Routes/jobs.css"
import {FaSearch} from "react-icons/fa";

function Jobs() {

  return (
    <div className="jobBody">

      {/* search box */}
      <div className="jobSearch">
        <div className="jobSearchOutline">
          <FaSearch className="jobSearchIcon"/>
          <input type="text" placeholder="Enter your search" />
        </div>
      </div>
        

    </div>
  )
}

export default Jobs;