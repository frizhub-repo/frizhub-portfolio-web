import React from "react";
import styles from "./PricingCard.module.css";
import { Divider } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import BasicModal from "../modal/modal";

const PricingCard = ({
  cardType,
  tag,
  description,
  price,
  priceInfo,
  details,
  isPopular = false,
  infoTitle,
}) => {
  return (
    <div className={styles.card}>
      {isPopular ? <h5 className={styles.popularTag}>Most Popular</h5> : ""}
      <Typography
        variant="p"
        fontWeight={700}
        fontSize={25}
      >
        {tag}
      </Typography>
      <Typography variant="body1" className={styles.packageDescription}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Typography>
      <Divider
        className={ styles.devider2}
      />
      <Typography
        variant="h2"
        style={{
          color: cardType !== "dark" && "#000B33",
          fontWeight: "600",
          display: "inline-block",
        }}
      >
        {price}
      </Typography>
      &nbsp;&nbsp;
      <Typography
        variant="p"
        color="black"
        className={styles.priceInfo}
        style={{ display: "inline-block" }}
      >
        {priceInfo}
      </Typography>
      <Typography
        variant="p"
        color="black"
        className={styles.priceInfo}
        style={{ display: "block" }}
      >
        Excluding Vat
      </Typography>
      <Divider className={styles.devider2} />
      <Button
        variant="text"
        color="primary"
        className={styles.startTrialBtn2}
      >
        <BasicModal buttonCaption="Choose This Plan"></BasicModal>
      </Button>
      <Typography variant="p" fontWeight={700} color="initial" style={{marginTop:"20px"}}>
        {infoTitle}
      </Typography>
      <List>
        {details.map((e, index) => {
          return (
            <ListItem style={{ marginLeft: "-18px" }} key={index}>
              <Typography variant="p" style={{ marginLeft: "5px" }}>
                {e.text}&nbsp;&nbsp;
                {e.isComing ? (
                  <span
                    style={{
                      backgroundColor: "#C9FAD6",
                      color: "#1AA703",
                      fontSize: "11px",
                      padding: "3px 5px",
                      borderRadius: "3.5px",
                   
                    }}
                  >
                    New
                  </span>
                ) : (
                  ""
                )}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default PricingCard;
