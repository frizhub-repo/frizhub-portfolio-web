import { Drawer } from "@material-ui/core";
import styles from "./customDrawer.module.css";

export default function CustomDrawer({
  isOpen,
  setIsOpen,
  anchor = "right",
  items,
}) {
  return (
    <Drawer anchor={anchor} open={isOpen} onClose={() => setIsOpen(false)}>
      <ul className={styles.itemsContainer}>
        {items.map((item, index) => (
          <li key={index} onClick={item.onClick} className={styles.item}>
            <span className={styles.iconContainer}>{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </Drawer>
  );
}
