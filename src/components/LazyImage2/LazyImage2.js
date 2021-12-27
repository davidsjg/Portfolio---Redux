import { immerable } from "@reduxjs/toolkit/node_modules/immer";
import React from "react";
import styled from "styled-components";

var tesDis = document.createElement("img");
tesDis.src = "https://i.imgur.com/JVI2aFQ.png";

var jpw = document.createElement("img");
jpw.src = "https://i.imgur.com/inj0tje.png";

var beaver = document.createElement("img");
beaver.src = "https://i.imgur.com/oqtTsFF.png";

var goldy = document.createElement("img");
goldy.src = "https://i.imgur.com/oqtTsFF.png";

var gbooks = document.createElement("img");
gbooks.src = "https://i.imgur.com/lciFI5B.png";

var fish1 = document.createElement("img");
gbooks.src = "https://i.imgur.com/Un3dy6w.jpg";

var fish2 = document.createElement("img");
gbooks.src = "https://i.imgur.com/9vrxlLY.jpg";

var fish3 = document.createElement("img");
gbooks.src = "https://i.imgur.com/Xgdhnu8.jpg";

let imgArr2 = [tesDis, jpw, beaver, goldy, gbooks, fish1, fish2, fish3];

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
