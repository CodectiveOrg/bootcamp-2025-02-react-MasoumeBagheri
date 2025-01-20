import { IconSearch } from "../icons/icons";
import { TextInput } from "../text-input";

import styles from "./search-box.module.css";

export const SearchBox: React.FC = () => {
  return (
    <div className={styles["search-box"]}>
      <TextInput
        className={styles["text-input"]}
        placeholder="Search dream..."
      />
      <IconSearch className={styles.icon} />
    </div>
  );
};
