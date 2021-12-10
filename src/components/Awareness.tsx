import styles from "../styles/Awareness.module.css";
import {
  AccessTimeFilledIcon,
  MeetingRoomIcon,
  PetsIcon,
  SmokingRoomsIcon,
  AutoAwesomeIcon,
  SanitizerIcon,
  ErrorIcon,
  CheckCircleIcon,
  TextBtn,
} from "../components";

const Awareness = () => {
  return (
    <div className={styles.awareness}>
      <div className={styles.wrapper}>
        <h3>Things to know</h3>
        <div className={styles.lists}>
          <ul>
            <h5>House rules</h5>
            <li>
              <span>
                <AccessTimeFilledIcon />
              </span>
              <span>Check-in: After 2:00 PM</span>
            </li>
            <li>
              <span>
                <AccessTimeFilledIcon />
              </span>
              <span>Checkout: 12:00 PM</span>
            </li>
            <li>
              <span>
                <MeetingRoomIcon />
              </span>
              <span>Self check-in with lockbox</span>
            </li>
            <li>
              <span>
                <PetsIcon />
              </span>
              <span>Pets are allowed</span>
            </li>
            <li>
              <span>
                <SmokingRoomsIcon />
              </span>
              <span>Smoking is allowed</span>
            </li>
          </ul>
          <ul>
            <h5>Health & safety</h5>
            <li>
              <span>
                <AutoAwesomeIcon />
              </span>
              <span>
                Committed to Airbnb's enhanced cleaning process.
                <a href="#"> Show more</a>
              </span>
            </li>
            <li>
              <span>
                <SanitizerIcon />
              </span>
              <span>
                Airbnb's social-distancing and other COVID-19-related guidelines
                apply
              </span>
            </li>
            <li>
              <span>
                <ErrorIcon />
              </span>
              <span>Pool/hot tub without a gate or lock</span>
            </li>
            <li>
              <span>
                <ErrorIcon />
              </span>
              <span>Nearby lake, river, other body of water</span>
            </li>
            <li>
              <span>
                <CheckCircleIcon />
              </span>
              <span>
                Carbon monoxide detector not required <a href="#"> Show more</a>
              </span>
            </li>
            <li></li>
            <li>
              <TextBtn text="Show more" />
            </li>
          </ul>
          <ul>
            <h5>Cancellation policy</h5>
            <li>
              Add your trip dates to get the cancellation details for this stay.
            </li>
            <li></li>
            <li> <TextBtn text="Add dates" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
