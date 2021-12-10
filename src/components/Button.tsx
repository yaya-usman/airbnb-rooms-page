import styles from "../styles/Button.module.css";



type btnProps = {
  text: string;
};

const Button = (props: btnProps) => {
  return <a className = {styles.btn}>{props.text}</a>;
};

export default Button;
