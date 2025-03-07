import { forwardRef, InputHTMLAttributes } from "react";

import clsx from "clsx";

import styles from "./textarea-input.module.css";

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};
export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={clsx(styles["text-area"], className)}>
        <textarea ref={ref} rows={3} {...rest} />
      </div>
    );
  }
);
