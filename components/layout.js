import Head from "next/head";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
