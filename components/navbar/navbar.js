import * as React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import CustomDrawer from "../customDrawer/customDrawer";
import { scroller } from "react-scroll";
import BasicModal from "../common/modal/modal";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const router = useRouter();

  function handleScheduleClick() {
    window.open("https://calendly.com/tabishmunir");
  }

  function handleInfoClick() {
    scroller.scrollTo("caseStudies", { smooth: true });
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.itemsContainer}>
          <li>
            <span className={styles.infoOption} onClick={handleInfoClick}>
              Case Studies
            </span>
          </li>
          {/* <li
            className={styles.scheduleBtnOption}
           
          > */}
          {/* </li> */}

          <li className={styles.logoContainer}>
            <Image src="/svgs/frizhub.svg" layout="fill" alt="nothing" />
          </li>
          <li className={styles.scheduleBtnOption}>
            <div className={styles.scheduleBtn}>
              <span className={styles.phoneIcon}></span>
              <BasicModal buttonCaption="GET IN TOUCH"></BasicModal>
            </div>
          </li>
          <li className={styles.menuBtnOption}>
            <button
              className={styles.menuBtn}
              onClick={() => setIsDrawerOpen((prev) => !prev)}
            >
              <MenuIcon />
            </button>
          </li>
        </ul>
      </div>
      <CustomDrawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        items={[
          {
            name: "What we do",
            icon: <InfoOutlinedIcon />,
            onClick: handleInfoClick,
          },
          {
            name: "Schedule a call",
            icon: <PhoneAndroidOutlinedIcon />,
            onClick: handleScheduleClick,
          },
          {
            name: "Pricing",
            icon: <InfoOutlinedIcon />,
            onClick: () => router.push("/pricing"),
          },
        ]}
      />
    </>
  );
}
