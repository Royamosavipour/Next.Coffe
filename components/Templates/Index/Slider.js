import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/Slider.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        // rewind={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        classNameName={styles.swiper}
      >
        <SwiperSlide
          classNameName={styles.swiper_slide}
          style={{ backgroundImage: 'url("/images/carousel-1.jpg")' }}
        >
          <div
            className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
          >
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide
          classNameName={styles.swiper_slide}
          style={{ backgroundImage: 'url("/images/carousel-2.jpg")' }}
        >
          <div
            className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
          >
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
