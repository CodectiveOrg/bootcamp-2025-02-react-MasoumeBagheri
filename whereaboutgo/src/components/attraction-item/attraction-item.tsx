import { Rating } from "../rating";

import { convertToPersianDigits } from "../../utils/convertToPersianDigits";

import { Attraction } from "../../types/attraction";

import styles from "./attraction-item.module.css";

type AttractionProps = {
  attraction: Attraction;
};

export const AttractionItem: React.FC<AttractionProps> = ({ attraction }) => {
  const { title, description, thumbnail, averageRating, ratingCount } =
    attraction;

  return (
    <li className={styles.attraction}>
      <div className={styles.visuals}>
        <img
          src={`${import.meta.env.VITE_CDN_BASE_URL}${thumbnail}`}
          alt={title}
        />
      </div>
      <div className={styles.writings}>
        <div className={styles.title}>{title}</div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className={styles.rating}>
        <div className={styles.averageRating}>
          <Rating averageRating={averageRating} />
          <h5>{convertToPersianDigits(averageRating)}</h5>
        </div>
        <div className={styles.ratingCount}>
          ({convertToPersianDigits(ratingCount)} رأی)
        </div>
      </div>
    </li>
  );
};
