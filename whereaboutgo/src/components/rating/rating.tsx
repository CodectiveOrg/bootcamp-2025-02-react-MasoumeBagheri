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
  const totalStars = 5;
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  console.log([...Array(fullStars)]);
  console.log(hasHalfStar);
  console.log([...Array(emptyStars)]);

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
