import React from "react";
import styles from "../styles/Header.module.css";
import { Gallery } from "../components";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headingsContainer}>
          <h3>Ağaoğlu Dağevleri</h3>
          <div className={styles.details}>
            {/* left */}
            <div className={styles.left}>
              <span className={styles.review}>
                <i className="fas fa-star" style = {{color: "#FF385C"}}></i>4.88 <a href="#">(52 reviews)</a>
              </span>
              <a href="#">Sapanca,Sakarya,Turkey</a>
            </div>
            {/* right */}
            <div className={styles.right}>
              <span>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>Share
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="far fa-heart"></i>Save
                </a>
              </span>
            </div>
          </div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Header;
