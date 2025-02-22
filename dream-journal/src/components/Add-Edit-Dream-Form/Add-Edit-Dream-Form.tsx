import { FormEvent, useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import { Button } from "../button";
import { DateInput } from "../date-input";
import { Select } from "../select";
import { TextInput } from "../text-input";
import { TextArea } from "../textarea-input";

import { Vibe } from "../../types/vibe.type";
import { Dream } from "../../types/dream.type";

import styles from "./Add-Edit-Dream-Form.module.css";

type Props = {
  onAddDream: (dream: Dream) => void;
  toggleDialog: (isOpen: boolean) => void;
};

export const AddEditDreamForm: React.FC<Props> = ({
  onAddDream,
  toggleDialog,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

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
    <form ref={formRef} onSubmit={formSubmitHandler} className={styles.form}>
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
        <Button type="submit" size="large" onClick={() => toggleDialog(false)}>
          create
        </Button>
      </div>
    </form>
  );
};
