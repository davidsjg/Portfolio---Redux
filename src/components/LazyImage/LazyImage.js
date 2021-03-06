import { immerable } from "@reduxjs/toolkit/node_modules/immer";
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

var tesDis = document.createElement("img");
tesDis.src = "https://i.imgur.com/JVI2aFQ.png";

var jpw = document.createElement("img");
jpw.src = "https://i.imgur.com/inj0tje.png";

var beaver = document.createElement("img");
beaver.src = "https://i.imgur.com/oqtTsFF.png";

var gbooks = document.createElement("img");
gbooks.src = "https://i.imgur.com/lciFI5B.png";

let imgArr = [img1, img2, img3, img9, tesDis, jpw, beaver, gbooks];
let imgArr2 = [tesDis, jpw, beaver, gbooks];

export const LazyImage = () => {
  return imgArr.map((img) => {
    return <Image src={img.src} style={{ display: "none" }} />;
  });
};
export const LazyImage2 = () => {
  return imgArr2.map((img) => {
    return <Image src={img.src} style={{ display: "none" }} />;
  });
};

const Image = styled.img`
  display: block;
  height: 100px;
  width: 100px;
`;
