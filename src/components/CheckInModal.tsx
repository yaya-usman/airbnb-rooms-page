import { useState, useEffect, useRef } from "react";
import styles from "../styles/CheckInModal.module.css";
import {
  FlagIcon,
  KeyboardArrowDownOutlinedIcon,
  KeyboardArrowUpIcon,
} from "../components";

const CheckInModal = () => {
  const activeRef = useRef<any>();
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        isActive &&
        activeRef.current &&
        !activeRef.current.contains(e.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isActive]);
  const handleClick = (id: number) => {
    setId(id);
    setIsActive(!isActive);
  };
  return (
    <div className={styles.checkIn}>
      <div className={styles.box}>
        <div className={styles.content}>
          {/* heading start */}
          <div className={styles.heading}>
            <h3>
              <span>793 ₺</span>
              <span>/night</span>
            </h3>
            <h4>
              <i className="fas fa-star" style={{ color: "#FF385C" }}></i>4.88
              <a href="#"> (52 reviews) </a>
            </h4>
          </div>
          {/* heading end */}
          {/* center-btn */}
          <div className={styles.inputs}>
            <div
              ref={activeRef}
              className={`${styles.top} ${
                isActive && id === 1 && styles.active
              }`}
              onClick={() => handleClick(1)}
            >
              <div className={styles.leftTop}>
                <span>CHECK-IN</span>
                <input type="text" disabled placeholder="Add date" />
              </div>
              <div className={styles.rightTop}>
                <span>CHECKOUT</span>
                <input type="text" disabled placeholder="Add date" />
              </div>
            </div>
            <div
              ref={activeRef}
              className={`${styles.bottom} ${
                isActive && id === 2 && styles.active
              }`}
              onClick={() => handleClick(2)}
            >
              <div className={styles.leftBottom}>
                <span>GUESTS</span>
                <ul>
                  <li>1 guest</li>
                  {/* <li>1 guest</li> */}
                  {/* <li>1 guest</li> */}
                </ul>
              </div>
              <div className={styles.rightBottom}>
                {!isActive ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </div>
            </div>
          </div>
          {/* center-btn-end */}

          <button className={styles.checkBtn}>Check availability</button>
        </div>
      </div>
      <div className={styles.issue}>
        <span>
          <FlagIcon />
        </span>
        <a href="#">Report this listing</a>
      </div>
    </div>
  );
};

export default CheckInModal;
