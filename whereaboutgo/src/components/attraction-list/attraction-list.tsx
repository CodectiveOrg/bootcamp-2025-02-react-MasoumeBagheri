import { useContext } from "react";

import { AttractionItem } from "../attraction-item";

import styles from "./attraction-list.module.css";
import { useQuery } from "@tanstack/react-query";
import { FiltersContext } from "../../context/filters-context";
import { fetchAttractions } from "../../api/fetch-attractions";
import { Loading } from "../loading";

export const AttractionList: React.FC = () => {
  const { filters } = useContext(FiltersContext);

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
    staleTime: 60 * 1000,
    placeholderData: [],
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  return (
    <ul
      className={styles["attraction-list"]}
      style={{ opacity: isFetching ? "0.5" : "1" }}
    >
      {data?.map((attraction) => (
        <AttractionItem
          key={`attraction-${attraction.id}`}
          attraction={attraction}
        />
      ))}
    </ul>
  );
};
