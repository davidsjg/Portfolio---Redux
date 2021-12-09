import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Portfolio2 from "./pages/Portfolio2/Portfolio2";

function App() {
  return (
    <>
      <Router>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio2 />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
