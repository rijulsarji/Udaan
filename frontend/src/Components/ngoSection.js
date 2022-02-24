import React, { useEffect, useState } from "react";
import "../CSS/Components/ngoSection.css"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function NGOsection() {

  const [apiData, setApiData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("http://project-udaan.herokuapp.com/api/ngos")
      .then(response => response.json())
      .then(data => {
        setApiData(data)
        setLoad(false)
      })
  })

  // install Swiper modules
  SwiperCore.use([Mousewheel, EffectCoverflow, Pagination]);

  return (
    <div>
      <div className="ngoSubBody">
        {!load ? (
          <Swiper
            effect={"coverflow"}
            mousewheel={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, type: "bullets" }}
            breakpoints={{
              230: {
                rotate: 10,
                slidesPerView: 2,
                spaceBetween: 45,
              },
              1024: {
                rotate: 50,
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="projectContainer"
          >
            {apiData.map(data => (
              <div>
                <SwiperSlide className="projectCardHolder">
                  <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>

          ) : <p>Loading...</p>
        }
      </div>
    </div>
  );
}

export default NGOsection;