import Image from "next/image";
import Link from "next/Link";

export default function OutletExampel({ products }) {
  return (
    <div className="flex ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight ">
          Rekommenderas
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products?.map((product) => (
            <div key={product.id}>
              <div className="relative w-full min-w-[200px] md:min-w-[300px] h-[300px] md:h-[400px] bg-gray-200 cursor-pointer rounded-md overflow-hidden hover:opacity-75">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.image.mediaItemUrl}
                    alt={product.image.altText}
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md  font-medium ">
                    <a href={`/product/${product.slug}`}>{product.name}</a>
                  </h3>
                  <p className="mt-1 text-sm ">{product.color}</p>
                </div>
                <p className="text-md font-bold ">{product.price} SEK</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
