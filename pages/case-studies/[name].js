import * as React from "react";
import Layout from "../../components/layout";
import styles from "./study.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { getAllStudies, getStudyData } from "../../lib/caseStudies";
import CustomCarousel from "../../components/common/customCarousel/customCarousel";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import Link from "next/link";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

export default function CaseStudy({
  logo,
  heading,
  bgColor,
  specs,
  overview,
  bottomSvg,
  images,
  color,
  pdfLink,
  logoContainerWidth = "20vw",
  logoContainerHeight = "10vh",
}) {
  const router = useRouter();
  const [isGoingBack, setIsGoingBack] = React.useState(false);

  function handleBackClick() {
    setIsGoingBack(true);
    setTimeout(() => {
      router.back();
    }, [900]);
  }

  return (
    <Layout showNavbar={false}>
      <div
        className={`${styles.hero} ${isGoingBack && styles.backHero}`}
        style={{ background: bgColor }}
      >
        <CancelOutlinedIcon
          fontSize="large"
          className={`${styles.cancelBtn} ${
            isGoingBack && styles.backCancelBtn
          }`}
          onClick={handleBackClick}
        />
        <div
          className={`${styles.contentContainer} ${
            isGoingBack && styles.backContentContainer
          }`}
        >
          <div
            className={styles.logoContainer}
            style={{ width: logoContainerWidth, height: logoContainerHeight }}
          >
            {logo ? (
              <Image src={logo} layout="fill" />
            ) : (
              <h3 className={styles.logoHeading}>{heading}</h3>
            )}
          </div>
          <div>
            <p className={styles.specs} style={{ color: color ?? "" }}>
              {specs?.map((spec, index) =>
                index === specs.length - 1 ? spec : `${spec}, `
              )}
            </p>
          </div>
          <div className={styles.overviewContainer}>
            {overview.length > 1 ? (
              <ul>
                {overview.map((item, index) => (
                  <li className={styles.pointers} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <h2 className={styles.overview} style={{ color: color ?? "" }}>
                {overview}
              </h2>
            )}
          </div>
          <a className={styles.link} href={pdfLink} download>
            <div className={styles.viewBtnContainer}>
              <button className={styles.viewBtn} style={{ color: color ?? "" }}>
                Download Case Study
              </button>
              <ArrowRightAltOutlinedIcon
                className={styles.arrow}
                fontSize="large"
                z-indez="1"
              />
            </div>
          </a>
        </div>
        <img src={bottomSvg} className={styles.bottomSvg} />
      </div>
      <div
        className={`${styles.carouselContainer} ${
          isGoingBack && styles.backCarouselContainer
        }`}
      >
        <CustomCarousel
          showLeftButton
          slides={images?.map((image) => ({
            img: image,
            alt: "Product Image",
          }))}
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllStudies();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getStudyData(params.name);

  return {
    props: { ...data },
  };
}
