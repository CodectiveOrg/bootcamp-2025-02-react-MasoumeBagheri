import { Button } from "../button";
import { IconEdit, IconTrash } from "../icons/icons";

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
            <Button className={styles.edit}>
              <IconEdit width={18} height={18} viewBox="0 0 18 18" />
            </Button>
            <Button className={styles.remove}>
              <IconTrash width={18} height={18} viewBox="0 0 18 18" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
