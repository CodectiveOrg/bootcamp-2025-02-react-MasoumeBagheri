import { Attraction } from "../../../../types/attraction.type";

import styles from "./body.module.css";

type Props = {
  attraction: Attraction;
};
export const Body: React.FC<Props> = ({ attraction }) => {
  return (
    <div className={styles.body}>
      <div dangerouslySetInnerHTML={{ __html: attraction.body }}></div>
    </div>
  );
};
