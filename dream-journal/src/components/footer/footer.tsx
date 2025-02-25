import { useContext } from "react";

import { Button } from "../button";

import { ModalContext } from "../../provider/modal-provider";

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <footer className={styles.footer}>
      <Button
        className={styles.addButton}
        shape="circle"
        size="medium"
        variant="solid"
        onClick={() => openModal()}
      >
        <MingcuteAddLine />
      </Button>
    </footer>
  );
};
