import ProductCard from "../common/productCard/productCard";
import styles from "./caseStudies.module.css";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

export default function CaseStudies() {
  return (
    <Element name="caseStudies">
      <div className={styles.container} id="studiesContainer">
        <h1 className={styles.header}>
          Every product is <span className={styles.uniqueText}>unique</span>{", "}
          but so are our tailor-made processes.
        </h1>
        <div className={styles.studiesContainer}>
          <div className={styles.leftStudies}>
            <h2 className={styles.studiesHeader}>
              <br />
            </h2>
            <Fade bottom>
              <ProductCard
                logo="/svgs/hyphen.svg"
                bgColor="#02796E"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Improving the scale of digitized health care and furnishing modern-era custom build white label bridge between doctors and patients."
                bottomSvg="/svgs/studies/study1.svg"
                linkTo="case-studies/hyphen"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/nosghy.svg"
                bgColor="#003B6B"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Nosghy, focused towards mental health, is a telemedicine platform connecting doctors and patients for video/audio consultation and remote seminars for mental health"
                bottomSvg="/svgs/studies/study5.svg"
                linkTo="case-studies/nosghy"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                heading="White Label Solution"
                bgColor="#9D3154"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Improving the scale of digitized health care & furnishing modern-era custom build white label bridge between doctors & patients."
                bottomSvg="/svgs/studies/study2.svg"
                linkTo="case-studies/white-label"
                logoContainerHeight="104px"
              />
            </Fade>
          </div>
          <div className={styles.rightStudies}>
            <Fade bottom>
              <ProductCard
                logo="/svgs/dawiyni.svg"
                bgColor="#BF2436"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Built with our white label solution, Dawiyini is a multi-lingual telemedicine company based out of Mautitania. Dawiyini aims to connect people in distant areas for tele-consultation and advise"
                bottomSvg="/svgs/studies/study2.svg"
                linkTo="case-studies/dawiyni"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/EHR.svg"
                bgColor="#4DCFC3"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="Fully compliant with HIPPA and EHR, the solution lets patients keep their medical history journaled for easy access for the health specialists"
                bottomSvg="/svgs/studies/study6.svg"
                linkTo="case-studies/ehr"
              />
            </Fade>
            <Fade bottom>
              <ProductCard
                logo="/svgs/hippa.png"
                bgColor="#A6A6A6"
                specs={[
                  "Architechture",
                  "Full Stack Development",
                  "Brand Desgin",
                  "UX Design",
                ]}
                overview="HIPPA Compliance has been a blessing in the era of data security breaches, providing a safe bridge to health care providers from grave fines and reputation loss."
                bottomSvg="/svgs/studies/study1.svg"
                linkTo="case-studies/hippa"
                logoWidth="10vw"
                logoContainerHeight="90px !important"
              />
            </Fade>
          </div>
        </div>
      </div>
    </Element>
  );
}
