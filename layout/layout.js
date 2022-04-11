import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className="content">
        <Head>
          <title>Bossbabe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </div>
    </>
  );
}
