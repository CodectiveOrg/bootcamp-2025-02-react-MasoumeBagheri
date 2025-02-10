import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import styles from "./text-input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  suffixIcon?: ReactNode;
};
export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ suffixIcon, className, ...rest }, ref) => {
    return (
      <div className={styles.input}>
        <input ref={ref} type="text" {...rest} className={className} />
        {suffixIcon}
      </div>
    );
  }
);
