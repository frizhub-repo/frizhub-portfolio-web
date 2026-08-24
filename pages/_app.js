import Script from "next/script";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="reb2b" strategy="afterInteractive">
        {`!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("R6G5YH5YGZ65");`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
