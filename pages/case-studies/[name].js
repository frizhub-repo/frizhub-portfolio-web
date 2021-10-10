import React from "react";
import Layout from "../../components/layout";
import styles from "./study.module.css";
import Image from "next/image";
import { getAllStudies, getStudyData } from "../../lib/caseStudies";
import CustomCarousel from "../../components/common/customCarousel/customCarousel";

export default function CaseStudy({
  logo,
  bgColor,
  specs,
  overview,
  bottomSvg,
  images,
}) {
  return (
    <Layout showNavbar={false}>
      <div className={styles.hero} style={{ background: bgColor }}>
        <div className={styles.contentContainer}>
          <div className={styles.logoContainer}>
            <Image src={logo} layout="fill" />
          </div>
          <div>
            <p className={styles.specs}>
              {specs?.map((spec, index) =>
                index === specs.length - 1 ? spec : `${spec}, `
              )}
            </p>
          </div>
          <div className={styles.overviewContainer}>
            <h2 className={styles.overview}>{overview}</h2>
          </div>
        </div>
        <img src={bottomSvg} className={styles.bottomSvg} />
      </div>
      <div className={styles.carouselContainer}>
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
