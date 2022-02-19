import React from "react";
import "../CSS/Routes/home.css";
import { motion } from "framer-motion"
import untitled from "../assets/Untitled.svg"
import landingVideo from "../assets/landingVideo.mp4";

function Home() {

  return (
    <div className="homeBody">

      {/* sub body */}
      <div className="homeSubBody">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: 1}}
          className="homeLeft">
          <p className="homeTopLeft">
            "You are equally <span className="disableText"><span className="disText">dis</span>ABLE</span>"
            <br />
            Giving wings to your dreams.
          </p>
        </motion.div>

        <motion.div 
          className="homeRight"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.5}}
        >
          {/* insert video here */}
          <video src={landingVideo} autoPlay loop muted className="landingVideo" />
        </motion.div>
      </div>
      {/* sub body ends */}

    </div>
  )
}

export default Home;