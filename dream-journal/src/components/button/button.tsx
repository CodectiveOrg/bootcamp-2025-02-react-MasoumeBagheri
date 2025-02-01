import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./buttontypes";

import classNames from "classnames";
import styles from "./button.module.css";

const shapeClasses: Record<ButtonShape, string> = {
  wide: "wide",
  circle: "circle",
  square: "square",
  default: "",
};

const sizeClasses: Record<Size, string> = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "",
  isOutline = false,
  shape = "default",
  size = "small",
  animatedIcon = false,
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    { [styles["outline"]]: isOutline },
    { [styles["animated-icon"]]: animatedIcon },
    variant && styles[`${variant}`],
    shape !== "default" && styles[shapeClasses[shape]],
    styles[sizeClasses[size]],
    className
  );

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
};
