import { useContext, useRef } from "react";

import { Button } from "../button";
import { AddEditDreamForm } from "../Add-Edit-Dream-Form";

import { DreamContext } from "../../provider/dream-provider";

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  const { addDream } = useContext(DreamContext);

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
        <AddEditDreamForm onAddDream={addDream} toggleDialog={toggleDialog} />
      </dialog>
    </footer>
  );
};
