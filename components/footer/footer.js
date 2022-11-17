import { IconButton, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Image from "next/image";
import FooterImage from "../../public/svgs/footer-design.svg";
import EmailForm from "../common/emailForm/emailForm";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerDesignContainer}>
        <Image src={FooterImage} layout="fill" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.footerHeader}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <Image src="/svgs/frizhub.svg" layout="fill" />
              </div>
              <div>
                <h1 className={styles.contactHeader}>Get In Touch</h1>
              </div>
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
          <div className={styles.blackFooter}>FrizHub © 2016</div>
        </div>
      </div>
    </div>
  );
}
