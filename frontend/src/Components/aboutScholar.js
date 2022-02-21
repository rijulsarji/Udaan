import React, { useEffect } from "react";
import "../CSS/Components/aboutScholar.css"
import { MdArrowLeft } from "react-icons/md";
import aboutScholarCap from "../assets/aboutScholarCap.png"
import {Link} from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutScholar() {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  });

  return (
    <div className="aboutScholarBody" ref={ref}>
      <motion.div animate={animation} className="aboutScholarSubBody">
        {/* left side */}
        <div className="aboutScholarLS">
          {/* left box */}
          <div className="aboutScholarBox">
            <img src={aboutScholarCap} alt="scholar cap"/>
            <h1>JOBS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>

          {/* right box */}
          <div className="aboutScholarBox">
            <img src={aboutScholarCap} alt="scholar cap"/>
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
            Zeal to achieve your dreams, automatically opens the path to
            opportunities. Let no materialistic hurdle like money stop you from
            scaling your success. Filter out the best suitable scholarship
            options to fuel up your wings and prepare you for your highest
            flight.
          </p>
          <Link to="/" className="aboutScholarGrab">
            <MdArrowLeft size={24} />
            <p>GRAB ONE</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutScholar;