import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import styles from "./customInput.module.css";

export default function CustomInput({ type = "text", placeholder }) {
  return (
    <div className={styles.container}>
      <input className={styles.input} type={type} placeholder={placeholder} />
      <div className={styles.iconContainer}>
        <ArrowRightAltOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
}
