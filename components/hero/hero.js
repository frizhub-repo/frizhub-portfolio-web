import styles from "./hero.module.css";
export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}>Solutions for startups, scale-ups, and enterprises</h1>
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
        Ability proceeds from a fashion of skills, knowledge, understanding, and imagination experience.
        </p>
      </div>
    </div>
  );
}
