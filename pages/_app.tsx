import Head from 'next/head';
import './globals.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nonsense Permissible | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Nonsense Permissible. Crafting Experiences That Spark Joy."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
