import Image from "next/image";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "./footer.module.css";
import CustomInput from "../common/customInput/customInput";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.blackFooter}></div>
      <div className={styles.footerDesignContainer}>
        <Image src="/svgs/footer-design.svg" layout="fill" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.footerHeader}>
            <div className={styles.logoContainer}>
              <Image src="/svgs/frizhub.svg" layout="fill" />
            </div>
            <div className={styles.detailHeader}>
              <h1 className={styles.detailHeading}>
                More than 10 years in the game and we’re just getting started.
              </h1>
              <p className={styles.detailText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className={styles.contactContainer}>
            <h1 className={styles.contactHeader}>Get In Touch</h1>
            <CustomInput placeholder="Enter your email" />
          </div>
          <div className={styles.policyContainer}>
            <div>
              <p>Terms of Service / Privacy Policy</p>
            </div>
            <div className={styles.socialIconsContainer}>
              <IconButton>
                <FacebookIcon className={styles.socialIcon} />
              </IconButton>
              <IconButton>
                <TwitterIcon className={styles.socialIcon} />
              </IconButton>
              <IconButton>
                <InstagramIcon className={styles.socialIcon} />
              </IconButton>
              <IconButton>
                <LinkedInIcon className={styles.socialIcon} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
