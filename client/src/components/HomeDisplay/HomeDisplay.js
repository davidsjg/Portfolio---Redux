import React, { useEffect, useState } from "react";
import styles from "./HomeDisplay.module.css";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function HomeDisplay() {
  const [tempBack, setTempBack] = useState("pic1.jpg");

  useEffect(() => {}, []);

  const mouseEnter1 = () => {
    setTempBack("pic2.jpg");
  };

  const mouseLeave1 = () => {
    setTempBack("pic1.jpg");
  };
  const mouseEnter2 = () => {
    setTempBack("pic3.jpg");
  };

  const mouseLeave2 = () => {
    setTempBack("pic1.jpg");
  };
  const mouseEnter3 = () => {
    setTempBack("pic5.jpg");
  };

  const mouseLeave3 = () => {
    setTempBack("pic1.jpg");
  };

  return (
    <div className={styles["mainDiv"]}>
      {/* <div className={styles[`${tempBack}`]}></div> */}
      <Container bgImage={tempBack}>
        <Fade side>
          {/* <div className={`${styles["myWrap"]} ${styles["frame1"]}`}> */}
          <Wrap onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
            <p>About Me</p>
          </Wrap>
          {/* </div> */}
          {/* <div className={styles["myWrap"]}> */}
          <Wrap onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}>
            <p>Portfolio Page</p>
          </Wrap>
          {/* </div> */}
          {/* <div className={styles["myWrap"]}> */}
          <Wrap onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3}>
            <p>Contact Me</p>
          </Wrap>
          {/* </div> */}
        </Fade>
      </Container>
    </div>
  );
}

export default HomeDisplay;

const Container = styled.div`
  min-height: calc(100vh - 185px);
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template: repeat(3, minmax(0, 1fr));
  display: flex;
  justify-content: center;
  margin: 50px;
  grid-gap: 45px;
  transition: 250ms;
  /* border-radius: 400px; */
`;

const Wrap = styled.div`
  display: flex;
  /* justify-content: center; */
  /* margin: 50%50%; */
  margin-top: 250px;

  /* border: 1px solid lightgray; */
  cursor: pointer;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 12%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-weight: 100;
    padding: 0 20px;
    color: black;
    // background-color: white;
    background-size: contain;
    border-radius: 2px;
  }

  &:hover {
    /* border: 1px solid black; */
    /* box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
      rgb(0 0 0 / 72%) 0px 16px 10px -10px; */
    transform: scale(1.05);
    /* border-color: black; */
    /* background-color: white; */
    p {
      font-weight: 400;
    }
  }
`;
