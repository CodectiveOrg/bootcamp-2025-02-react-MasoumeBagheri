import { forwardRef } from "react";

import styles from "./date-input.module.css";

export const DateInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className={styles["date-input"]}>
      <input ref={ref} type="date" />
    </div>
  );
});
