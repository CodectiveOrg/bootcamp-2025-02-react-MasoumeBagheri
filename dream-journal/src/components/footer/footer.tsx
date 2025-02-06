import { Button } from "../button";
import { TextBox } from "../text-input";

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Button
        className={styles.addButton}
        shape="circle"
        size="medium"
        variant="solid"
      >
        <MingcuteAddLine />
      </Button>
      <dialog>
        <div className={styles.content}>
          <div className={styles.title}>new dream</div>
          <TextBox placeholder="Input your dream..." />
          <div className={styles.action}>
            <Button variant="outlined" size="large">
              cancel
            </Button>
            <Button size="large">apply</Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
};
