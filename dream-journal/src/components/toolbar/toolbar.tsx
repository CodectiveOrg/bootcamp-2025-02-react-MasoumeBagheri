import { Button } from "../button";
import { DreamFilter } from "../dream-filter";
import { TextBox } from "../textbox";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonStarsLine from "../../icons/MingcuteMoonStarsLine";

import styles from "./toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <TextBox
        placeholder="Search dream..."
        suffixIcon={<MingcuteSearchLine className={styles["search-icon"]} />}
      />
      <DreamFilter />
      <Button shape="square" size="small" variant="solid">
        <MingcuteMoonStarsLine />
      </Button>
    </div>
  );
};
