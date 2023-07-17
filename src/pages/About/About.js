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
            <p>HELLO EVERYONE</p>
            <p>My name is Joey Davidson</p>
            <p>
              I enjoy music, the outdoors, and trying to recreate websites that
              have interesting designs
            </p>
            <p>
              I am currently a Full Stack Application Developer for Zayo Group.
            </p>
            <p>
              I enjoy coding in Java and JavaScript(React), as well as learning new languages
            </p>
          </div>
          <div className={styles["thankSection"]}>
            <p className={styles["mediaColor"]}>
              Thank you for visiting my Profile Page
            </p>
            <p className={styles["mediaColor"]}>
              Please have a{" "}
              <Link to="/portfolio" className={styles["lookAround"]}>
                <span>look around</span>
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
  background-image: url("https://i.imgur.com/Vd7pInL.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-between;

  margin: 50px 100px;
  transition: 250ms;
`;
