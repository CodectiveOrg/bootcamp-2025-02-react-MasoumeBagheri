import { forwardRef } from "react";

import styles from "./vibe-input.module.css";

export const VibeInput = forwardRef<HTMLSelectElement>((_, ref) => {
  return (
    <div className={styles["vibe-input"]}>
      <select ref={ref}>
        <option value="good">😃 It was a good dream</option>
        <option value="bad">😢 It was a bad dream</option>
      </select>
    </div>
  );
});
