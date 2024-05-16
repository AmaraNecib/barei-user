import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './globals.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from "next/image";
// import ba2 from "../../../public/images/ba2.jpg";
// import r1 from "../../../public/images/r1.jpg"
// import r5 from "../../../public/images/r5.jpg"
// import r2 from "../../../public/images/r2.jpg"
// import r3 from "../../../public/images/r3.jpg"
// import r4 from "../../../public/images/r4.jpg"
export default function Slide() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image src={r1} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={r2} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={r3} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={r4} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={r5} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
