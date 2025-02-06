import { TextBoxProps } from "./textboxtypes";

import styles from "./textbox.module.css";

export const TextBox: React.FC<TextBoxProps> = ({
  suffixIcon,
  className,
  ...rest
}) => {
  return (
    <div className={styles.input}>
      <input type="text" {...rest} />
      {suffixIcon}
    </div>
  );
};
