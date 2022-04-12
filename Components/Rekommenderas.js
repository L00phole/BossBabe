export default function OutletExampel() {
  return (
    <div className="flex bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Rekommenderas
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id}>
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden hover:opacity-75  lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const products = [
  {
    id: 1,
    name: "Basic Sommar Set",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "349 SEK",
  },
  {
    id: 2,
    name: "Baggy Träningsbyxa",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1618355281911-84e6ec751d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "599 SEK",
  },
  {
    id: 3,
    name: "Cute Jennie Set",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1618355281951-a174b87198e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "499 SEK",
  },
  {
    id: 4,
    name: "Tränings T-shirt Herr",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "299 SEK",
  },
];
