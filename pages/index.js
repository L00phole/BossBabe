import SummerStyle from "../Components/SummerStyle";
import Rekommenderas from "../Components/Rekommenderas";
import Kollektioner from "../Components/Kollektioner";
import Image from "next/image";
import wp from "../lib/wp/wp.js";
import getRecommendedProducts from "../Components/getRecommendedProducts";

export default function Home({ products }) {
  console.log(products);
  const image =
    "https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";
  const obj = {
    image:
      "https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  };

  return (
    <div className="mt-[80px] md:mt-[70px] ">
      <div className=" relative h-[350px]  w-fill md:h-[600px] lg:h-[1000px] ">
        {!obj?.image ? null : (
          <Image
            src={obj?.image}
            alt="hero"
            layout="fill"
            objectFit="cover"
            stylealt="header"
          />
        )}
      </div>
      <Rekommenderas products={products} />

      <SummerStyle />
      <Kollektioner />
    </div>
  );
}
export async function getStaticProps() {
  const products = await getRecommendedProducts();
  console.log(products);
  return { props: { products } };
}
