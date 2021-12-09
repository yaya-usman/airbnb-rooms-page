import React from "react";
import styles from "../styles/Amenities.module.css";
import {
  HomeOutlinedIcon,
  AutoAwesomeOutlinedIcon,
  MeetingRoomOutlinedIcon,
  LocationOnOutlinedIcon,
} from "../components";

const FeaturesItem = () => {
  return (
    <>
      <li>
        <div className={styles.iconContainer}>
          <HomeOutlinedIcon className={styles.icons} />
        </div>
        <div>
          <span>Entire home</span>
          <span>You’ll have the bungalow to yourself.</span>
        </div>
      </li>
      <li>
        <div className={styles.iconContainer}>
          <AutoAwesomeOutlinedIcon className={styles.icons} />
        </div>
        <div>
          <span>Enhanced Clean</span>
          <span>
            This Host committed to Airbnb's 5-step enhanced cleaning process.{" "}
            <a href="#" style={{ color: "#000" }}>
              Show more
            </a>
          </span>
        </div>
      </li>

      <li>
        <div className={styles.iconContainer}>
          <MeetingRoomOutlinedIcon className={styles.icons} />
        </div>
        <div>
          <span>Self check-in</span>
          <span>Check yourself in with the lockbox.</span>
        </div>
      </li>
      <li>
        <div className={styles.iconContainer}>
          <LocationOnOutlinedIcon className={styles.icons} />
        </div>
        <div>
          <span>Great location</span>
          <span>95% of recent guests gave the location a 5-star rating.</span>
        </div>
      </li>
    </>
  );
};

export default FeaturesItem;
