import ProductCard from "../common/productCard/productCard";
import styles from "./caseStudies.module.css";
import Fade from "react-reveal/Fade";

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
            <Fade bottom>
              <ProductCard
                logo="/svgs/contanuity-logo.svg"
                bgColor="#244AB6"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="SAAS app that helps B2B clients identify leads with an intent signal. It enables the customers to expand lead generation with direct visibility into early intent signals"
                bottomSvg="/svgs/studies/study1.svg"
                linkTo="case-studies/contanuity"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/vakeelonline.svg"
                bgColor="#FFD902"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="A combination of marketplace and social media Platform for lawyers and people of Pakistan."
                bottomSvg="/svgs/studies/study2.svg"
                linkTo="case-studies/vakeel"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                heading="Beaconhouse"
                bgColor="#00869B"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="The aim is to bring all its students' artwork and projects together, regardless of geographical locations, with the aim to unite young communities around the world and support them in creating their own network of learning and collaboration through the COVID era."
                bottomSvg="/svgs/studies/study1.svg"
                linkTo="case-studies/beacon-house"
              />
            </Fade>
          </div>
          <div className={styles.rightStudies}>
            <Fade bottom>
              <ProductCard
                logo="/svgs/mipeople.svg"
                bgColor="#279F97"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Mipeople aims to improve the nonprofit industry through implementation of innovative technology in the donation process"
                bottomSvg="/svgs/studies/study3.svg"
                linkTo="case-studies/mi-people"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/voor.svg"
                bgColor="#FA83A0"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="A digitized 3D platform that enables shoppers to visit brand showrooms virtually on their desktops & smart gadgets in an unprecedented manner."
                bottomSvg="/svgs/studies/study4.svg"
                linkTo="case-studies/voor-3d"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                heading="Bubl"
                bgColor="#477432"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Bubl Health is an app that connects patients to condition-based, global communities. A Better and Brighter future for patients where they are not alone and have no unanswered questions."
                bottomSvg="/svgs/studies/study2.svg"
                linkTo="case-studies/bubl"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                heading="Legacy Suite"
                bgColor="#014096"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Organizing, creating, and securing your critical information is essential to preserving your digital life. Now is the time to get started!"
                bottomSvg="/svgs/studies/study3.svg"
                linkTo=""
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
