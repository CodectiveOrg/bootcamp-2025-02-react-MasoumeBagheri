import { InputHTMLAttributes, ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";

export type TextBoxProps = InputHTMLAttributes<HTMLInputElement> &
  ComponentBase & {
    suffixIcon?: ReactNode;
  };
