import * as React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import CustomDrawer from "../customDrawer/customDrawer";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.itemsContainer}>
          <li className={styles.infoOption}>What we do?</li>
          <li className={styles.logoContainer}>
            <Image src="/svgs/frizhub.svg" layout="fill" />
          </li>
          <li className={styles.scheduleBtnOption}>
            <button className={styles.scheduleBtn}>
              <span className={styles.phoneIcon}>&#9742;</span> Schedule a call
            </button>
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
          { name: "What we do", icon: <InfoOutlinedIcon />, onClick: () => {} },
          {
            name: "Schedule a call",
            icon: <PhoneAndroidOutlinedIcon />,
            onClick: () => {},
          },
        ]}
      />
    </>
  );
}
