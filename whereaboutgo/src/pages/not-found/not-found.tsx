import { Link } from "react-router";
import SvgComponent from "../../icons/svgComponent";

import styles from "./not-fond.module.css";

export const NotFound: React.FC = () => {
  return (
    <div className={styles["not-found"]}>
      <SvgComponent className={styles.emoji} />
      <div className={styles.description}>صفحه‌ی مورد نظر پیدا نشد.</div>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
};
