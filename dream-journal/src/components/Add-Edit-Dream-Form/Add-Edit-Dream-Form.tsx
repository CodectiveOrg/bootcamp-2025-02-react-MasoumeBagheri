import { FormEvent, useEffect, useState } from "react";

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
  const [selectedVibe, setSelectedVibe] = useState<Vibe>("good");
  useEffect(() => {
    if (editingDream?.vibe) {
      setSelectedVibe(editingDream.vibe);
    }
  }, [editingDream]);

  const cancelHandler = (): void => {
    toggleDialog(false);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;

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

    const dream: Dream = {
      id: editingDream?.id ?? uuidv4(),
      title,
      description,
      date: new Date(date),
      vibe: selectedVibe,
    };

    onSubmit(dream);

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
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
        value={selectedVibe}
        onChange={(e) => setSelectedVibe(e.target.value as Vibe)}
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
