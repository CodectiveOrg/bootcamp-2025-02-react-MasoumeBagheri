import { TextInputProps } from "./text-input.types";

import classNames from "classnames";

export const TextInput: React.FC<TextInputProps> = ({
  variant,
  className,
  ...rest
}) => {
  const classes = classNames("textinput", className, {
    [`textinput-${variant}`]: variant,
  });
  return <input type="text" className={classes} {...rest} />;
};
