import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import styles from "./ImgSlider.module.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img className={styles["sliderImg"]} src="/images/picTEST.png" />
      </Wrap>
      {/* <Wrap>
        <img className={styles["sliderImg"]} src="/images/slider-badag.jpg" />
      </Wrap> */}
      {/* <Wrap>
        <img className={styles["sliderImg"]} src="/images/pic5.jpg" />
      </Wrap> */}
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  /* margin-top: 20px; */
  position: inherit;
  overflow-x: hidden;
  overflow-y: hidden;
  background-position: center;
  background-size: cover;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    /* background-position: center; */
    background-size: contain;
    width: 100%;
    height: 475px;
    /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    transition-duration: false;
  }

  /* &:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
  } */
`;

// const Wrap = styled.div`
//   border-radius: 4px;
// `;
