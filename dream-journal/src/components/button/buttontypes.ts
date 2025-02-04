import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    isOutline?: boolean;
    shape?: ButtonShape;
    size?: ButtonSize;
  };

export type ButtonShape = "rectangle" | "circle" | "square";
export type ButtonSize = "small" | "medium" | "large";
