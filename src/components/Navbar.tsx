import React from "react";
import styles from "../styles/Navbar.module.css";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <div className={styles.left}>
            <img src={logo} alt="logo"  />
        </div>
        <div className={styles.center}>search bar</div>
        <div className={styles.right}>Menu</div>
      </div>
    </div>
  );
};

export default Navbar;
