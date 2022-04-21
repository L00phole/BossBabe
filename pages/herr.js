import Image from "next/image";
import getHerrKlader from "../Components/getHerrKlader";

export default function herr({ products }) {
  return (
    <div className="flex mt-[30px]">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl  tracking-tight ">Herr kläder</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products?.map((product) => (
            <div key={product.id}>
              <div className="relative w-full min-w-[200px] md:min-w-[300px] h-[300px] md:h-[400px] bg-gray-200  rounded-md overflow-hidden hover:opacity-75">
                <Image
                  src={product.image.mediaItemUrl}
                  alt={product.image.altText}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm ">
                    <a href="">{product.name}</a>
                  </h3>
                  <p className="mt-1 text-sm ">{product.color}</p>
                </div>
                <p className="text-sm font-medium ">{product.price} SEK</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const products = await getHerrKlader();
  return { props: { products } };
}
