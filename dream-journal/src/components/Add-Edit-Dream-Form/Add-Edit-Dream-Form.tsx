import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { v4 as uuidv4 } from "uuid";

import { Button } from "../button";
import { DateInput } from "../date-input";
import { Select } from "../select";
import { TextInput } from "../text-input";
import { TextArea } from "../textarea-input";

import { Dream } from "../../types/dream.type";

import { validateDream } from "../../validation/dream-validation";

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
  const { t } = useTranslation();

  const initialDreamState: Dream = {
    id: "",
    title: "",
    description: "",
    date: "",
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
      [name]:
        name === "date" ? new Date(value).toISOString().split("T")[0] : value,
    }));
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validateDream(dream, t as (key: string) => string)) {
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
        {editingDream ? t("dreams.formTitle.edit") : t("dreams.formTitle.add")}
      </div>
      <TextInput
        name="title"
        placeholder={t("dreams.formInputs.title.placeholder")}
        value={dream.title}
        onChange={handleChange}
      />
      <TextArea
        name="description"
        placeholder={t("dreams.formInputs.description.placeholder")}
        value={dream.description}
        onChange={handleChange}
      />
      <DateInput
        name="date"
        value={
          dream.date ? new Date(dream.date).toISOString().split("T")[0] : ""
        }
        onChange={handleChange}
      />
      <Select
        name="vibe"
        options={[
          { value: "good", label: t("dreams.formInputs.vibe.good") },
          { value: "bad", label: t("dreams.formInputs.vibe.bad") },
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
          {t("dreams.actions.cancel")}
        </Button>
        <Button type="submit" size="large">
          {editingDream ? t("dreams.actions.edit") : t("dreams.actions.add")}
        </Button>
      </div>
    </form>
  );
};
