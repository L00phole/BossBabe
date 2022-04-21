import useMediaQuery from "../Components/UseState";
import Image from "next/image";

const Kollektioner = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <div>
      {isBreakpoint ? (
        <div>
          <div className="max-w-2xl  py-16 py-24 ">
            <h2 className="text-2xl font-bold ">Kollektioner</h2>

            <div className="mt-6 space-y-12">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 rounded overflow-hidden group-hover:opacity-75 ">
                    <Image
                      src={callout.imageSrc}
                      layout="fill"
                      objectFit="cover"
                      alt={callout.imageAlt}
                    />
                  </div>
                  <h3 className="mt-6 text-sm ">
                    <a href={callout.href}>
                      <span className=" inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold ">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-col-3 grid-flow-col flex md:space-x-4 pb-10">
          <div>
            <div className="max-w-7xl mx-auto  px-4 px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-bold ">Kollektioner</h2>

                <div className="mt-6 space-y-12 lg:space-y-0 grid grid-cols-3 lg:gap-x-6">
                  {callouts.map((callout) => (
                    <div key={callout.name} className="group relative">
                      <div className=" relative w-full h-80  rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <Image
                          src={callout.imageSrc}
                          layout="fill"
                          objectFit="cover"
                          alt={callout.imageAlt}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div>
                        <h3 className=" text-lg ">
                          <a href={callout.href}>{callout.name}</a>
                        </h3>
                        <p className="text-xl font-semibold ">
                          {callout.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const callouts = [
  {
    name: "Nyheter",
    description: "Senaste modet ",
    imageSrc:
      "https://images.unsplash.com/photo-1609377375722-46264cf88939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "dam",
  },
  {
    name: "Klimatkompenserade leveranser",
    description: "Läs mer här",
    imageSrc:
      "https://images.unsplash.com/photo-1617909517211-c4e4275bf5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Återvunna material",
    description: "Vi kan minska vår miljö påverkan och bli mer hållbara",
    imageSrc:
      "https://images.unsplash.com/photo-1569227997603-33b9f12af927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default Kollektioner;
