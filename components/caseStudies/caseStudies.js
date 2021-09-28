import ProductCard from "../common/productCard/productCard";
import styles from "./caseStudies.module.css";

export default function CaseStudies() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Every product is <span className={styles.uniqueText}>unique,</span> but
        so is our tailor made processes
      </h1>
      <div className={styles.studiesContainer}>
        <div className={styles.leftStudies}>
          <h2 className={styles.studiesHeader}>
            Telemedicine
            <br />
            Case Studies
          </h2>
          <ProductCard
            logo="/svgs/contanuity-logo.svg"
            bgColor="#006ED3"
            specs={[
              "Architechture",
              "Full Stack Development",
              "Brad Desgin UX Design",
            ]}
            overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <ProductCard
            logo="/svgs/contanuity-logo.svg"
            bgColor="#000"
            specs={[
              "Architechture",
              "Full Stack Development",
              "Brad Desgin UX Design",
            ]}
            overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
        </div>
        <div className={styles.rightStudies}>
          <ProductCard
            logo="/svgs/contanuity-logo.svg"
            bgColor="#279F97"
            specs={[
              "Architechture",
              "Full Stack Development",
              "Brad Desgin UX Design",
            ]}
            overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <ProductCard
            logo="/svgs/contanuity-logo.svg"
            bgColor="#FA83A0"
            specs={[
              "Architechture",
              "Full Stack Development",
              "Brad Desgin UX Design",
            ]}
            overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
        </div>
      </div>
    </div>
  );
}
