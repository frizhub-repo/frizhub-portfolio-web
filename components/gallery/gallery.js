import * as React from "react";
import Fade from "react-reveal/Fade";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Culture is simply a shared way of doing something with a passion.
      </h1>
      <div className={styles.imagesContainer}>
        <Fade bottom>
          <img className={styles.image} src="/images/gallery/image1.png" />
        </Fade>
        <Fade left>
          <img className={styles.image} src="/images/gallery/image2.png" />
        </Fade>
        <Fade left>
          <img className={styles.image} src="/images/gallery/image3.png" />
        </Fade>
        <Fade right>
          <img className={styles.image} src="/images/gallery/image4.png" />
        </Fade>
        <Fade right>
          <img className={styles.image} src="/images/gallery/image5.png" />
        </Fade>
        <Fade left>
          <img className={styles.image} src="/images/gallery/image6.png" />
        </Fade>
      </div>
    </div>
  );
}
