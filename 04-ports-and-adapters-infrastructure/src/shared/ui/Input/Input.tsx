import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export function Input(props: InputProps) {
  return <input {...props} className={styles.input} />;
}
