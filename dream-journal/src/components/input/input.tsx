import { InputProps } from "./input.types";

import classNames from "classnames";

export const Input: React.FC<InputProps> = ({
  variant,
  className,
  ...rest
}) => {
  const classes = classNames("textinput", className, {
    [`textinput-${variant}`]: variant,
  });
  return <input type="text" className={classes} {...rest} />;
};
