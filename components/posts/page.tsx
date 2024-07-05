"use client";

import React from "react";
import styles from "./posts.module.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const SocialPosts = () => {
  return (
    <div>
      <div className={styles.container} id="social">
        <div className={styles.content}>
          <h1>Social Posts</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            className={styles.middle}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            spaceBetween={50}
            slidesPerView={4}
            width={1350}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className={styles.card}>
              <img src="/makeup1.jpg" alt="" />
              <p>How to rock the lip look that turns heads</p>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src="/img2.png" alt="" style={{ width: "100%" }} />
              <p>Find the perfect shade for the season</p>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src="/img3.png" alt="" style={{ width: "100%" }} />
              <p>The 5 eye shadow secrets you never knew</p>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src="/makeup3.jpg" alt="" style={{ width: "100%" }} />
              <p>How to rock the lip look that turns heads</p>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src="/makeup2.jpg" alt="" style={{ width: "100%" }} />
              <p>The 5 eye shadow secrets you never knew</p>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src="/makeup4.jpg" alt="" style={{ width: "100%" }} />
              <p>The pro-tips for at home hair dying</p>
            </SwiperSlide>
          </Swiper>

          <button>
            <span>FOLLOW US ON INSTAGRAM</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialPosts;
