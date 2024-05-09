import styles from "./hero.module.css";
export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}><span className={styles.codeText}>Code</span> with Confidence</h1>
        <h1 className={styles.header}> Soar with Success</h1>
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
          <div className={styles.motiveTextContainer}>
          <div><a target="_blank" href="https://www.topdevelopers.co/directory/social-media-management-companies">
            <img className={styles.badge} src="https://www.topdevelopers.co/assets/badges/app-2023/Software-Development/badge-top-software-developers-2023.png" alt="Social Media Management Companies" title="Social Media Management Companies"/>
          </a></div>                
          <div><a target="_blank" href="https://www.topdevelopers.co/directory/ecommerce-developers">
            <img className={styles.badge} src="https://www.topdevelopers.co/assets/badges/app-2023/Ecommerce/rectangle-top-ecommerce-development-companies-2023.png" alt="eCommerce Development Companies" title="eCommerce Development Companies"/>
          </a></div>
      </div>
        </ul>
        
      </div>
    </div>
  );
}
