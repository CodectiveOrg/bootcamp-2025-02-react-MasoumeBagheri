import { useRef } from "react";

import { Button } from "../button";
import { TextInput } from "../text-input";

import { Dream } from "../../types/dream.type";

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import styles from "./footer.module.css";

type Props = {
  onAddDream: (dream: Dream) => void;
};

export const Footer: React.FC<Props> = ({ onAddDream }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDialog = (isOpen: boolean): void => {
    if (!dialogRef.current) return;

    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  };

  const addDreamHandler = (): void => {
    const title = inputRef.current?.value;

    if (!title) {
      console.log("Errorrrrrrrrrrrrrrrrr!");
      return;
    }

    const dream: Dream = {
      id: "",
      title,
      content: "",
      date: new Date(),
      vibe: "good",
    };

    onAddDream(dream);

    toggleDialog(false);
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
        <div className={styles.content}>
          <div className={styles.title}>new dream</div>
          <TextInput ref={inputRef} placeholder="Input your dream..." />
          <div className={styles.action}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => toggleDialog(false)}
            >
              cancel
            </Button>
            <Button size="large" onClick={addDreamHandler}>
              apply
            </Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
};
