import { FormEvent, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Button } from "../button";
import { DateInput } from "../date-input";
import { Select } from "../select";
import { TextInput } from "../text-input";
import { TextArea } from "../textarea-input";

import { toast } from "react-toastify";

import { Dream } from "../../types/dream.type";

import { MODAL_CONTAINER_ID } from "../../constants/id";

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
  const initialDreamState: Dream = {
    id: "",
    title: "",
    description: "",
    date: new Date(),
    vibe: "good",
  };

  const [dream, setDream] = useState<Dream>(initialDreamState);

  useEffect(() => {
    if (editingDream) {
      setDream(editingDream);
    } else {
      setDream(initialDreamState);
    }
  }, [editingDream]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setDream((old) => ({
      ...old,
      [name]: name === "date" ? new Date(value) : value,
    }));
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { title, description, date, vibe } = dream;

    if (!title) {
      toast.error("Title is required.", { containerId: MODAL_CONTAINER_ID });
      return;
    }

    if (!description) {
      toast.error("description is required.", {
        containerId: MODAL_CONTAINER_ID,
      });
      return;
    }

    if (!date) {
      toast.error("Date is required.", { containerId: MODAL_CONTAINER_ID });
      return;
    }

    if (!vibe) {
      toast.error("Vibe is required.", { containerId: MODAL_CONTAINER_ID });
      return;
    }

    onSubmit({
      ...dream,
      id: dream.id || uuidv4(),
    });

    toggleDialog(false);
  };

  const cancelHandler = (): void => {
    setDream(initialDreamState);
    toggleDialog(false);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles.title}>
        {editingDream ? "edit dream" : "new dream"}
      </div>
      <TextInput
        name="title"
        placeholder="Input your dream..."
        value={dream.title}
        onChange={handleChange}
      />
      <TextArea
        name="description"
        placeholder="Input your description..."
        value={dream.description}
        onChange={handleChange}
      />
      <DateInput
        name="date"
        value={dream.date.toISOString().split("T")[0]}
        onChange={handleChange}
      />
      <Select
        name="vibe"
        options={[
          { value: "good", label: "😃 Good" },
          { value: "bad", label: "😭 Bad" },
        ]}
        value={dream.vibe}
        onChange={handleChange}
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
          {editingDream ? "edit" : "add"}
        </Button>
      </div>
    </form>
  );
};
