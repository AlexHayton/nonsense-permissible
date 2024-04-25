import { FC } from "react";
import styles from "./AppStoreIcons.module.scss";

interface AppStoreIconsProps {
  appStore?: string;
  playStore?: string;
}
const AppStoreIcons: FC<AppStoreIconsProps> = ({ appStore, playStore }) => (
  <div className={styles.container}>
    {appStore && <img src="/appstore.svg" alt="Download on the app store" />}
    {playStore && (
      <a href={playStore}>
        <img
          className={styles.playStore}
          src="/playstore.png"
          alt="Get it on Google Play"
        />
      </a>
    )}
  </div>
);

export default AppStoreIcons;
