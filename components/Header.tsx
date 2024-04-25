import { FC } from "react";
import styles from "./header.module.scss";

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

const Header: FC<HeaderProps> = ({ title, showBack }) => (
  <div className={styles.container}>
    <img src="/nonsense.png" className={styles.headerImage} />
    {showBack && <a href="/">←</a>}
    <h2>{title}</h2>
  </div>
);

export default Header;
