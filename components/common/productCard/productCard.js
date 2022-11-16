import Link from "next/link";
import Image from "next/image";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import styles from "./productCard.module.css";

export default function ProductCard({
  color,
  logo,
  heading,
  bgColor,
  specs,
  overview,
  bottomSvg,
  linkTo,
  logoWidth,
  logoContainerHeight = "60px",
}) {
  return (
    <div
      style={{ background: bgColor }}
      className={`${styles.uniqueText} ${styles.container}`}
    >
      <div className={styles.contentContainer}>
        <div
          style={{
            width: logoWidth ?? "",
            height: logoContainerHeight,
          }}
          className={styles.logoContainer}
        >
          {logo ? (
            <Image src={logo} layout="fill" />
          ) : (
            <h3 className={styles.logoHeight} style={{ color: color ?? "" }}>
              {heading}
            </h3>
          )}
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
              View Case Study
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
