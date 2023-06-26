import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>2023, Fair Use</span>
      <a href="/">Project on GitHub</a>
    </footer>
  );
}
