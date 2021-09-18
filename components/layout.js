import Head from "next/head";
import Navbar from "./navbar/navbar";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
