import Link from "next/link";
import Image from "next/image";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import styles from "./productCard.module.css";

export default function ProductCard({
  color,
  logo,
  bgColor,
  specs,
  overview,
  bottomSvg,
  linkTo,
  logoWidth,
}) {
  return (
    <div
      style={{ background: bgColor }}
      className={`${styles.uniqueText} ${styles.container}`}
    >
      <div className={styles.contentContainer}>
        <div
          style={{ width: logoWidth ?? "" }}
          className={styles.logoContainer}
        >
          <Image src={logo} layout="fill" />
        </div>
        <div>
          <p className={styles.specs} style={{ color: color ?? "" }}>
            {specs?.map((spec, index) =>
              index === specs.length - 1 ? spec : `${spec}, `
            )}
          </p>
        </div>
        <div>
          <h3 className={styles.overview} style={{ color: color ?? "" }}>
            {overview}
          </h3>
        </div>
        <Link href={linkTo}>
          <div className={styles.viewBtnContainer}>
            <button className={styles.viewBtn} style={{ color: color ?? "" }}>
              View Casestudy
            </button>
            <ArrowRightAltOutlinedIcon
              className={styles.arrow}
              fontSize="large"
            />
          </div>
        </Link>
      </div>
      {bottomSvg && <img src={bottomSvg} className={styles.bottomSvg} />}
    </div>
  );
}
