import MingcuteLocationFill from "../../../../icons/MingcuteLocationFill";
import MingcutePhoneFill from "../../../../icons/MingcutePhoneFill";

import { Attraction } from "../../../../types/attraction.type";

import styles from "./sidebar.module.css";

type Props = {
  attraction: Attraction;
};

export const Sidebar: React.FC<Props> = ({ attraction }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>اطلاعات جاذبه گردشگری</div>
      {attraction.phone && (
        <div className={styles.phone}>
          <MingcutePhoneFill />
          {attraction.phone}
        </div>
      )}

      <div className={styles.address}>
        <MingcuteLocationFill />
        {attraction.address}
      </div>
    </aside>
  );
};
