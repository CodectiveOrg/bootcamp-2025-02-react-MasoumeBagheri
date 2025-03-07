import { ComponentProps, forwardRef } from "react";

import styles from "./date-input.module.css";
import clsx from "clsx";

type Props = Omit<ComponentProps<"input">, "ref" | "type">;

export const DateInput = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={clsx(styles["date-input"], className)}>
        <input ref={ref} type="date" {...rest} />
      </div>
    );
  }
);
