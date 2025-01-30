import { Button } from "../button";
import { DreamFilter } from "../dream-filter";
import { IconDark } from "../icons/icons";
import { SearchBox } from "../search-box";

import styles from "./toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <SearchBox />
      <DreamFilter />
      <Button className="theme" shape="square" size="small">
        <IconDark fill="var(--color-surface)" />
      </Button>
    </div>
  );
};
