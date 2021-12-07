import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div>
      <Container>
        <div className={styles["display"]}></div>
      </Container>
    </div>
  );
}

export default Portfolio;

const Container = styled.div`
  min-height: calc(100vh - 185px);
  background-image: url("/images/pic2.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: end;

  margin: 50px 100px;
  transition: 250ms;
`;
