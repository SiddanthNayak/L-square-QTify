import React from "react";
import { useSwiper } from "swiper/react";
import style from "./Carousel.module.css";

const CarouselButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button
      className={style.carouselNextButton}
      onClick={() => swiper.slideNext()}
    >
      &gt;
    </button>
  );
};

export default CarouselButtonNext;
