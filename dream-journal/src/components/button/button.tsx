import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./buttontypes";

import classNames from "classnames";
import styles from "./button.module.css";

const shapeClasses: Record<ButtonShape, string> = {
  circle: "circle",
  square: "square",
  rectangle: "rectangle",
};

const sizeClasses: Record<Size, string> = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  isOutline = false,
  shape = "rectangle",
  size = "small",
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    { [styles["outline"]]: isOutline },
    variant && styles[`${variant}`],
    shape && styles[`${shapeClasses[shape]}`],
    size && styles[`${sizeClasses[size]}`],
    className
  );

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
};
