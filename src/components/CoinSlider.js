import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import CoinCart from "./CoinCart";

export default function CoinSlider() {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
