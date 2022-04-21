import wp from "../../lib/wp/wp";
import getDetaljSida from "./../../Components/getDetaljSida";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";

const Products = ({ product }) => {
  console.log(product);
  const [selectedColor, setSelectedColor] = useState(
    product.attributes.nodes.options
  );
  const [selectedSize, setSelectedSize] = useState(
    product.attributes.nodes.options
  );

  return (
    <div className="mt-96 mb-96">
      <div className="relative w-full max-w-[200px] h-[300px] aspect-auto rounded-lg overflow-hidden lg:block">
        <Image
          src={product.image.mediaItemUrl}
          alt={product.image.altText}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full max-w-[200px] h-[300px] aspect-auto rounded-lg overflow-hidden lg:block">
        <Image
          src={product.galleryImages.nodes[0].mediaItemUrl}
          alt={product.image.altText}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full max-w-[200px] h-[300px] aspect-auto rounded-lg overflow-hidden lg:block">
        <Image
          src={product.galleryImages.nodes[1].mediaItemUrl}
          alt={product.image.altText}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full max-w-[200px] h-[300px] aspect-auto rounded-lg overflow-hidden lg:block">
        <Image
          src={product.galleryImages.nodes[2].mediaItemUrl}
          alt={product.image.altText}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p>{product.name}</p>
      <p>{product.shortDescription}</p>
      <p>{product.price}</p>
      <p>{product.attributes.nodes[0].options[0]}</p>
      <p>{product.attributes.nodes[1].options[0]}</p>

      {product?.attributes?.nodes.map((node) => {
        if (node.label === "Color") {
          return (
            <div key={node.label} className="flex gap-10 justify-center">
              {node.options.map((option) => {
                console.log(product.galleryImages.nodes[2].mediaItemUrl);
                return <p key={option}>{option}</p>;
              })}
            </div>
          );
        } else if (node.label === "Size") {
          return (
            <div key={node.label} className="flex gap-10 justify-center">
              {node.options.map((option) => {
                return <p key={option}>{option}</p>;
              })}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Products;
export const getStaticPaths = async () => {
  const { data } = await wp(`
    query NewQuery{
      products{
        nodes {
          id
          slug
        }
      }
    }
  `);
  const paths = data?.products?.nodes?.map((product) => {
    return { params: { slug: product.slug } };
  });
  //console.log("my paths===", paths);
  return { paths, fallback: "blocking" };
};
export async function getStaticProps(context) {
  //console.log("context", context);
  const product = await getDetaljSida(context.params.slug);
  return { props: { product } };
}
