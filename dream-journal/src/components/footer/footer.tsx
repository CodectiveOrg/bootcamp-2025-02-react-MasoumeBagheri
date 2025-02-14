import { useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import { Button } from "../button";
import { TextInput } from "../text-input";

import { Dream } from "../../types/dream.type";

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import styles from "./footer.module.css";
import { DateInput } from "../date-input";
import { TextArea } from "../textarea-input";
import { VibeInput } from "../vibe-input";

type Props = {
  onAddDream: (dream: Dream) => void;
};

export const Footer: React.FC<Props> = ({ onAddDream }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const vibeRef = useRef<HTMLSelectElement>(null);

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
    const date = dateRef.current?.value;
    const content = contentRef.current?.value;
    const vibe = vibeRef.current?.value as "good" | "bad";

    if (!title) {
      console.log("Title is required.");
      return;
    }

    if (!date) {
      console.log("Date is required.");
      return;
    }

    if (!content) {
      console.log("Content is required.");
      return;
    }

    if (!vibe) {
      console.log("Content is required.");
      return;
    }

    const dream: Dream = {
      id: uuidv4(),
      title,
      content,
      date: new Date(date),
      vibe,
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
          <TextArea ref={contentRef} placeholder="Input your content..." />
          <DateInput ref={dateRef} />
          <VibeInput ref={vibeRef} />
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
