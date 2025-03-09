import { createContext, PropsWithChildren, useEffect, useState } from "react";

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
  const [dreams, setDreams] = useState<Dream[]>(() => {
    const items = localStorage.getItem(DREAMS_LOCAL_STORAGE_KEY);

    if (items === null) {
      return [];
    }

    const dreams: Dream[] = JSON.parse(items);

    return dreams.map((dream) => ({ ...dream, date: new Date(dream.date) }));
  });

  const addDream = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
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
