import wp from "../../lib/wp/wp";
import getDetaljSida from "./../../Components/getDetaljSida";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const Products = ({ product }) => {
  console.log(product);
  /*   const [selectedColor, setSelectedColor] = useState(
    product.attributes.nodes[0].options
  );
  const [selectedSize, setSelectedSize] = useState(
    product.attributes.nodes[1].options
  ); */
  const reviews = { href: "#", average: 4, totalCount: 117 };

  const [selectColor, setSelectedColor] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  // {
  //   product.attributes.nodes[0].options.map((color, index) => {
  //     return {
  //       color,
  //     };
  //   });
  // }
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
        "green";
      case "blå":
        return "blue";
      case "grå":
        return "grey";
      case "mörkgrå":
        return "#474747";
    }
  }

  return (
    <div className="mt-96 mb-96">
      <div className="pt-6">
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="relative hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <Image
              className=" 
             w-full h-full object-center object-cover"
              src={product.image.mediaItemUrl}
              alt={product.image.altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Image
                className="w-full h-full object-center object-cover"
                src={product.galleryImages.nodes[0].mediaItemUrl}
                alt={product.image.altText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <Image
              className="w-full h-full object-center object-cover"
              src={product.galleryImages.nodes[1].mediaItemUrl}
              alt={product.image.altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <Image
              className="w-full h-full object-center object-cover"
              src={product.galleryImages.nodes[2].mediaItemUrl}
              alt={product.image.altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
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
                  className="ml-3 text-sm font-medium text-indigo-600
                  hover:text-indigo-500"
                >
                  {reviews.totalCount} recensioner
                </a>
              </div>
            </div>

            <div className="mt-10">
              {/* Colors */}
              <div className="flex gap-2">
                {product?.attributes?.nodes[0].options.map((atr) => {
                  console.log("attributes", atr);
                  return (
                    <button
                      onClick={() => setSelectedColor(atr)}
                      key={atr}
                      className={` w-[60px] h-[60px] border-2  relative rounded-full ${
                        selectColor === atr
                          ? "border-black/50 dark:border-white"
                          : "border-black/20 dark:border-white/20"
                      }`}
                    >
                      <div
                        style={{ backgroundColor: returnColor(atr) }}
                        className={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full  h-[50px] w-[50px] `}
                      ></div>
                    </button>
                  );
                })}
              </div>
              <div className="block relative pl-[35px] mb-[12px]  "></div>

              {/* <div>
                <h3 className="text-sm font-medium">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.attributes.nodes[0].options.map((color) => (
                      <RadioGroup.Option
                        key={color}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="p" className="sr-only">
                          {color}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 border border-black border-opacity-10 rounded-full"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
 */}
              {/* Sizes */}
              {/*  <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.attributes.nodes.map((size) => (
                      <RadioGroup.Option
                        key={size.options}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                              : "bg-gray-50 text-gray-200 cursor-not-allowed",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <div
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "absolute -inset-px rounded-md pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <div
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </div>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div> */}

              <button
                type="submit"
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base ">{product.shortDescription}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {product.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <p>{product.attributes.nodes[0].options[0]}</p>
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
        })} */}
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
