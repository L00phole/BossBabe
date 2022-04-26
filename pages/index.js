import SummerStyle from "../Components/SummerStyle";
import Rekommenderas from "../Components/Rekommenderas";
import Kollektioner from "../Components/Kollektioner";
import getRecommendedProducts from "../Components/getRecommendedProducts";
import React from "react";
import RCTypeWriting from "../Components/TypeWriter";

export default function Home({ products }) {
  const image =
    "https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";
  const obj = {
    image:
      "https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  };

  return (
    <div className="mt-[70px] md:mt-[50px] ">
      <div className=" aspect-w-16 aspect-h-9 display-none z-10 w-auto min-w-full min-h-full max-w-none">
        <video autoPlay loop muted src={"./hero.mp4"} />
        <div className="z-50 absolute grid text-white md:h-[50%] m-auto md:top-[550px] text-center md:w-[60%] md:text-6xl top-[250px] ">
          <RCTypeWriting />
        </div>
      </div>

      <Rekommenderas products={products} />
      <SummerStyle />
      <Kollektioner />
    </div>
  );
}
export async function getStaticProps() {
  const products = await getRecommendedProducts();
  return { props: { products } };
}
