import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./Header.module.css";

import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className={styles["mainContain"]}>
      <div className={styles["leftHeader"]}>
        <div className={styles["navMenu"]}>
          <a>
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span style={{ marginRight: -9 }}>About Me</span>
            </Link>
          </a>
        </div>
      </div>

      <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
          <div className={styles["navMenu"]}>
            <a>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <span style={{ fontSize: "larger" }}>
                  Joey Davidson Portfolio Page
                </span>
              </Link>
            </a>
          </div>
        </div>
      </div>

      <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
          <a>
            <Link
              to="/Portfolio"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span>Portfolio</span>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
