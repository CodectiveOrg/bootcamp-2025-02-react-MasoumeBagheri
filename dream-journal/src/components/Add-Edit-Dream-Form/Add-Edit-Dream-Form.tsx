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
  onSubmit: (dream: Dream) => void;
  editingDream?: Dream;
  toggleDialog: (isOpen: boolean) => void;
};

export const AddEditDreamForm: React.FC<Props> = ({
  onSubmit,
  editingDream,
  toggleDialog,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const cancelHandler = (): void => {
    formRef.current?.reset();
    toggleDialog(false);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const vibe = (formData.get("vibe") as Vibe) || "good";

    if (!title) {
      console.log("Title is required.");
      return;
    }

    if (!description) {
      console.log("description is required.");
      return;
    }

    if (!date) {
      console.log("Date is required.");
      return;
    }

    if (!vibe) {
      console.log("Vibe is required.");
      return;
    }

    const dream: Dream = {
      id: editingDream?.id ?? uuidv4(),
      title,
      description,
      date: new Date(date),
      vibe,
    };

    onSubmit(dream);

    e.currentTarget.reset();
  };

  return (
    <form ref={formRef} onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles.title}>
        {editingDream ? "edit dream" : "new dream"}
      </div>
      <TextInput
        name="title"
        placeholder="Input your dream..."
        defaultValue={editingDream?.title}
      />
      <TextArea
        name="description"
        placeholder="Input your description..."
        defaultValue={editingDream?.description}
      />
      <DateInput
        name="date"
        defaultValue={editingDream?.date.toISOString().split("T")[0]}
      />
      <Select
        name="vibe"
        options={[
          { value: "good", label: "😃 Good" },
          { value: "bad", label: "😭 Bad" },
        ]}
        defaultValue={editingDream?.vibe ?? "good"}
      />

      <div className={styles.action}>
        <Button
          type="button"
          variant="outlined"
          size="large"
          onClick={cancelHandler}
        >
          cancel
        </Button>
        <Button type="submit" size="large">
          {editingDream ? "edit" : "create"}
        </Button>
      </div>
    </form>
  );
};
