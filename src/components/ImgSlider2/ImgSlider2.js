import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import styled from "styled-components";
import styles from "./ImgSlider2.module.css";
let slides;

function ImgSlider2({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const showState = () => {
    console.log(slides);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" />
      <FaArrowAltCircleRight className="right-arrow" />
      {slides.map((slide, index) => {
        return <img src={slide.image} alt="mountain image" />;
      })}
    </section>
  );
}

export default ImgSlider2;
