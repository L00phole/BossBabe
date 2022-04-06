import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="text-center m-2 pb-2">
        <h1 className="font-bold text-xl cursor-pointer">
          BOSS<span className="text-yellow-400">BABE</span>
        </h1>{" "}
        <br />
        <p className="font-bold text-l ">Work it like a queen</p>
      </div>
      <div className=" flex justify-between shadow-sm max-w-xl mx-auto z-10 mb-2 pb-10">
        <div className="mx-20">
          <h2>Shopping</h2>
          <ul>
            <li>Nyheter</li>
            <li>Bästsäljare</li>
            <li>Outlet</li>
            <li>Alla produkter</li>
          </ul>
        </div>
        <div className="mx-10">
          <h2>Om oss</h2>
          <ul>
            <li></li>
            <li>Bästsäljare</li>
            <li>Outlet</li>
            <li>Alla produkter</li>
          </ul>
        </div>
        <div className="mx-10">
          <h2>Shopping</h2>
          <ul>
            <li>Nyheter</li>
            <li>Bästsäljare</li>
            <li>Outlet</li>
            <li>Alla produkter</li>
          </ul>
        </div>
        <div className="mx-10">
          <h2>Shopping</h2>
          <ul>
            <li>Nyheter</li>
            <li>Bästsäljare</li>
            <li>Outlet</li>
            <li>Alla produkter</li>
          </ul>
        </div>
      </div>

      <div className="font-bold text-l mb-0 text-center ">
        <a
          href="https://jennie-michele.0.capacedev.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Jennie och Michele{" "}
          <span>
            <Image
              src="/favicon.ico"
              alt="Bossbabe Logo"
              width={13}
              height={13}
            />
          </span>
        </a>
      </div>
    </>
  );
};
export default Footer;
