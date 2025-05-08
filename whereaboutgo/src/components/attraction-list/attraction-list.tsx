import { useContext } from "react";

import { AttractionItem } from "../attraction-item";

import styles from "./attraction-list.module.css";
import { useQuery } from "@tanstack/react-query";
import { FiltersContext } from "../../context/filters-context";
import { fetchAttractions } from "../../api/fetch-attractions";

export const AttractionList: React.FC = () => {
  const { filters } = useContext(FiltersContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  return (
    <ul className={styles["attraction-list"]}>
      {data?.map((attraction) => (
        <AttractionItem
          key={`attraction-${attraction.id}`}
          attraction={attraction}
        />
      ))}
    </ul>
  );
};
