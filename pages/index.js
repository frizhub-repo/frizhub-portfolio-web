import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import CaseStudies from "../components/caseStudies/caseStudies";
import CustomCarousel from "../components/common/customCarousel/customCarousel";
import styles from "../styles/utils.module.css";
import SecondaryCaseStudies from "../components/caseStudies/secondaryCaseStudies";
import Gallery from "../components/gallery/gallery";

export default function Home() {
  return (
    <Layout title="FrizHub">
      <Hero />
      <hr />
      <CaseStudies />
      <Gallery />
      <SecondaryCaseStudies />
      <section className={styles.container}>
        <h1 className={styles.full_width_text}>
          It's all about the people.
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
            img: "images/members/aza.jpg",
            alt: "Azaz Ahmed",
            overlay: {
              main: "Azaz Ahmed",
              title: "CTO",
            },
          },
          {
            img: "images/members/umer-qaiser.jpg",
            alt: "Umer Qaiser",
            overlay: {
              main: "Umer Qaiser",
              title: "Engineering Manager",
            },
          },
          {
            img: "images/members/omer-faqiyan.jpg",
            alt: "Omer Faqiyan",
            overlay: {
              main: "Omer Faqiyan",
              title: "Project Manager",
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
