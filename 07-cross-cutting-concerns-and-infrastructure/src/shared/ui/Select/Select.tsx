import type { SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

type Option = {
  label: LocalizedString;
  value: string | number;
};

type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "className"
> & {
  options: List<Option>;
};

export function Select({ options, ...props }: SelectProps) {
  return (
    <select className={styles.select} {...props}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
