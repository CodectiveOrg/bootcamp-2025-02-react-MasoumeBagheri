import { AttractionItem } from "../attraction-item";

import { Attraction } from "../../types/attraction";

import styles from "./attraction-list.module.css";

type AttractionListProps = {
  attractions: Attraction[];
};

export const AttractionList: React.FC<AttractionListProps> = ({
  attractions,
}) => {
  return (
    <ul className={styles["attraction-list"]}>
      {attractions.map((attraction) => (
        <AttractionItem
          key={`attraction-${attraction.id}`}
          attraction={attraction}
        />
      ))}
    </ul>
  );
};
