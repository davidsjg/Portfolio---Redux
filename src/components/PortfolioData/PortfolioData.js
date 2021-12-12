import React from "react";
import styles from "./PortfolioData.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PortfolioData({ project3 }) {
  return (
    <div className={styles["clones"]}>
      <div className={styles["clonesData"]}>
        <div>
          <p>Clone: {project3.tesla}</p>
          <span>Deployed: </span>
          <a href={project3.teslaDeploy} target="_blank">
            {project3.teslaDeploy}
          </a>
          <p>Tools: {project3.teslaTools}</p>
          <p>Role: Developed front-end</p>
        </div>
        <div>
          <p style={{ borderTop: "3px solid black", marginTop: 0 }}>
            Clone: {project3.amazon}
          </p>
          <span>Deployed: </span>
          <a href={project3.amazonDeploy} target="_blank">
            {project3.amazonDeploy}
          </a>
          <p>Tools: {project3.amazonTools}</p>
          <p>Role: Developed front-end</p>
        </div>
        <div>
          <p style={{ borderTop: "3px solid black", marginTop: 0 }}>
            Clone: {project3.disney}
          </p>
          <span>Deployed: </span>
          <a href={project3.disneyDeploy} target="_blank">
            {project3.disneyDeploy}
          </a>
          <p>Tools: {project3.disneyTools}</p>
          <p>Role: Developed front-end</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioData;
