import MingcuteStarFill from "../../icons/MingcuteStarFill";

import styles from "./rating.module.css";

type RatingProps = {
  averageRating: number;
  color?: string;
};

export const Rating: React.FC<RatingProps> = ({
  averageRating,
  color = "var(--color-rating)",
}) => {
  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((index) => (
        <MingcuteStarFill
          key={`star-${index}`}
          fill={averageRating >= index ? color : ""}
          color={averageRating >= index ? color : "#ccc"}
        />
      ))}
    </div>
  );
};
