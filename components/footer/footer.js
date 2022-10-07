import Image from "next/image";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "./footer.module.css";
import CustomInput from "../common/customInput/customInput";
import FooterImage from "../../public/svgs/footer-design.svg";
import { Link } from "@material-ui/core";
import EmailForm from "../common/emailForm/emailForm";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.blackFooter}></div>
      <div className={styles.footerDesignContainer}>
        <Image src={FooterImage} layout="fill" />
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
                Bringing <b>Order to Chaos</b> for our amazing clients
                worldwide.
              </p>
            </div>
          </div>
          <div className={styles.contactContainer}>
            <h1 className={styles.contactHeader}>Get In Touch</h1>
            {/* <CustomInput placeholder="Enter your email" /> */}
            <EmailForm />
          </div>
          <div className={styles.policyContainer}>
            <div>
              <p>Terms of Service / Privacy Policy</p>
            </div>
            <div className={styles.socialIconsContainer}>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/frizhub"
              >
                <IconButton>
                  <LinkedInIcon className={styles.socialIcon} />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
