import { useEffect, useState } from "react";

import { useParams } from "react-router";

import { Body } from "./components/body";
import { Sidebar } from "./components/sidebar";
import { Carousel } from "./components/carousel";

import { Attraction as AttractionType } from "../../types/attraction.type";

import styles from "./attraction.module.css";

export const Attraction = () => {
  const { id } = useParams();

  const [attraction, setAttraction] = useState<AttractionType>();

  useEffect(() => {
    const fetchAttraction = async (): Promise<void> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`
      );

      const data = await response.json();
      console.log(data);

      setAttraction(data);
    };

    fetchAttraction().then();
  }, [id]);

  if (!attraction) {
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
