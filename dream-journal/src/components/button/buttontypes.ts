import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    isOutline?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
    size?: ButtonSize;
  };

export type ButtonShape = "default" | "wide" | "circle" | "square";
export type ButtonSize = "small" | "medium" | "large";
