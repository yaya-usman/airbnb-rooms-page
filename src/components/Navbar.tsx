import React from "react";
import styles from "../styles/Navbar.module.css";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <div className={styles.left}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.center}>
          <div className={styles.searchbar}>
            <span>Start your search</span>
            <span className={styles.searchIcon}>
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <button>Become a Host</button>
          <div className={styles.globe}>
            <i className="fas fa-globe"></i>
          </div>
        </div>
        <div className={styles.menu}>
          <span>
            <i className="fas fa-bars"></i>
          </span>
          <span>
            <i className="fas fa-user-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
