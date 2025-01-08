import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import CaseStudies from "../components/caseStudies/caseStudies";
import CustomCarousel from "../components/common/customCarousel/customCarousel";
import styles from "../styles/utils.module.css";
import SecondaryCaseStudies from "../components/caseStudies/secondaryCaseStudies";
import Gallery from "../components/gallery/gallery";
import Script from "next/script";

export default function Home() {
  return (
    <Layout title="FRIZHUB">
      <script
        src="https://app.wonderchat.io/scripts/wonderchat.js"
        data-name="wonderchat"
        data-address="app.wonderchat.io"
        data-id="clfstlf7v003imc0ky17y346y"
        defer
      />
      <Script id="show-banner" strategy="afterInteractive">
        {`(function (w, d, s, l, i) {
  console.log("GTM LOADED");
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-PJQ2VR4");`}
      </Script>
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
              img: "images/members/awan.png",
              alt: "Usama Awan",
              overlay: {
                main: "Usama Awan",
                title: "COO",
              },
            },
            {
              img: "images/members/Ameer.png",
              alt: "Ameer Faizan",
              overlay: {
                main: "Ameer Faizan",
                title: "Marketing Director",
              },
            },
            {
              img: "images/members/shehryar.png",
              alt: "Muhammad Shehryar",
              overlay: {
                main: "Muhammad Shehryar",
                title: "Marketing Director",
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
            },
          ]}
        />
      </section>
    </Layout>
  );
}
