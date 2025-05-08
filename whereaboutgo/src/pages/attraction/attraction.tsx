import { useParams } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { Body } from "./components/body";
import { Sidebar } from "./components/sidebar";
import { Carousel } from "./components/carousel";

import { fetchAttractionDetails } from "../../api/fetch-attraction-details";

import styles from "./attraction.module.css";

export const Attraction = () => {
  const { id } = useParams();

  const { data: attraction, isFetching } = useQuery({
    queryKey: ["attraction", id],
    queryFn: () => fetchAttractionDetails(id),
    staleTime: 60 * 1000,
  });

  if (isFetching || !attraction) {
    return <>در حال بارگذاری...</>;
  }

  return (
    <div className={styles.attraction}>
      <Sidebar attraction={attraction} />
      <Carousel attraction={attraction} />
      <Body attraction={attraction} />
    </div>
  );
};
