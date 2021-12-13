import React from "react";
import styles from "../styles/Reviews.module.css";
import { IReviews } from "../utils/reviewComments";

const List = (props: IReviews) => {
  return (
      <li>
        <div className={styles.reviewHeading}>
          <div className={styles.pfp}>
            <img
              src={
                props.pfpAval
                  ? props.pfpSrc
                  : "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
              }
              alt="profile pic"
            />
          </div>
          <div className={styles.author}>
            <span>{props.nameAval ? props.name : "Anonymous"}</span>
            <span>{props.date}</span>
          </div>
        </div>
        <div className={styles.comment}>
          <p>{props.comment}</p>
        </div>
      </li>
  );
};

export default List;
