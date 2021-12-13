import styles from "../styles/Reviews.module.css";
import { Button, List } from "../components";
import { reviewComments } from "../utils/reviewComments";
import { Carousel } from "@trendyol-js/react-carousel";
import { useEffect, useState } from "react";

const Reviews = () => {
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
        <Button text="Show all 52 reviews" />
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
const ReviewListItem = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const [showNum, setShowNum] = useState<number>(2.5);

  useEffect(() => {
    if (width <= 540) {
      setShowNum(2);
    }
    if (width <= 375) {
      setShowNum(1);
    }
    console.log(showNum);
  }, [showNum]);

  return (
    <ul className={styles.reviewList}>
      <Carousel show={showNum} slide={3} swiping={true}>
        {reviewComments.map((review) => {
          return (
            <List
              id={review.id}
              nameAval={review.nameAval}
              name={review.name}
              pfpAval={review.pfpAval}
              comment={review.comment}
              date={review.date}
              pfpSrc={review.pfpSrc}
            />
          );
        })}
      </Carousel>
    </ul>
  );
};
