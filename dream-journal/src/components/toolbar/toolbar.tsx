import { Button } from "../button";
import { DreamFilter } from "../dream-filter";
import { IconDark, IconSearch } from "../icons/icons";
import { TextBox } from "../textbox";

import styles from "./toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <TextBox
        placeholder="Search dream..."
        suffixIcon={<IconSearch className={styles.icon} />}
      />
      <DreamFilter />
      <Button className="theme" shape="square" size="small" variant="solid">
        <IconDark fill="var(--color-surface)" />
      </Button>
    </div>
  );
};
