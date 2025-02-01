import { Button } from "../button";

import { IconAdd } from "../icons/icons";

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
    </footer>
  );
};
