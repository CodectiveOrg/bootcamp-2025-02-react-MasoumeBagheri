import { ButtonProps, ButtonShape } from "./buttontypes";

import classNames from "classnames";

const shapeClasses: Record<ButtonShape, string> = {
  wide: "button-wide",
  circle: "button-circle",
  square: "button-square",
  default: "",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  isOutline = false,
  shap = "default",
  animatedIcon = false,
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "button",
    { "button-outline": isOutline },
    { "animated-icon": animatedIcon },
    { [`button-${variant}`]: variant },
    { [`${shapeClasses[shap]}`]: shap },
    className
  );
  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
};
