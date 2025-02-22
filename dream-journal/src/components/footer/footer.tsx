import { FormEvent, useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import { Button } from "../button";
import { TextInput } from "../text-input";
import { DateInput } from "../date-input";
import { TextArea } from "../textarea-input";
import { Select } from "../select";

import { Dream } from "../../types/dream.type";
import { Vibe } from "../../types/vibe.type";

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import styles from "./footer.module.css";

type Props = {
  onAddDream: (dream: Dream) => void;
};

export const Footer: React.FC<Props> = ({ onAddDream }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleDialog = (isOpen: boolean): void => {
    if (!dialogRef.current) return;

    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const date = formData.get("date") as string;
    console.log(date);

    const content = formData.get("content") as string;
    const vibe = formData.get("vibe") as Vibe;

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
        <form
          ref={formRef}
          onSubmit={formSubmitHandler}
          className={styles.content}
        >
          <div className={styles.title}>new dream</div>
          <TextInput name="title" placeholder="Input your dream..." />
          <TextArea name="content" placeholder="Input your content..." />
          <DateInput name="date" />
          <Select
            name="vibe"
            options={[
              { value: "good", label: "😃 Good" },
              { value: "bad", label: "😭 Bad" },
            ]}
          />

          <div className={styles.action}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => toggleDialog(false)}
            >
              cancel
            </Button>
            <Button type="submit" size="large">
              create
            </Button>
          </div>
        </form>
      </dialog>
    </footer>
  );
};
