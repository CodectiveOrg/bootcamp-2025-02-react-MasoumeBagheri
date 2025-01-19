import { Button } from "../button";
import { DreamFilter } from "../dream-filter";
import { IconLight } from "../icons/icons";
import { SearchBox } from "../search-box";

import styles from "./toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <SearchBox />
      <DreamFilter />
      <Button className="theme">
        <IconLight />
      </Button>
    </div>
  );
};
