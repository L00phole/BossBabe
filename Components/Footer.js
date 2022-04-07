import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-400 ">
        <div className="text-center  pb-10 ">
          <h1 className="font-bold text-4xl cursor-pointer">
            BOSS<span className="text-white">BABE</span>
          </h1>{" "}
          <br />
          <p className="font-bold text-lg -mt-5">Workout like a boss</p>
        </div>
        <div className="flex mb-2 place-content-center pb-10  ">
          <div className="mx-10 text-lg">
            <h2 className="text-xl pb-8 font-bold">Shopping</h2>
            <ul>
              <li className="mb-3">Nyheter</li>
              <li className="mb-3">Bästsäljare</li>
              <li className="mb-3">Outlet</li>
              <li className="mb-3">Alla produkter</li>
            </ul>
          </div>
          <div className="mx-10 text-lg">
            <h2 className=" text-xl pb-8 font-bold">Om oss</h2>
            <ul>
              <li className="mb-3">Om oss</li>
              <li className="mb-3">Karriär</li>
              <li className="mb-3">Press</li>
              <li className="mb-3">Cookie policy</li>
            </ul>
          </div>
          <div className="mx-10 text-lg">
            <h2 className=" text-xl pb-8 font-bold">Kundservice</h2>
            <ul>
              <li className="mb-3">Hjälp</li>
              <li className="mb-3">Hitta butik</li>
              <li className="mb-3">Sekretess och säkerhet</li>
              <li className="mb-3">Kontakta oss</li>
            </ul>
          </div>
          <div className=" mx-10 text-lg">
            <h2 className=" text-xl pb-8 font-bold">Följ oss</h2>
            <ul>
              <li className="mb-3">Facebook</li>
              <li className="mb-3">Instagram</li>
              <li className="mb-3">TikTok</li>
              <li className="mb-3">YouTube</li>
            </ul>
          </div>
        </div>

        <div className="font-bold text-sm mb-1 text-center ">
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
      </div>
    </>
  );
};
export default Footer;
