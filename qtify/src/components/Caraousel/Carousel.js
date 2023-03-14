import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CarouselButtonNext from "./CarouselButtonNext";
import CarouselButtonPrev from "./CarouselButtonPrev";
import style from "./Carousel.module.css";

const Carousel = ({ songs, renderComponent }) => {
  return (
    <Swiper spaceBetween={40} slidesPerView={"auto"}>
      <CarouselButtonPrev className={style.prevButton} />
      {songs.map((song) => {
        return <SwiperSlide key={song.id}>{renderComponent(song)}</SwiperSlide>;
      })}
      <CarouselButtonNext className={style.nextButton} />
    </Swiper>
  );
};

export default Carousel;
