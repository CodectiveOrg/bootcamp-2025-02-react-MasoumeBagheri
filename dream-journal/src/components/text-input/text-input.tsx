import { Variant } from "../types/variant.type";
import { TextInputProps } from "./text-input.type";

import classNames from "classnames";

const variantStyles: Record<Variant, string> = {
  surface: "var(--color-surface)",
  primary: "var(--color-primary)",
  text: "var(--color-text)",
};

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
