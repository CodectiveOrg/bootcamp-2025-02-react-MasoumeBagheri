import { createContext } from "react";
import type { FiltersType } from "../types/filters.type";
import type { GenreType } from "../types/genre.type";

type FiltersContextValue = {
  filters: FiltersType;
  toggleGenre: (genre: GenreType) => void;
  updateQuery: (query: string) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {
    query: "",
    genres: [],
  },
  toggleGenre: () => {},
  updateQuery: () => {},
});
