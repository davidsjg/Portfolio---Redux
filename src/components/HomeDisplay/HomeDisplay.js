import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeDisplay.module.css";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { LazyImage } from "../LazyImage/LazyImage";

function HomeDisplay() {
  const [tempBack, setTempBack] = useState("https://i.imgur.com/7QCcOFm.jpg");

  useEffect(() => {}, []);

  const mouseEnter1 = () => {
    setTempBack("https://i.imgur.com/Vd7pInL.jpg");
  };

  const mouseLeave1 = () => {
    setTempBack("https://i.imgur.com/7QCcOFm.jpg");
  };
  const mouseEnter2 = () => {
    setTempBack("https://i.imgur.com/YxzpERh.jpg");
  };

  const mouseLeave2 = () => {
    setTempBack("https://i.imgur.com/7QCcOFm.jpg");
  };
  const mouseEnter3 = () => {
    setTempBack("https://i.imgur.com/anHPZ70.jpg");
  };

  const mouseLeave3 = () => {
    setTempBack("https://i.imgur.com/7QCcOFm.jpg");
  };

  return (
    <>
      <LazyImage />
      <div className={styles["mainDiv"]}>
        <Container bgImage={tempBack}>
          <Fade side className={styles["fade"]}>
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Wrap onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
                <p>About Me</p>
              </Wrap>
            </Link>
            <Link
              to="/portfolio"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Wrap onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}>
                <p>Portfolio Page</p>
              </Wrap>
            </Link>
            <Link
              to="/contact"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Wrap onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3}>
                <p className={styles["contactP"]}>Contact Me</p>
              </Wrap>
            </Link>
          </Fade>
        </Container>
      </div>
    </>
  );
}

export default HomeDisplay;

const Container = styled.div`
  min-height: calc(100vh - 185px);
  background-image: ${(props) => `url("${props.bgImage}")`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  grid-gap: 1rem;

  margin: 50px;
  grid-gap: 45px;
  transition: 250ms;

  @media (max-width: 768px) {
    min-height: calc(100vh - 285px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 50px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
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
    background-size: contain;
    border-radius: 2px;
  }

  &:hover {
    transform: scale(1.05);
    p {
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
