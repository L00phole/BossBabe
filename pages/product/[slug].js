import wp from "../../lib/wp/wp";
import getDetaljSida from "./../../Components/getDetaljSida";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const Products = ({ product }) => {
  console.log(product);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  const [selectColor, setSelectedColor] = useState(false);
  const [selectSize, setSelectedSize] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function returnColor(color) {
    switch (color) {
      case "vit":
        return "white";
      case "svart":
        return "black";
      case "rosa":
        return "#FF00CC";
      case "lila":
        return "#9933CC";
      case "grön":
        return "green";
      case "blå":
        return "blue";
      case "grå":
        return "grey";
      case "mörkgrå":
        return "#474747";
    }
  }
  function returnSize(size) {
    switch (size) {
      case "xs":
        return "XS";
      case "s":
        return "S";
      case "m":
        return "M";
      case "l":
        return "L";
      case "xl":
        return "XL";
    }
  }

  return (
    <div className=" mt-[70px]">
      <div className="pt-6 ">
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <Image
              src={product.galleryImages.nodes[2].mediaItemUrl}
              alt={product.image.altText}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Image
                src={product.galleryImages.nodes[0].mediaItemUrl}
                alt={product.image.altText}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Image
                src={product.galleryImages.nodes[1].mediaItemUrl}
                alt={product.image.altText}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <Image
              src={product.image.mediaItemUrl}
              alt={product.image.altText}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl ">{product.price} SEK</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Recensioner</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} utav 5 stjärnor</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-700 dark:text-sky-600 
                  hover:text-indigo-400 dark:hover:text-sky-400"
                >
                  {reviews.totalCount} recensioner
                </a>
              </div>
            </div>

            <div className="mt-10">
              {/* Colors */}

              <div className="flex gap-2">
                {product?.attributes?.nodes[0].options.map((atrColor) => {
                  console.log("attributes", atrColor);
                  return (
                    <button
                      onClick={() => setSelectedColor(atrColor)}
                      key={atrColor}
                      className={` w-[60px] h-[60px] border-4  relative rounded-full ${
                        selectColor === atrColor
                          ? "border-black/50 dark:border-white"
                          : "border-black/20 hover:border-zinc-400 dark:border-white/20 dark:hover:bg-teal-800"
                      }`}
                    >
                      <div
                        style={{ backgroundColor: returnColor(atrColor) }}
                        className={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full  h-[50px] w-[50px] `}
                      ></div>
                    </button>
                  );
                })}
              </div>
              <div className="block relative pl-[35px] mb-[12px]  "></div>

              {/* Sizes */}

              <div className="flex gap-2">
                {product?.attributes?.nodes[1].options.map((atrSize) => {
                  console.log("sizes", atrSize);
                  return (
                    <button
                      onClick={() => setSelectedSize(atrSize)}
                      key={atrSize}
                      className={` w-[60px] h-[60px] border-4 font-bold hover:bg-zinc-200 text-slate-600 text-lg uppercase relative rounded-full dark:bg-slate-800/70 dark:hover:bg-teal-800 dark:text-white ${
                        selectSize === atrSize
                          ? "border-black/50 dark:border-white"
                          : "border-black/20 dark:border-white/20 "
                      }`}
                    >
                      {atrSize}
                    </button>
                  );
                })}
              </div>
              <div className="block relative pl-[35px] mb-[12px]  "></div>

              <button
                type="submit"
                className="mt-10 w-full bg-neutral-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg font-medium text-white tracking-wider hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 dark:bg-slate-800 dark:hover:bg-teal-800 "
              >
                <div className="flex space-x-2">
                  <div>Lägg till</div>
                  <div>
                    <svg
                      className="hidden md:flex cursor-pointer  h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#ffffff"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                        <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Beskrivning</h3>

              <div className="space-y-6">
                <p className="text-base text-xl md:font-medium font-sans tracking-normal leading-relaxed w-4/5 dark:text-white/80">
                  {product.shortDescription}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-slate-700 dark:text-white">
                Detaljer
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-lg font-normal tracking-normal leading-relaxed text-slate-600 italic dark:text-white/80 w-11/12">
                  {product.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
