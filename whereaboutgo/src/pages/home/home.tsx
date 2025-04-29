import { AttractionList } from "../../components/attraction-list";
import { Filters } from "../../components/filters";

import AttractionsProvider from "../../providers/attractions-provider";
import FiltersProvider from "../../providers/filters-provider";

import styles from "./home.module.css";

export const Home = () => {
  return (
    <FiltersProvider>
      <AttractionsProvider>
        <div className={styles.home}>
          <Filters />
          <AttractionList />
        </div>
      </AttractionsProvider>
    </FiltersProvider>
  );
};
