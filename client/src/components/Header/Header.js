import React, { useState } from "react";
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
            <span style={{ marginRight: -9 }}>About Me</span>
          </a>
        </div>
      </div>

      <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
          <p>Joey Davidson Portfolio Page</p>
        </div>
      </div>

      <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
          <a>
            <span
            // style={{ paddingRight: 15 }}
            >
              Portfolio
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
