import React from "react";
import "../CSS/Routes/home.css";
import { motion } from "framer-motion"
import landingGif from "../assets/landingVideo.gif";

// component imports
import AboutUdaan from "../Components/aboutUdaan";
import AboutJobs from "../Components/aboutJobs";
import AboutScholar from "../Components/aboutScholar";
import Heroes from "../Components/heroes";
import Footer from "../Components/footer";

function Home() {

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="homeBody">

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
          {/* <video src={landingVideo} autoPlay loop muted className="landingVideo" /> */}
          <img src={landingGif} className="landingVideo" alt="kids gif"/>
        </motion.div>
      </div>
      {/* sub body ends */}

      {/* about udaan */}
      <AboutUdaan />

      {/* about jobs */}
      <AboutJobs />

      {/* about scholarships */}
      <AboutScholar />

      {/* heroes */}
      <Heroes />

      {/* footer */}
      <Footer />

    </motion.div>
  )
}

export default Home;