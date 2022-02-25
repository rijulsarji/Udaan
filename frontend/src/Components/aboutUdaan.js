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
        <img src={aboutUdaanImg} className="aboutUdaanImg" alt="children" />
        <p className="aboutUdaanPara">
          <span>UDAAN</span>, one-stop platform that not only helps you find
          your unexplored wings but also lends hand in setting your flight in
          the best direction. Udaan connects the technology to the needs of all
          our specially-abled friends and waves off to the maze-like web pages.
          Just the zeal to conquer your dreams is the input required, rest Udaan
          will take care of. Bringing a smile on the face and pride in the eyes
          of every specially-abled individual is the mission and vision of
          Udaan.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutUdaan;