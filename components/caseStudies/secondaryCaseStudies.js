import ProductCard from "../common/productCard/productCard";
import styles from "./caseStudies.module.css";

export default function SecondaryCaseStudies() {
  return (
    <div className={styles.blackWrapper}>
      <div className={styles.container}>
        <div className={styles.studiesContainer}>
          <div className={styles.leftStudies}>
            <h1 className={styles.ideasTextContainer}>
              A Team of a Product Engineers That Help You{" "}
              <span className={styles.shapeText}>Shape Ideas</span>
            </h1>
            <ProductCard
              logo="/svgs/contanuity-logo.svg"
              bgColor="#006ED3"
              specs={[
                "Architechture",
                "Full Stack Development",
                "Brad Desgin UX Design",
              ]}
              overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              bottomSvg="/svgs/studies/study1.svg"
              linkTo="case-studies/contanuity"
            />
            <ProductCard
              logo="/svgs/contanuity-logo.svg"
              bgColor="#F9F9F9"
              specs={[
                "Architechture",
                "Full Stack Development",
                "Brad Desgin UX Design",
              ]}
              overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              bottomSvg="/svgs/studies/study2.svg"
              linkTo="case-studies/contanuity"
              color="black"
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
              bottomSvg="/svgs/studies/study3.svg"
              linkTo="case-studies/contanuity"
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
              bottomSvg="/svgs/studies/study4.svg"
              linkTo="case-studies/contanuity"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
