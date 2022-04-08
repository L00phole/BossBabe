import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-white py-5 sm:w-screen">
        <div className="text-center  pb-10 ">
          <h1 className="font-bold text-4xl cursor-pointer">
            <span className="text-white">BOSS</span>
            <span className="text-yellow-400">BABE</span>
          </h1>{" "}
          <br />
          <p className="font-bold text-lg -mt-5">Workout like a boss</p>
        </div>
        <div className="md:flex place-content-center pb-10">
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
            <h2 className=" text-xl pb-8 font-bold">Information</h2>
            <ul>
              <li className="mb-3">Om oss</li>
              <li className="mb-3">Karriär</li>
              <li className="mb-3">Press</li>
              <li className="mb-3">Cookie policy</li>
            </ul>
          </div>

          <FooterFollow />
        </div>

        <div className="font-bold text-sm mb-0 text-center ">
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

const FooterFollow = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" mx-10 text-lg">
        <h2 onClick={() => setOpen(!open)} className=" text-xl pb-8 font-bold">
          Följ oss
        </h2>
        {open ? (
          <ul>
            <li className="mb-3">Facebook</li>
            <li className="mb-3">Instagram</li>
            <li className="mb-3">TikTok</li>
            <li className="mb-3">YouTube</li>
          </ul>
        ) : null}
      </div>
    </>
  );
};
