import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import styles from "./Portfolio2.module.css";
import PortfolioData from "../../components/PortfolioData/PortfolioData";
import PortfolioData2 from "../../components/PortfolioData2/PortfolioData2";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import ImgSlider2 from "../../components/ImgSlider2/ImgSlider2";

function Portfolio2() {
  const allProjects = [
    {
      title: "Google Book Search",
      summary:
        "App designed to act like an online libarary.  Users can search, view, or save books once logged in.",
      role: "Developed full MERN stack",
      tools: "MongoDB, Express, React, Node.js, Redux Toolkit",
      github: "https://github.com/davidsjg/Google-Books-Search-Redux",
      deployed: "coming soon",
      image: "/images/GBooks.png",
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
      image: "/images/JPW.png",
      class: "jpwFinder",
    },
    {
      title: "Beaver Frames",
      summary: "App for Beaver Frames framing studio - Vail, CO",
      role: "Developed project from creation to completion (Full Stack)",
      tools:
        "React, Redux, Node.js, MongoDB, Context API, JavaScript, HTML, Bootstrap",
      github: "https://github.com/davidsjg/Beaver-Framing",
      deployed: "coming soon",
      image: "/images/ComingSoon.png",
      class: "beaverFrames",
    },
  ];

  const project1 = allProjects[0];
  const project2 = allProjects[1];
  const project3 = allProjects[2];

  return (
    <>
      <Container>
        <ImgSlider2 slides={allProjects} />
      </Container>
    </>
  );
}

export default Portfolio2;

const Container = styled.div`
  /* min-height: calc(100vh - 135px); */
  /* padding: 0 calc(3.5vw + 5px); */
  position: relative;
  overflow-x: hidden;
  margin: 50px 100px;

  /* background-image: url("/images/pic2.JPG");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-between;

  margin: 50px 100px;
  transition: 250ms; */
`;
