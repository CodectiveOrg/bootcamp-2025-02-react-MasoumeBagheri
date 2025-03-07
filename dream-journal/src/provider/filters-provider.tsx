import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

import { DreamContext } from "./dream-provider";

import { Dream } from "../types/dream.type";
import { Filters } from "../types/filters.type";
import { doseInclude } from "../utils/string-utils";

type filterContextValue = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  filteredDream: Dream[];
};

export const FiltersContext = createContext<filterContextValue>({
  filters: {},
  setFilters: () => {},
  filteredDream: [],
});

type Props = PropsWithChildren;

export const FiltersProvider: React.FC<Props> = ({ children }) => {
  const { dreams } = useContext(DreamContext);

  const [filters, setFilters] = useState<Filters>({});

  const filteredDream = useMemo(() => {
    return dreams.filter((dream) => {
      if (filters.query && !doseInclude(dream.title, filters.query)) {
        return false;
      }

      if (filters.vibe && dream.vibe !== filters.vibe) {
        return false;
      }

      return true;
    });
  }, [dreams, filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, filteredDream }}>
      {children}
    </FiltersContext.Provider>
  );
};
