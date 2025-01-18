import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    isOutline?: boolean;
    animatedIcon?: boolean;
    shap?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "circle" | "square";
