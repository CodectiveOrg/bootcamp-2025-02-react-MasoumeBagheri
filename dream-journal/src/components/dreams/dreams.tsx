import { Button } from "../button";

import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";

import styles from "./dreams.module.css";

const dreams = ["DREAM #1", "DREAM #2", "DREAM #3"];

export const Dreams: React.FC = () => {
  return (
    <ul className={styles.dreams}>
      {dreams.map((dream) => (
        <li key={dream}>
          <label>
            <input type="checkbox" />
            <div className={styles.title}>{dream}</div>
          </label>
          <div className={styles.actions}>
            <Button variant="transparent" className={styles.edit}>
              <MingcuteEdit2Line />
            </Button>
            <Button variant="transparent" className={styles.remove}>
              <MingcuteDelete2Line />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
