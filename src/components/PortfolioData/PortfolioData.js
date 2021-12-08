import React from "react";
import styles from "./PortfolioData.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PortfolioData({ project }) {
  console.log(project.image);
  return (
    <>
      <GridCol bgImage={project.image}>
        <div className={styles["data1"]}>
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
    </>
  );
}

export default PortfolioData;

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

  :hover {
    background-image: none;
    background-color: #c1d3eb;
    transition: 250ms;
  }
`;
