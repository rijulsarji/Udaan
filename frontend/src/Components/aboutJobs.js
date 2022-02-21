import React from "react";
import "../CSS/Components/aboutJobs.css"
import {MdArrowRight, MdArrowRightAlt} from "react-icons/md";
import aboutJobsBox1 from "../assets/aboutJobsBox1.png"
import aboutJobsBox2 from "../assets/aboutJobsBox2.png"
import {Link} from "react-router-dom"

function AboutJobs() {

  return (
    <div className="aboutJobsBody">
      <div className="aboutJobsSubBody">
        {/* left side */}
        <div className="aboutJobsLS">
          <h1>GET. SET. FLY!</h1>
          <p>
            No amount of barriers can disable your abilities. Enable  your
            abilities, come explore the world of job opportunities with Udaan
            and give your career the start which you always wanted to.
          </p>
          <Link to="/" className="aboutJobsDive">
              <p>DIVE IN</p>
              <MdArrowRight size={24} />
          </Link>
        </div>

        {/* right side */}
        <div className="aboutJobsRS">

          {/* LEFT BOX */}
          <div className="aboutJobsBox">
            <img src={aboutJobsBox1} />
            <h1>SPORTS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>

          {/* RIGHT BOX */}
          <div className="aboutJobsBox">
            <img src={aboutJobsBox2} />
            <h1>JOBS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutJobs;