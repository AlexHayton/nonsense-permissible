import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>
          Nonsense Permissible is a collection of personal projects by Alex Hayton
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
