import { Button } from "../button";

import { IconAdd } from "../icons/icons";
import { TextBox } from "../textbox";

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
        <IconAdd fill="var(--color-surface)" />
      </Button>
      <dialog>
        <div className={styles.content}>
          <div className={styles.title}>new dream</div>
          <TextBox placeholder="Input your dream..." />
          <div className="actions">
            <Button>cancel</Button>
            <Button>apply</Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
};
