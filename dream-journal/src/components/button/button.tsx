import styles from "./button.module.css";
import { ButtonProps } from "./buttontypes";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  shape = "rectangle",
  size = "small",
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
