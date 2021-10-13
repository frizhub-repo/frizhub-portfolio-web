import * as React from "react";
import Layout from "../../components/layout";
import styles from "./study.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { getAllStudies, getStudyData } from "../../lib/caseStudies";
import CustomCarousel from "../../components/common/customCarousel/customCarousel";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

export default function CaseStudy({
  logo,
  bgColor,
  specs,
  overview,
  bottomSvg,
  images,
}) {
  const router = useRouter();
  const [isGoingBack, setIsGoingBack] = React.useState(false);

  function handleBackClick() {
    setIsGoingBack(true);
    setTimeout(() => {
      router.back();
    }, [2000]);
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
