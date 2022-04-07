import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

export default function AboutUs() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="  pb-10 ">
        {["5"].map((path) => {
          return (
            <div key={path}>
              <img
                src={`/${path}.jpg`}
                alt="header"
                style={{ width: "100vw", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-3 grid-flow-col flex space-x-4  max-w-xl mx-auto pb-10">
        <a className="row-span-1">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </a>
        <a className="row-span-2">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </a>
      </div>
      <Footer />
    </>
  );
}
