import { InputHTMLAttributes, ReactNode } from "react";

import styles from "./textbox.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  suffixIcon?: ReactNode;
};
export const TextInput: React.FC<Props> = ({
  suffixIcon,
  className,
  ...rest
}) => {
  return (
    <div className={styles.input}>
      <input type="text" {...rest} />
      {suffixIcon}
    </div>
  );
};
