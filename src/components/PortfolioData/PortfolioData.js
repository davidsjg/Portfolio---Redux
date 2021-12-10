import React from "react";
import styles from "./PortfolioData.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PortfolioData({ project3 }) {
  return (
    <div className={styles["clones"]}>
      <div className={styles["clonesData"]}>
        <p>Clone: {project3.tesla}</p>
        <p>Deployed: {project3.teslaDeploy}</p>
        <a href={project3.teslaDeploy} target="_blank">
          {project3.teslaDeploy}
        </a>
        <p>Tools: {project3.teslaTools}</p>
        <p>Clone: {project3.amazon}</p>
        <a href={project3.amazonDeploy} target="_blank">
          {project3.amazonDeploy}
        </a>
        <p>Tools: {project3.amazonTools}</p>
        <p>Clone: {project3.disney}</p>
        <a href={project3.disneyDeploy} target="_blank">
          {project3.disneyDeploy}
        </a>
        <p>Tools: {project3.disneyTools}</p>
      </div>
    </div>
  );
}

export default PortfolioData;
