import { useRef } from "react";

import { Button } from "../button";
import { AddEditDreamForm } from "../Add-Edit-Dream-Form";

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import { Dream } from "../../types/dream.type";

import styles from "./footer.module.css";

type Props = {
  onAddDream: (dream: Dream) => void;
};

export const Footer: React.FC<Props> = ({ onAddDream }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = (isOpen: boolean): void => {
    if (!dialogRef.current) return;

    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  };

  return (
    <footer className={styles.footer}>
      <Button
        className={styles.addButton}
        shape="circle"
        size="medium"
        variant="solid"
        onClick={() => toggleDialog(true)}
      >
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <AddEditDreamForm onAddDream={onAddDream} toggleDialog={toggleDialog} />
      </dialog>
    </footer>
  );
};
