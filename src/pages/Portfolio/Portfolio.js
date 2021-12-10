import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import styles from "./Portfolio.module.css";
import PortfolioData from "../../components/PortfolioData/PortfolioData";
import PortfolioData2 from "../../components/PortfolioData2/PortfolioData2";

function Portfolio() {
  const allProjects = [
    {
      title: "Google Book Search",
      summary:
        "App designed to act like an online libarary.  Users can search, view, or save books once logged in.",
      role: "Developed full MERN stack",
      tools: "MongoDB, Express, React, Node.js, Redux Toolkit",
      github: "https://github.com/davidsjg/Google-Books-Search-Redux",
      deployed: "coming soon",
      image: "GBooks.png",
      class: "{styles[googleBooks]}",
    },
    {
      title: "James Peak Wilderness Lake Finder",
      summary:
        "App designed to visualize fish survey data released by Colorado Parks and Wildlife",
      role: "Developed project from creation to completion (Full Stack)",
      tools:
        "React, MongoDB, Node.js, Context API, JavaScript, HTML, Bootstrap",
      github: "https://github.com/davidsjg/JPW-Fishing-App",
      deployed: "https://fathomless-crag-56888.herokuapp.com/",
      image: "JPW.png",
      class: "jpwFinder",
    },
    {
      title: "Beaver Frames",
      summary: "App for Beaver Frames framing studio - Vail, CO",
      role: "Developed project from creation to completion (Full Stack)",
      tools:
        "React, Redux, Node.js, MongoDB, Context API, JavaScript, HTML, Bootstrap",
      github: "https://github.com/davidsjg/Beaver-Framing",
      deployed: "https://beaver-framing.herokuapp.com/",
      image: "beaver.png",
      class: "beaverFrames",
    },
    {
      tesla: "Tesla Home Page",
      teslaDeploy: "https://tesla-jgd.herokuapp.com/",
      teslaTools: "React, Redux Toolkit",
      amazon: "Amazon Home Page, Cart, Login",
      amazonDeploy: "https://amazon-clone-jgd.herokuapp.com/",
      amazonTools: "React, Redux Toolkit",
      disney: "Disney Home Page",
      disneyDeploy: "https://disney-jgd.herokuapp.com/",
      disneyTools: "React, React Slick, Redux Toolkit, ",
    },
  ];

  const project1 = allProjects[0];
  const project2 = allProjects[1];
  const project3 = allProjects[2];

  return (
    <>
      <Container>
        <div className={styles["displayCards"]}>
          <div className={styles["googleBooks"]}>
            <div className={styles["googleData"]}>
              <p>Title: {project1.title}</p>
              <p>Summary: {project1.summary}</p>
              <p>Role: {project1.role}</p>
              <p>Tools: {project1.tools}</p>
              <p>
                Github:
                <br />
                <a href={project1.github} target="_blank">
                  {project1.github}
                </a>
              </p>
              <p>
                Deployed:
                <a href={project1.deployed} target="_blank">
                  {project1.deployed}
                </a>
              </p>
            </div>
          </div>
          <div className={styles["jpwFinder"]}>
            <div className={styles["jpwData"]}>
              <p>Title: {project2.title}</p>
              <p>Summary: {project2.summary}</p>
              <p>Role: {project2.role}</p>
              <p>Tools: {project2.tools}</p>
              <p>
                Github:
                <br />
                <a href={project2.github} target="_blank">
                  {project2.github}
                </a>
              </p>
              <p>
                Deployed:
                <a href={project2.deployed} target="_blank">
                  {project2.deployed}
                </a>
              </p>
            </div>
          </div>
          <div className={styles["beaverFrames"]}>
            <div className={styles["beaverData"]}>
              <p>Title: {project3.title}</p>
              <p>Summary: {project3.summary}</p>
              <p>Role: {project3.role}</p>
              <p>Tools: {project3.tools}</p>
              <p>
                Github:
                <br />
                <a href={project3.github} target="_blank">
                  {project3.github}
                </a>
              </p>
              <p>
                Deployed:
                <a href={project3.deployed} target="_blank">
                  {project3.deployed}
                </a>
              </p>
            </div>
          </div>

          <PortfolioData project3={allProjects[3]} />
        </div>
      </Container>
    </>
  );
}

export default Portfolio;

const Container = styled.div`
  /* height: 500px; */
  background-image: url("/images/pic2.JPG");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  /* 
  display: flex;
  justify-content: space-between; */

  margin: 50px 100px;
  transition: 250ms;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 50px;
    align-items: center;
  }
`;

// const Container = styled.div`
//   min-height: calc(100vh - 185px);

//   background-position: top;
//   background-repeat: no-repeat;
//   background-size: cover;

//   display: flex;
//   justify-content: end;

//   margin: 50px 100px;
//   transition: 250ms;
// `;

// {allProjects.map((project) => {
//   // return <PortfolioData key={project.id} project={project} />;
//   return <PortfolioData2 key={project.id} project={project} />;
// })}
