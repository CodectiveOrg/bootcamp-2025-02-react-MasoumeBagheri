import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  suffixIcon?: ReactNode;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ suffixIcon, className, ...rest }, ref) => {
    return (
      <div className={clsx(styles.input, className)}>
        <input ref={ref} type="text" {...rest} className={className} />
        {suffixIcon}
      </div>
    );
  }
);
