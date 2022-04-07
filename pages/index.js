import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Home from "./Home";

export default function mainPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bossbabe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.grid}>
          <Home />
        </div>
      </main>
      <Footer />
    </div>
  );
}
