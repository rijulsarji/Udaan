import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../CSS/Components/heroStory.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function HeroStory() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        // grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 200,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        breakpoints={{
          230: {
            rotate: 10,
            slidesPerView: 2,
            spaceBetween: 45,
          },
          1024: {
            slidesPerView: 3,
            rotate: 50,
            spaceBetween: 30,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="heroSwiperContainer"
      >
        <SwiperSlide
          style={{ backgroundColor: "#8282FF" }}
          className="mySwiper"
        >
          <div className="leftdiv">
            <h2>IRA SENGAL</h2>
            <p>
              Ira Singhal was born on 31st August 1983 in Meerut. She has
              scoliosis Disease, which is why she can’t walk properly and has
              short height. She attempted in UPSE exams and scored 1,082 marks
              out of 2025 and secured 53.43% in 2014-2015. Despite achieving
              exams in the first attempt in 2010, she was not allowed to take a
              position. Era filed a case in the Central Administrative Tribunal
              (CAT) and won after 4 years. In 2015 IAS. Ira showed her potential
              to People who demoralized her and rejected her from her deserved a
              post. She is a face for disabled persons, and also for all human
              beings. That nothing is impossible for the desired one.
            </p>
          </div>
          <div className="rightdiv">
            <img src="https://www.shethepeople.tv/wp-content/uploads/2015/12/11221290_10153564643961280_5855286294274909402_n.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "#FF2D7E" }}
          className="mySwiper"
        >
          <div className="leftdiv">
            <h2>
              A visually impaired man who became a painter after losing his
              sight
            </h2>
            <p>
              John Bramblitt, 44, from Denton, Texas lost his eyesight in 2001
              due to epilepsy and Lyme's disease. He gradually learned to work
              on canvas using haptic visualization and found his true calling.
              In hindsight, Bamblitt realized the experience made him happier
              than before. “It wasn't until after I lost my eyesight that I
              wasn't afraid to fail anymore. The first step into my art career
              was going blind. And I'm happier than I've ever been in my life,”
              he says in a video.
            </p>
          </div>
          <div className="rightdiv">
            <img src="https://miro.medium.com/max/1400/0*bIhlabgoeyN-_N5s.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "#00BBFF" }}
          className="mySwiper"
        >
          <div className="leftdiv">
            <h2>
              Himani Bundela: The Crorepati who won India’s heart & wants to
              coach divyang kids
            </h2>
            <p>
              Himani Bundela, a visually impaired math teacher based in Agra,
              became the first crorepati of Kaun Banega Crorepati’s Season 13.
              After being selected from the hot seat by the show’s host Amitabh
              Bachchan, the 25-year-old went on to answer a series of questions.
              Born and raised in Agra, when she was 15, Himani lost her vision
              to an accident.While she recovered well, for the following six
              months, she had a tough time accepting her new lifestyle and
              slipped into a depression. But the challenges did not stop here.
              When Himani tried to apply for college, she was rejected in
              various institutions owing to her disability. Winning KBC she has
              proven that we become only by thoughts.
            </p>
          </div>
          <div className="rightdiv">
            <img src="https://images.hindustantimes.com/img/2021/08/31/550x309/KBC_first_Crorepati_1630375446283_1630375446527.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}