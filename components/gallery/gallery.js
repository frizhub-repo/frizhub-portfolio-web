import * as React from "react";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Culture is simply a shared way of doing something with a passion.
      </h1>
      <div className={styles.imagesContainer}>
        <img className={styles.image} src="/images/gallery/image1.png" />
        <img className={styles.image} src="/images/gallery/image2.png" />
        <img className={styles.image} src="/images/gallery/image3.png" />
        <img className={styles.image} src="/images/gallery/image4.png" />
        <img className={styles.image} src="/images/gallery/image5.png" />
        <img className={styles.image} src="/images/gallery/image6.png" />
      </div>
    </div>
  );
}
