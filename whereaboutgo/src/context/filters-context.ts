import { createContext } from "react";

import { AttractionTag } from "../types/attraction-tag.type";
import { Filters } from "../types/filters.type";

type FiltersContextValue = {
  filters: Filters;
  toggleTag: (tag: AttractionTag) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {
    tags: [],
  },
  toggleTag: () => {},
});
