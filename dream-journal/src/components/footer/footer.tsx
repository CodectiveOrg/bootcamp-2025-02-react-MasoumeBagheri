import { Button } from "../button";

import { IconAdd } from "../icons/icons";
import { Input } from "../input";

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
      <dialog open>
        <div className={styles.modal}>
          <div className="title">New Dream</div>
          <Input placeholder="Input your dream..." />
          <div className="actions">
            <Button>CANCEL</Button>
            <Button>APPLY</Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
};
