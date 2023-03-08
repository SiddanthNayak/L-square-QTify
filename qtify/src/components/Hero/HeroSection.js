import React from "react";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={style.heroSection}>
      <div className={style.container}>
        <div className={style.heroText}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <img
          className={style.heroImage}
          src="vibrating_headphone.png"
          alt="Headphones"
        />
      </div>
    </div>
  );
};

export default HeroSection;
