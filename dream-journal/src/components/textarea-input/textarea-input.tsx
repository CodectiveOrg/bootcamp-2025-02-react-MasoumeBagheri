import { forwardRef, InputHTMLAttributes } from "react";

import styles from "./textarea-input.module.css";

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};
export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={styles["text-area"]}>
        <textarea ref={ref} rows={3} {...rest} className={className} />
      </div>
    );
  }
);
