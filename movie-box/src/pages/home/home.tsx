import { Filters } from "../../components/filters";
import { MovieList } from "../../components/movie-list";

import { FiltersProvider } from "../../providers/filters.provider";

import styles from "./home.module.css";

export default function HomePage() {
  return (
    <FiltersProvider>
      <div className={styles.home}>
        <Filters />
        <MovieList />
      </div>
    </FiltersProvider>
  );
}
