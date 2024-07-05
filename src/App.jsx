import './App.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function App() {
  return (
    <div className="App">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/111/mxhrKsDIFOqTRktmU9ePeeEa3fWoW7ptCAoTk9Xs.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/108/Z1Pw658wuwtTE8KHdzYd1M2ey3EwYfvPQNba0zEN.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/118/8yRTlnTTM6rNp6klpf7EJ6tQcdnXiRjlKG4L4cuv.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/109/rSYjleV3QA8LwkojUcuwOrTogS7oxhrQcJj2cktJ.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/96/Nv7EVudQJrzoKTjL0OTUhObeR6JbiZ9OSTUN87UL.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/115/tQrsUmBLrHfiU7X4LZNIYRrH1Z5fkw4ICEQI3068.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/119/bl6rLX5OjbTyFVaodNMROHOjbyGmjCQScR3QZ5rH.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mini-io-api.texnomart.uz/newcontent/slider/117/o9Hth86Ottyj3f4XkvCZ6izNcyd5FAW3pYFDt3I8.webp" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
