import Image from "next/image";

export default function Home() {
  return (
    <div className=" pb-10 ">
      {["header"].map((path) => {
        return (
          <div key={path}>
            <img
              src={`/${path}.jpg`}
              alt="header"
              style={{ width: "100vw", height: "auto" }}
            />

            <div className=" grid grid-rows-3 grid-flow-col flex space-x-4  max-w-xl mx-10 ">
              <Image src="/6.jpg" alt="thirdPic" width={450} height={300} />
              <div className="row-span-1">
                <Image src="/6.jpg" alt="thirdPic" width={450} height={320} />
              </div>
            </div>
            <a className="grid grid-rows-2 grid-flow-col flex mx-10 pb-10">
              Our lates news
            </a>

            <div className="grid grid-rows-3 grid-flow-col flex space-x-4  max-w-xl mx-auto pb-10">
              <a className="row-span-1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </a>
              <a className="row-span-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </a>
              <a className="row-span-3">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
