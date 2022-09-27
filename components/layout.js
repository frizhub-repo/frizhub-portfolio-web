import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children, showNavbar = true }) {
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    window.addEventListener("focus", () => setIsTabActive(true));
    window.addEventListener("blur", () => setIsTabActive(false));
  }, []);

  return (
    <div>
      <Head>
        <title>{isTabActive ? "FrizHub" : `Come Back! • FrizHub`}</title>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          defer
        ></script>
      </Head>
      <div style={{ overflow: "hidden" }}>
        {showNavbar && <Navbar />}
        {children}
        <Footer />
      </div>
    </div>
  );
}
