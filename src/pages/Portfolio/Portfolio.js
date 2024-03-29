import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import styles from "./Portfolio.module.css";
import PortfolioData from "../../components/PortfolioData/PortfolioData";
import PortfolioData2 from "../../components/PortfolioData2/PortfolioData2";
import { LazyImage2 } from "../../components/LazyImage2/LazyImage2";

function Portfolio() {
  const allProjects = [
    // {
    //   title: "Google Book Search",
    //   summary:
    //     "App designed to act like an online libarary.  Users can search, view, or save books once logged in.",
    //   role: "Developed full MERN stack",
    //   tools: "MongoDB, Express, React, Node.js, Redux Toolkit",
    //   github: "https://github.com/davidsjg/Google-Books-Search-Redux",
    //   deployed: "coming soon",
    //   image: "https://i.imgur.com/lciFI5B.png",
    //   class: "{styles[googleBooks]}",
    // },
    {
      title: "On The Fly",
      summary:
        "Website designed to identify a bug seen by/in a river.  React frontend with AWS/Amplify backend.",
      role: "Developed full stack application",
      tools: "AWS, Amplify, React",
      github: "https://github.com/davidsjg/On-The-Fly",
      deployed: "https://onthefly-3f238.web.app/",
      image: "https://i.imgur.com/dhz1omK.jpg",
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
      deployed: "coming soon (thanks Heroku)",
      image: "https://i.imgur.com/inj0tje.png",
      class: "jpwFinder",
    },
    {
      title: "Beaver Framing - in Development",
      summary: "App in development for Beaver Frames framing studio - Vail, CO",
      role: "Developed project from creation to completion (Full Stack)",
      tools:
        "React, Redux, Node.js, MongoDB, Context API, JavaScript, HTML, Bootstrap",
      github: "https://github.com/davidsjg/Beaver-Framing",
      deployed: "coming soon (thanks Heroku)",
      image: "https://i.imgur.com/oqtTsFF.png",
      class: "beaverFrames",
    },
    {
      title: "Checkers!",
      summary:
        "Play some 2-player checkers with a friend(or your alternate ego)!",
      role: "Project developer",
      tools:
        "React, Firebase, Context API, JavaScript, HTML",
      github: "https://github.com/davidsjg/checkers",
      deployed: "https://checkers-9976f.web.app/",
      image: "https://i.imgur.com/wyFfmVO.png",
      class: "checkers",
    }
  ];

  const project1 = allProjects[0];
  const project2 = allProjects[1];
  const project3 = allProjects[3];
  const project4 = allProjects[2];

  return (
    <>
      <LazyImage2 />
      <Container>
        <div className={styles["topClick"]}>
          <h3>Tap a Project to Explore!</h3>
        </div>
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
          <div className={styles["checkers"]}>
            <div className={styles["checkersData"]}>
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
              <p>Title: {project4.title}</p>
              <p>Summary: {project4.summary}</p>
              <p>Role: {project4.role}</p>
              <p>Tools: {project4.tools}</p>
              <p>
                Github:
                <br />
                <a href={project4.github} target="_blank">
                  {project4.github}
                </a>
              </p>
              <p>
                Deployed:
                <a href={project4.deployed} target="_blank">
                  {project4.deployed}
                </a>
              </p>
            </div>
          </div>

          {/* <PortfolioData project3={allProjects[3]} /> */}
        </div>
      </Container>
    </>
  );
}

export default Portfolio;

const Container = styled.div`
  /* height: 500px; */
  background-image: url("https://i.imgur.com/YxzpERh.jpg");
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
    /* padding: 50px; */
    align-items: center;
    margin: 10px;
    border-radius: 10px;
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
