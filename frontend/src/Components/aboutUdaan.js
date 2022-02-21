import React, { useEffect } from "react";
import "../CSS/Components/aboutUdaan.css";
import aboutUdaanImg from "../assets/aboutUdaanImg.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUdaan() {
  
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
    <div className="aboutUdaanBody" ref={ref}>
      <motion.div animate={animation} className="aboutUdaanSubBody">
        <img src={aboutUdaanImg} className="aboutUdaanImg" alt="children"/>
        <p className="aboutUdaanPara">
          <span>UDAAN</span>, ONE-STOP PLATFORM THAT NOT ONLY HELPS YOU FIND YOUR UNEXPLORED
          WINGS BUT ALSO LENDS HAND IN SETTING YOUR FLIGHT IN THE BEST
          DIRECTION. <span>UDAAN</span> CONNECTS THE TECHNOLOGY TO THE NEEDS OF ALL OUR
          SPECIALLY-ABLED FRIENDS AND WAVES OFF TO THE MAZE-LIKE WEB PAGES. JUST
          THE ZEAL TO CONQUER YOUR DREAMS IS THE INPUT REQUIRED, REST <span>UDAAN</span> WILL
          TAKE CARE OF. BRINGING A SMILE ON THE FACE AND PRIDE IN THE EYES OF
          EVERY SPECIALLY-ABLED INDIVIDUAL IS THE MISSION AND VISION OF <span>UDAAN</span>.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutUdaan;