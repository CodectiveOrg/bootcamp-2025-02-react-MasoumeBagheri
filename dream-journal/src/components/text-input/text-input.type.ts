import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  ComponentBase;
