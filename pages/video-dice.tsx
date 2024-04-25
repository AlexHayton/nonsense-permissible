import AppStoreIcons from "@components/AppStoreIcons";
import styles from "./video-dice.module.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function VideoDice() {
  return (
    <div className="container">
      <Header title="Video Dice" showBack />
      <main>
        <p className="description">
          Lost your dice? No problem! Video Dice is a simple app that rolls dice
          for you.
        </p>
        <div className={styles.images}>
          <img src="/video-dice/1.jpg" alt="Screenshot of Video Dice" />
          <img src="/video-dice/preview.jpg" alt="Screenshot of Video Dice" />
        </div>
        <AppStoreIcons playStore="https://play.google.com/store/apps/details?id=com.nonsensepermissible.videodice" />
      </main>
      <Footer />
    </div>
  );
}
