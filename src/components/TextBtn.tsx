import styles from "../styles/TextBtn.module.css";

import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

type btnProps = {
  text: string;
};

const TextBtn = (props: btnProps) => {
  return (
    <div className={styles.textBtn}>
      <a href="#">
        <span>{props.text}</span>
        <KeyboardArrowRightOutlinedIcon />
      </a>
    </div>
  );
};

export default TextBtn;
