import { useContext } from "react";

import { FiltersContext } from "../../../../context/filters.context";

import useGenres from "../../../../queries/use-genres";

import styles from "./genre-filter.module.css";
import { FilterCard } from "../filter-card";

export const GenreFilter: React.FC = () => {
  const { filters, toggleGenre } = useContext(FiltersContext);

  const { data: genres } = useGenres();

  return (
    <FilterCard title="Genres">
      <div className={styles["genre-filter"]}>
        <div className={styles.title}>برچسب</div>
        <div className={styles.options}>
          {genres?.map((genre) => (
            <label key={genre.id}>
              <input
                key={genre.id}
                name="genre-filter"
                type="checkbox"
                checked={!!filters.genres.find((x) => x.id === genre.id)}
                onChange={() => toggleGenre(genre)}
              />
              {genre.name}
            </label>
          ))}
        </div>
      </div>
    </FilterCard>
  );
};
