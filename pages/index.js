import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import CaseStudies from "../components/caseStudies/caseStudies";
import CustomCarousel from "../components/common/customCarousel/customCarousel";
import styles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout title="Frizhub">
      <Hero />
      <hr />
      <CaseStudies />
      <section className={styles.container}>
        <h1 className={styles.full_width_text}>It's all about the people</h1>
        <CustomCarousel
          slides={Array(10).fill({
            img: "images/members/haroon.jpeg",
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
