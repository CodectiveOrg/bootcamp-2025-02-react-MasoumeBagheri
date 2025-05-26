import type { PropsWithChildren } from "react";

import styles from "./filter-card.module.css";

type Props = PropsWithChildren<{
  title: string;
}>;

export const FilterCard: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles["filter-card"]}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
