import Navbar from "../../components/navbar/navbar";
import Layout from "../../components/layout";
import PricingCard from "../../components/common/pricingCard/PricingCard";
import Typography from "@mui/material/Typography";
import pricingData from "./data.json";
import styles from "./pricing.module.css";
import { useEffect } from "react";
import React from "react";
const PricingPage = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    setData(pricingData);
  }, [pricingData]);
  return (
    <Layout>
      <>
        <Navbar />
        <div className={styles.pricingPage}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              margin: "auto",
              width: "100vw",
            }}
            className={styles.textContainer}
          >
            <div className={styles.textContainer}>
              <Typography
                variant="h2"
                color="initial"
                className={styles.heading}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "transparent",
                  color: "#000B33",
                  fontWeight: "700",
                  lineHeight: "1",
                }}
              >
                Pricing
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                className={styles.text}
              >
                Pricing plans for businesses at every stage of growth. Try our
                risk-free for 14 days. No credit card required.
              </Typography>
            </div>
          </div>

          <div className={styles.packagesContainer}>
            {data?.map((e, index) => {
              console.log("here " + index);

              return (
                <div
                  key={e.id}
                  className={styles.pricingcard}
                  style={{
                    padding: "10px",
                  }}
                >
                  <PricingCard
                    cardType={"light"}
                    tag={e.tag}
                    description={e.description}
                    price={e.price}
                    priceInfo={e.priceInfo}
                    infoTitle={e.infoTitle}
                    details={e.info}
                    isPopular={e.isPopular}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default PricingPage;
