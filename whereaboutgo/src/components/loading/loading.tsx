import { ThreeDot } from "react-loading-indicators";

import styles from "./loading.module.css";

export const Loading: React.FC = () => {
  return (
    <div className={styles.fullscreen}>
      <ThreeDot color="var(--color-primary)" />
    </div>
  );
};
