import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button(props: ButtonProps) {
  return <button className={styles.button} {...props} />;
}
