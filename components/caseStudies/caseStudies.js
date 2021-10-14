import ProductCard from "../common/productCard/productCard";
import styles from "./caseStudies.module.css";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

export default function CaseStudies() {
  return (
    <Element name="caseStudies">
      <div className={styles.container} id="studiesContainer">
        <h1 className={styles.header}>
          Every product is <span className={styles.uniqueText}>unique,</span>{" "}
          but so is our tailor made processes
        </h1>
        <div className={styles.studiesContainer}>
          <div className={styles.leftStudies}>
            <h2 className={styles.studiesHeader}>
              Telemedicine
              <br />
              Case Studies
            </h2>
            <Fade bottom>
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
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/contanuity-logo.svg"
                bgColor="#000"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brad Desgin UX Design",
                ]}
                overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                bottomSvg="/svgs/studies/study2.svg"
                linkTo="case-studies/contanuity"
              />
            </Fade>
          </div>
          <div className={styles.rightStudies}>
            <Fade bottom>
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
            </Fade>
            <Fade bottom>
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
            </Fade>
          </div>
        </div>
      </div>
    </Element>
  );
}
