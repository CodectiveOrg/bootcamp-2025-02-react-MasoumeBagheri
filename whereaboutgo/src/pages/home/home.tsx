import { AttractionList } from "../../components/attraction-list";
import { Filters } from "../../components/filters";

import FiltersProvider from "../../providers/filters-provider";

import styles from "./home.module.css";

export const Home = () => {
  return (
    <FiltersProvider>
      <div className={styles.home}>
        <Filters />
        <AttractionList />
      </div>
    </FiltersProvider>
  );
};
