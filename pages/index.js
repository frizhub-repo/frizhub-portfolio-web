import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import CaseStudies from "../components/caseStudies/caseStudies";
import CustomCarousel from "../components/common/customCarousel/customCarousel";
import styles from "../styles/utils.module.css";
import SecondaryCaseStudies from "../components/caseStudies/secondaryCaseStudies";
import Gallery from "../components/gallery/gallery";

export default function Home() {
  return (
    <Layout title="Frizhub">
      <Hero />
      <hr />
      <CaseStudies />
      <Gallery />
      <SecondaryCaseStudies />
      <section className={styles.container}>
        <h1 className={styles.full_width_text}>
          It&rsquo;s all about the people
        </h1>
        <CustomCarousel
          slides={Array(10).fill({
            img: "images/members/haroon.jpeg",
            alt: "Haroon Rasheed",
            overlay: {
              main: "Haroon Rasheed",
              title: "ReactJS Developer",
            },
          })}
        />
      </section>
    </Layout>
  );
}
