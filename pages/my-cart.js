/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

export default function MyCart() {
  return (
    <>
      {" "}
      <Navbar />
      <div className=" p-40">
        <a className="p-40">Din shoppingbag är tom :(</a>
      </div>
      <div className=" p-40">
        <a className="p-40">Fri frakt vid köp över 300 SEK</a>
      </div>
      <Footer />
    </>
  );
}
