import React from "react";
import styled from "styled-components";

var img1 = document.createElement("img");
img1.src = "https://i.imgur.com/7QCcOFm.jpg";
var img2 = document.createElement("img");
img2.src = "https://i.imgur.com/YxzpERh.jpg";
var img3 = document.createElement("img");
img3.src = "https://i.imgur.com/Vd7pInL.jpg";
var img9 = document.createElement("img");
img9.src = "https://i.imgur.com/anHPZ70.jpg";

let imgArr = [img1, img2, img3, img9];

export const LazyImage = () => {
  return imgArr.map((img) => {
    return <Image src={img.src} style={{ display: "none" }} />;
  });
};

const Image = styled.img`
  display: block;
  height: 100px;
  width: 100px;
`;
