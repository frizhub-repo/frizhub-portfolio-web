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
          It&apos;s all about the people.
        </h1>
        <CustomCarousel
          slides={[
            {
              img: "images/members/tabish.png",
              alt: "Tabish Munir",
              overlay: {
                main: "Tabish Munir",
                title: "CEO",
              },
            },
            {
              img: "images/members/azaz.png",
              alt: "Azaz Ahmed",
              overlay: {
                main: "Azaz Ahmed",
                title: "CTO",
              },
            },
            {
              img: "images/members/omer.png",
              alt: "Omer Faqiyan",
              overlay: {
                main: "Omer Faqiyan",
                title: "Product Manager",
              },
            },
            {
              img: "images/members/shahrukh.png",
              alt: "Shahrukh Idrees",
              overlay: {
                main: "Shahrukh Idrees",
                title: "Procuct Design Lead",
              },
            },
            {
              img: "images/members/atif.png",
              alt: "Atif Sikander",
              overlay: {
                main: "Atif Sikander",
                title: "Senior Software Engineer",
              },
            },
            {
              img: "images/members/arslan.png",
              alt: "Syed Arslan",
              overlay: {
                main: "Syed Arslan Shahid Bukhari",
                title: "Technical Content Writer",
              },
            },
            {
              img: "images/members/muzammil.png",
              alt: "Muzammil Tariq",
              overlay: {
                main: "Muzammil Tariq",
                title: "Full Stack Engineer",
              },
            },
            {
              img: "images/members/humza.png",
              alt: "Humza Khalid",
              overlay: {
                main: "Humza Khalid",
                title: "Full Stack Engineer",
              },
            },
            {
              img: "images/members/uzair.png",
              alt: "Uzair Afzal",
              overlay: {
                main: "Uzair Afzal",
                title: "Blockchain Engineer",
              },
            },
            {
              img: "images/members/areeba.png",
              alt: "Areeba Khan",
              overlay: {
                main: "Areeba Khan",
                title: "Resource Manager",
              },
            },
            {
              img: "images/members/nadeem.png",
              alt: "Nadeem Khan",
              overlay: {
                main: "Nadeem Khan",
                title: "App Development Lead",
              },
            }
          ]}
        />
      </section>
    </Layout>
  );
}
