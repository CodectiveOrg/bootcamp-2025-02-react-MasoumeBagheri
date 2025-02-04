import { TextBoxProps } from "./textboxtypes";

import classNames from "classnames";

import styles from "./textbox.module.css";

export const TextBox: React.FC<TextBoxProps> = ({
  suffixIcon,
  variant,
  className,
  ...rest
}) => {
  const classes = classNames(className, {
    [`input-${variant}`]: variant,
  });
  return (
    <div className={styles.input}>
      <input type="text" className={classes} {...rest} />
      {suffixIcon}
    </div>
  );
};
