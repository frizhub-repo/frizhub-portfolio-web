import styles from "./hero.module.css";
export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}>Custom Software Development</h1>
        <ul className={styles.propList}>
          <li className={styles.prop}>
            <span>&#9889;</span> Move Fast
          </li>
          <li className={styles.prop}>
            <span>🌟</span> Design Amazing Things
          </li>
          <li className={styles.prop}>
            <span>&#129351; </span> Beautifully Engineer Everything
          </li>
        </ul>
      </div>
      <div className={styles.motiveTextContainer}>
        <p className={styles.motiveText}>
          Every solution is unique, but so are our tailored processes. To genuinely innovate, we foster
          synergies beyond the established.
        </p>
      </div>
    </div>
  );
}
