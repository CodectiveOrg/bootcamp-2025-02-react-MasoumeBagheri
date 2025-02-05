import { InputHTMLAttributes, ReactNode } from "react";

export type Variant = "surface" | "primary" | "text" | "solid";

export type TextBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  variant?: Variant;
  suffixIcon?: ReactNode;
};
