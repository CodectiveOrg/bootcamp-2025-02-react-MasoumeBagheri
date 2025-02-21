import { forwardRef, SelectHTMLAttributes, useState } from "react";

import styles from "./select.module.css";
import { SelectOption } from "../../types/selectOption.type";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
};
export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, className, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdownHandler = () => {
      setIsOpen((prevState) => !prevState);
    };

    return (
      <div className={styles.select} onClick={toggleDropdownHandler}>
        <select ref={ref} {...rest} className={className}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
      </div>
    );
  }
);
