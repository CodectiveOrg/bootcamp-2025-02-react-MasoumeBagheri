import { IconSearch } from "../icons/icons";
import { Input } from "../input";

import styles from "./search-box.module.css";

export const SearchBox: React.FC = () => {
  return (
    <div className={styles["search-box"]}>
      <Input className={styles["text-input"]} placeholder="Search dream..." />
      <IconSearch className={styles.icon} />
    </div>
  );
};
