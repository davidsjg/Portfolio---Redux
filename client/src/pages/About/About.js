import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styles from "./About.module.css";

function About() {
  return (
    <div>
      {/* <div className={styles["mainContain"]}></div> */}
      <Container>
        {/* <div className={["display"]}></div> */}
        <Link to="/" className={styles["homeLink"]}>
          <div className={styles["homeButton"]}>Return Home</div>
        </Link>
        <div className={styles["display"]}>
          <div>
            <p>WHAT'S UP EVERYBODY</p>
            <br />
            <p>My name is Joey Davidson</p>
            <br />
            <p>
              I enjoy music, the outdoors, and trying to recreate websites that
              have interesting designs
            </p>
          </div>
          <div>
            <p>Thank you for visiting my Profile Page</p>
            <p>
              Please have
              <Link to="/portfolio" className={styles["lookAround"]}>
                <span> a look around</span>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;

const Container = styled.div`
  min-height: calc(100vh - 185px);
  background-image: url("/images/pic3.JPG");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-between;

  margin: 50px 100px;
  transition: 250ms;
`;
