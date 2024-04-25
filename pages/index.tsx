import styles from "./index.module.scss";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Project from "@components/Project";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nonsense Permissible</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header title="Projects" />
      <main className={styles.projects}>
        <Project
          title="Video Dice"
          image="./video-dice/preview.jpg"
          link="./video-dice"
        />
      </main>

      <Footer />
    </div>
  );
}
