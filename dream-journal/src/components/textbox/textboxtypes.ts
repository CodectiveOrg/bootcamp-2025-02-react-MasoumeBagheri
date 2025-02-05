import { InputHTMLAttributes, ReactNode } from "react";

export type TextBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  suffixIcon?: ReactNode;
};
