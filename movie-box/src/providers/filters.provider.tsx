import { useState, type PropsWithChildren } from "react";

import { FiltersContext } from "../context/filters.context";

import type { FiltersType } from "../types/filters.type";
import type { GenreType } from "../types/genre.type";

export const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState<FiltersType>({
    genres: [],
  });

  const toggleGenre = (genre: GenreType): void => {
    setFilters((old) => {
      const index = old.genres.findIndex((x) => x.id === genre.id);

      if (index === -1) {
        return { ...old, genres: [...old.genres, genre] };
      }

      const clone = [...old.genres];
      clone.splice(index, 1);
      return { ...old, genres: clone };
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, toggleGenre: toggleGenre }}>
      {children}
    </FiltersContext.Provider>
  );
};
