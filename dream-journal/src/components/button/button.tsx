import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Variant = "solid" | "outlined" | "transparent";
type Shape = "rectangle" | "circle" | "square";
type Size = "small" | "medium" | "large";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: Variant;
  shape?: Shape;
  size?: Size;
};

export const Button: React.FC<Props> = ({
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
