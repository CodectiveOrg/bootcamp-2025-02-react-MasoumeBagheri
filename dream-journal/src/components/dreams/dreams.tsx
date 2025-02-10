
import { Button } from "../button";

import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";

import { Dream } from "../../types/dream.type";

import styles from "./dreams.module.css";

type Props = {
  dreams: Dream[];
};

export const Dreams: React.FC<Props> = ({ dreams }) => {
  return (
    <ul className={styles.dreams}>
      {dreams.map((dream) => {
        const { id, title, content, date, vibe } = dream;
        return (
          <li key={id}>
            <label>
              <input type="checkbox" />
              <div className={styles.title}>{title}</div>
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
        );
      })}
    </ul>
  );
};
