import React from "react";
import "../CSS/Components/aboutScholar.css"
import { MdArrowLeft, MdOutlineArrowLeft } from "react-icons/md";
import aboutScholarCap from "../assets/aboutScholarCap.png"
import {Link} from "react-router-dom";

function AboutScholar() {

  return (
    <div className="aboutScholarBody">
      <div className="aboutScholarSubBody">
        {/* left side */}
        <div className="aboutScholarLS">
          {/* left box */}
          <div className="aboutScholarBox">
            <img src={aboutScholarCap} />
            <h1>JOBS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>

          {/* right box */}
          <div className="aboutScholarBox">
            <img src={aboutScholarCap} />
            <h1>JOBS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="aboutScholarRS">
          <h1>FUEL YOUR WINGS</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <Link to="/" className="aboutScholarGrab">
            <MdArrowLeft size={24}/>
            <p>GRAB ONE</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutScholar;