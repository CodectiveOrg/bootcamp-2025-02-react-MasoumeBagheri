import { useContext } from "react";

import { AttractionItem } from "../attraction-item";

import { AttractionsContext } from "../../context/attractions-context";

import styles from "./attraction-list.module.css";

export const AttractionList: React.FC = () => {
  const { filteredAttractions } = useContext(AttractionsContext);

  return (
    <ul className={styles["attraction-list"]}>
      {filteredAttractions.map((attraction) => (
        <AttractionItem
          key={`attraction-${attraction.id}`}
          attraction={attraction}
        />
      ))}
    </ul>
  );
};
