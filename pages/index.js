import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Bossbabe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.grid}>
          
          <Header />
          <Footer />
        </div>
      </main>
    </div>
  )
}
