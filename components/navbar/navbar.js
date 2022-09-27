import * as React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import CustomDrawer from "../customDrawer/customDrawer";
import { scroller } from "react-scroll";
import BasicModal from "../common/modal/modal";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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
          <li className={styles.infoOption} onClick={handleInfoClick}>
            What we do?
          </li>
          <li className={styles.logoContainer}>
            <Image src="/svgs/frizhub.svg" layout="fill" alt="nothing" />
          </li>
          <li className={styles.scheduleBtnOption}>
            {/* <button >
              <span className={styles.phoneIcon}></span>
            </button> */}
            <span className={styles.phoneIcon}></span>
            <BasicModal buttonCaption="SCHEDULE A CALL"></BasicModal>
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
        ]}
      />
    </>
  );
}
