import styles from "../styles/Reviews.module.css";
import { Button } from "../components";

const Reviews = () => {
  const testArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.reviews}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <i className="fas fa-star" style={{ color: "#FF385C" }}></i>4.88
          <span> (52 reviews) </span>
        </div>
        <div className={styles.ratings}>
          <RatingList />
        </div>
        {/* reviewers */}
        <div className={styles.reviewers}>
          <ReviewListItem />
        </div>
        <Button text="Show all 52 reviews"/>
      </div>
    </div>
  );
};

export default Reviews;

//Rating bar
type TProps = {
  rating: number;
};
const RatingBar = (props: TProps) => {
  const width = (props.rating / 5) * 100;
  return (
    <div className={styles.barContainer}>
      <div className={styles.barRate}>
        <div style={{ width: `${width}%` }}>&nbsp;</div>
      </div>
      <span>{props.rating}</span>
    </div>
  );
};

// Rating List
const RatingList = () => {
  return (
    <>
      <ul>
        <li>
          <span>Cleanliness</span>
          <RatingBar rating={4.9} />
        </li>
        <li>
          <span>Communication</span>
          <RatingBar rating={4.9} />
        </li>
        <li>
          <span>Check-in</span>
          <RatingBar rating={4.9} />
        </li>
      </ul>
      <ul>
        <li>
          <span>Accuracy</span>
          <RatingBar rating={4.9} />
        </li>
        <li>
          <span>Location</span>
          <RatingBar rating={4.9} />
        </li>
        <li>
          <span>Value</span>
          <RatingBar rating={4.8} />
        </li>
      </ul>
    </>
  );
};

//Review List Item
const ReviewListItem = (item: any) => {
  return (
    <ul>
      {/* left */}
      <div>
        <li>
          <div className={styles.reviewHeading}>
            <div className={styles.pfp}>
              <img
                src={
                  "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                }
                alt="profile pic"
              />
            </div>
            <div className={styles.author}>
              <span>Anonymous</span>
              <span>November,2021</span>
            </div>
          </div>
          <div className={styles.comment}>
            <p>Hello world</p>
          </div>
        </li>
        <li>
          <div className={styles.reviewHeading}>
            <div className={styles.pfp}>
              <img
                src={
                  "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                }
                alt="profile pic"
              />
            </div>
            <div className={styles.author}>
              <span>Anonymous</span>
              <span>November,2021</span>
            </div>
          </div>
          <div className={styles.comment}>
            <p>Hello world</p>
          </div>
        </li>
        <li>
          <div className={styles.reviewHeading}>
            <div className={styles.pfp}>
              <img
                src={
                  "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                }
                alt="profile pic"
              />
            </div>
            <div className={styles.author}>
              <span>Anonymous</span>
              <span>November,2021</span>
            </div>
          </div>
          <div className={styles.comment}>
            <p>Hello world</p>
          </div>
        </li>
      </div>


      {/* right */}
      <div>
        <li>
          <div className={styles.reviewHeading}>
            <div className={styles.pfp}>
              <img
                src={
                  "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                }
                alt="profile pic"
              />
            </div>
            <div className={styles.author}>
              <span>Anonymous</span>
              <span>November,2021</span>
            </div>
          </div>
          <div className={styles.comment}>
            <p>Hello world</p>
          </div>
        </li>
        <li>
          <div className={styles.reviewHeading}>
            <div className={styles.pfp}>
              <img
                src={
                  "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                }
                alt="profile pic"
              />
            </div>
            <div className={styles.author}>
              <span>Anonymous</span>
              <span>November,2021</span>
            </div>
          </div>
          <div className={styles.comment}>
            <p>Hello world</p>
          </div>
        </li>
        <li>
          <div className={styles.reviewHeading}>
            <div className={styles.pfp}>
              <img
                src={
                  "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
                }
                alt="profile pic"
              />
            </div>
            <div className={styles.author}>
              <span>Anonymous</span>
              <span>November,2021</span>
            </div>
          </div>
          <div className={styles.comment}>
            <p>Hello world</p>
          </div>
        </li>
      </div>
    </ul>
  );
};
