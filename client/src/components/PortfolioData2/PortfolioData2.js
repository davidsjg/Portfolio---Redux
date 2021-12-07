import React from "react";
import styles from "./PortfolioData2.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function PortfolioData2({ project }) {
  console.log(project.image);
  return (
    <>
      <Col sm={4} style={{ height: 200, width: 200 }}>
        <GridCol bgImage={project.image}>
          <div className={styles["displayData"]}>
            <p>Title: {project.title}</p>
            <p>Summary: {project.summary}</p>
            <p>Role: {project.role}</p>
            <p>Tools: {project.tools}</p>
            <p>
              Github:
              <a href={project.github} target="_blank">
                {project.github}
              </a>
            </p>
            <p>
              Deployed:
              <a href={project.deployed} target="_blank">
                {project.deployed}
              </a>
            </p>
          </div>
        </GridCol>
      </Col>
    </>
  );
}

export default PortfolioData2;

const GridCol = styled.div`
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* height: 400px;
  width: 220px; */
  /* width: 33%; */
  height: min-content;
  box-shadow: inset 0 0 0 1px #c1d3eb;
  border-radius: 24px;
  transition-duration: 167ms;
  text-align: center;
  transition: 250ms;
  opacity: 0.8;
  padding: 40px;
  margin: 20px;
  /* display: flex;
  flex-direction: row;
  flex-wrap: nowrap: */

  :hover {
    background-image: none;
    background-color: #c1d3eb;
    transition: 250ms;
  }
`;
