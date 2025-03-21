import { useContext } from "react";

import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import { Button } from "../button";

import { ModalContext } from "../../provider/modal-provider";
import { FiltersContext } from "../../provider/filters-provider";
import { DreamContext } from "../../provider/dream-provider";

import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import FluentEmojiSmilingFaceWithHeartEyes from "../../icons/FluentEmojiSmilingFaceWithHeartEyes";
import FluentEmojiCryingFace from "../../icons/FluentEmojiCryingFace";

import styles from "./dreams.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-CA");

export const Dreams: React.FC = () => {
  const { t } = useTranslation();

  const { openModal } = useContext(ModalContext);
  const { filteredDream } = useContext(FiltersContext);
  const { removeDream } = useContext(DreamContext);

  const handleRemoveDream = (id: string) => {
    removeDream(id);
    toast.success(t("dreams.notifications.removed"));
  };

  return (
    <ul className={styles.dreams}>
      {filteredDream.map((dream) => {
        const { id, title, description, date, vibe } = dream;
        return (
          <li key={id}>
            <div className={styles.vibe}>
              {vibe === "good" ? (
                <FluentEmojiSmilingFaceWithHeartEyes />
              ) : (
                <FluentEmojiCryingFace />
              )}
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>
              {dateFormatter.format(new Date(date))}
            </div>
            <div className={styles.description}>{description}</div>
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
              <Button
                variant="transparent"
                className={styles.remove}
                onClick={() => {
                  handleRemoveDream(id);
                }}
              >
                <MingcuteDelete2Line />
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
