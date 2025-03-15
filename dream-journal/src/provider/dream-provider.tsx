import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import { DREAMS_LOCAL_STORAGE_KEY } from "../constants/local-storage.keys";

import { Dream } from "../types/dream.type";

type DreamContextValue = {
  dreams: Dream[];
  addDream: (dream: Dream) => void;
  editDream: (dream: Dream) => void;
  removeDream: (id: string) => void;
};

export const DreamContext = createContext<DreamContextValue>({
  dreams: [],
  addDream: () => {},
  editDream: () => {},
  removeDream: () => {},
});

type Props = PropsWithChildren;

export const DreamProvider: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation();

  const [dreams, setDreams] = useState<Dream[]>(() => {
    const items = localStorage.getItem(DREAMS_LOCAL_STORAGE_KEY);

    if (items === null) {
      return [];
    }

    const dreams: Dream[] = JSON.parse(items);

    return dreams.map((dream) => ({
      ...dream,
      date: new Date(dream.date).toISOString(),
    }));
  });

  const addDream = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);

    toast.success(t("dreams.notifications.add"));
  };

  const editDream = (dream: Dream): void => {
    setDreams((oldDreams) =>
      oldDreams.map((oldDream) => {
        if (oldDream.id === dream.id) {
          return dream;
        }

        return oldDream;
      })
    );

    toast.success(t("dreams.notifications.edit"));
  };

  const removeDream = (id: string): void => {
    setDreams((old) => old.filter((x) => x.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(DREAMS_LOCAL_STORAGE_KEY, JSON.stringify(dreams));
  }, [dreams]);

  return (
    <DreamContext.Provider value={{ dreams, addDream, editDream, removeDream }}>
      {children}
    </DreamContext.Provider>
  );
};
