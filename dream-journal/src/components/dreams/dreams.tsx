import { useContext } from "react";

import { Button } from "../button";

import { DreamContext } from "../../provider/dream-provider";

import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";

import styles from "./dreams.module.css";
import { ModalContext } from "../../provider/modal-provider";

const dateFormatter = new Intl.DateTimeFormat("en-CA");

export const Dreams: React.FC = () => {
  const { dreams } = useContext(DreamContext);
  const { openModal } = useContext(ModalContext);

  return (
    <ul className={styles.dreams}>
      {dreams.map((dream) => {
        const { id, title, content, date, vibe } = dream;
        return (
          <li key={id}>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{dateFormatter.format(date)}</div>
            <div className={styles.actions}>
              <Button
                variant="transparent"
                className={styles.edit}
                onClick={() => {
                  openModal(dream);
                }}
              >
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
