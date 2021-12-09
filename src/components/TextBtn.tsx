import React from "react";
import styles from "../styles/TextBtn.module.css";

import {
    KeyboardArrowRightOutlinedIcon,
  } from "../components";

const TextBtn = () => {
  return (
    <div className={styles.textBtn}>
      <a href="#">
        <span>Show more </span>
        <KeyboardArrowRightOutlinedIcon />
      </a>
    </div>
  );
};

export default TextBtn;
