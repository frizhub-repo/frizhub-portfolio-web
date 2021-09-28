import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import CaseStudies from "../components/caseStudies/caseStudies";

export default function Home() {
  return (
    <Layout title="Frizhub">
      <Hero />
      <hr />
      <CaseStudies />
    </Layout>
  );
}
