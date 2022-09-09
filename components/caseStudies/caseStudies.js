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
          but so are our tailor-made processes.
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
                logo="/svgs/hyphen.svg"
                bgColor="#006ED3"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Improving the scale of digitized health care and furnishing modern-era custom build white label bridge between doctors and patients."
                bottomSvg="/svgs/studies/study1.svg"
                linkTo="https://drive.google.com/file/d/1lpKLtmInKcTgXia4gzHnjZY4WdIkei3X/view?usp=sharing"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/dawiyni.svg"
                bgColor="#000"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Built with our white label solution, Dawiyini is a multi-lingual telemedicine company based out of Mautitania. Dawiyini aims to connect people in distant areas for tele-consultation and advise"
                bottomSvg="/svgs/studies/study2.svg"
                linkTo="https://www.dawiyni.com"
              />
            </Fade>
          </div>
          <div className={styles.rightStudies}>
            <Fade bottom>
              <ProductCard
                logo="/svgs/nosghy.svg"
                bgColor="#279F97"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Nosghy, focused towards mental health, is a telemedicine platform connecting doctors and patients for video/audio consultation and remote seminars for mental health"
                bottomSvg="/svgs/studies/study3.svg"
                linkTo="#"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/EHR.svg"
                bgColor="#FA83A0"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Fully compliant with HIPPA and EHR, the solution lets patients keep their medical history journaled for easy access for the health specialists"
                bottomSvg="/svgs/studies/study4.svg"
                linkTo="#"
              />
            </Fade>
          </div>
        </div>
      </div>
    </Element>
  );
}
