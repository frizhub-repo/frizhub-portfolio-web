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
          slides={[{
            img: "images/members/tabish.png",
            alt: "Tabish Munir",
            overlay: {
              main: "Tabish Munir",
              title: "CEO",
            },
          },
          {
            img: "images/members/azaz.JPG",
            alt: "Azaz Ahmed",
            overlay: {
              main: "Azaz Ahmed",
              title: "Engineering Head",
            },
          },
          {
            img: "images/members/waqas.png",
            alt: "Waqas Iqbal",
            overlay: {
              main: "Waqas Iqbal",
              title: "Solution Architect",
            },
          },
          {
            img: "images/members/atif.png",
            alt: "Atif Sikander",
            overlay: {
              main: "Atif Sikander",
              title: "Blockchain Engineer",
            },
          },
          {
            img: "images/members/huzaifa.png",
            alt: "Huzaifa Imran",
            overlay: {
              main: "Huzaifa Imran",
              title: "Web Engineer",
            },
          },
        ]}
        />
      </section>
    </Layout>
  );
}
