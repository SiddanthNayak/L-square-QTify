import React from "react";
import { useSwiper } from "swiper/react";
import style from "./Carousel.module.css";
const CarouselButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button
      className={style.carouselPrevButton}
      onClick={() => swiper.slidePrev()}
    >
      &lt;
    </button>
  );
};

export default CarouselButtonPrev;
