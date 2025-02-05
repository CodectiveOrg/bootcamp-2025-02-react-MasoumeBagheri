import { ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outlined" | "transparent";
type Shape = "rectangle" | "circle" | "square";
type Size = "small" | "medium" | "large";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: Variant;
  shape?: Shape;
  size?: Size;
};
