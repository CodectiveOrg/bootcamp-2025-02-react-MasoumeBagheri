import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { Dream } from "../types/dream.type";

type DreamContextValue = {
  dreams: Dream[];
  addDream: (dream: Dream) => void;
  editDream: (dream: Dream) => void;
};

export const DreamContext = createContext<DreamContextValue>({
  dreams: [],
  addDream: () => {},
  editDream: () => {},
});

type Props = PropsWithChildren;

export const DreamProvider: React.FC<Props> = ({ children }) => {
  const [dreams, setDreams] = useState<Dream[]>(() => {
    const items = localStorage.getItem("dreams");

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
    console.log(dream);

    setDreams((oldDreams) =>
      oldDreams.map((oldDream) => {
        if (oldDream.id === dream.id) {
          return dream;
        }

        return oldDream;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  return (
    <DreamContext.Provider value={{ dreams, addDream, editDream }}>
      {children}
    </DreamContext.Provider>
  );
};
