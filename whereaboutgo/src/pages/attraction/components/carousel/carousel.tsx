import { useEffect, useState } from "react";

import clsx from "clsx";

import { Attraction } from "../../../../types/attraction.type";

import styles from "./carousel.module.css";

type Props = {
  attraction: Attraction;
};

export const Carousel: React.FC<Props> = ({ attraction }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((old) => (old + 1) % attraction.carousel.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [attraction]);

  return (
    <div className={styles.carousel}>
      <ul style={{ transform: `translateX(${slideIndex * 100}%)` }}>
        {attraction.carousel.map((image) => (
          <li key={image}>
            <img
              src={`${import.meta.env.VITE_CDN_BASE_URL}/${image}`}
              alt=""
              height={480}
            />
          </li>
        ))}
      </ul>
      <div className={styles.bullets}>
        {attraction.carousel.map((_, index) => (
          <button
            key={index}
            className={clsx(
              styles.bullet,
              index === slideIndex && styles.active
            )}
            onClick={() => setSlideIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
