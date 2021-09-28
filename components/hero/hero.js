import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}>Our Mantra is Simple!</h1>
        <ul className={styles.propList}>
          <li className={styles.prop}>
            <span>&#9889;</span> move fast
          </li>
          <li className={styles.prop}>
            <span>&#128536;</span> desing amazing things
          </li>
          <li className={styles.prop}>
            <span>&#129351;</span> beautifully engineered
          </li>
        </ul>
      </div>
      <div className={styles.motiveTextContainer}>
        <p className={styles.motiveText}>
          Every product is unique, but so is also our tailored process: we fuse
          strategy, creation and engineering. To genuinely innovate, we foster
          synergies beyond the established.
        </p>
      </div>
    </div>
  );
}
