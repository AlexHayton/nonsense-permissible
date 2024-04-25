import styles from "./Project.module.scss";

export default function Project({ title, image, link }) {
  return (
    <div className={styles.container}>
      <a href={link}>
        <img src={image} className={styles.projectImage} />
        <h3>{title}</h3>
      </a>
    </div>
  );
}
