import { useEffect, useState } from "react";

import { AttractionList } from "../../components/attraction-list";
import { Filters } from "../../components/filters";

import styles from "./home.module.css";

export const Home = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async (): Promise<void> => {
      const response = await fetch(
        "https://api.codective.ir/whereabouts/attraction"
      );
      const data = await response.json();
      setAttractions(data);
    };
    fetchAttractions().then();
  }, []);

  return (
    <div className={styles.home}>
      <Filters />
      <AttractionList attractions={attractions} />
    </div>
  );
};
