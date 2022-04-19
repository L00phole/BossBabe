import useMediaQuery from "./UseState";
import { useState, useEffect } from "react";
import React, { useCallback } from "react";
import Link from "next/link";

const Footer = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <div>
      {isBreakpoint ? (
        <div>
          <>
            <div className="bg-slate-800 text-white py-5 w-full sticky mb-0">
              <div className="text-center  pb-10 ">
                <h1 className="font-bold text-4xl ">
                  <span className="text-white">BOSS</span>
                  <span className="text-yellow-400">BABE</span>
                </h1>{" "}
                <br />
                <p className="font-bold text-lg -mt-5">Workout like a boss</p>
              </div>
              <div className="md:flex place-content-center pb-10 ">
                <FooterThingy label="Shopping">
                  <ul>
                    <li className="mb-3">Nyheter</li>
                    <li className="mb-3">Bästsäljare</li>
                    <li className="mb-3">Outlet</li>
                    <li className="mb-3">Alla produkter</li>
                  </ul>
                </FooterThingy>
                <FooterThingy label="Information">
                  {" "}
                  <ul>
                    <li className="mb-3">Om oss</li>
                    <li className="mb-3">Karriär</li>
                    <li className="mb-3">Press</li>
                    <li className="mb-3">Cookie policy</li>
                  </ul>
                </FooterThingy>
                <FooterThingy label="Kundservice">
                  <ul>
                    <li className="mb-3">Hjälp</li>
                    <li className="mb-3">Hitta butik</li>
                    <li className="mb-3">Sekretess och säkerhet</li>
                    <li className="mb-3">Kontakta oss</li>
                  </ul>
                </FooterThingy>
                <FooterThingy label="Följ oss">
                  {" "}
                  <ul>
                    <li className="mb-3 ">
                      <a
                        href="https://facebook.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="mb-3 ">
                      <a
                        href="https://instagram.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mb-3 ">
                      <a
                        href="https://tiktok.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TikTok
                      </a>
                    </li>

                    <li className="mb-3 ">
                      <a
                        href="https://youtube.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </FooterThingy>
              </div>

              <div className="font-bold text-sm mb-0 text-center ">
                <a
                  href="https://jennie-michele.0.capacedev.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by Jennie och Michele{" "}
                </a>
              </div>
            </div>
          </>
        </div>
      ) : (
        <>
          <div className="max-h-[400px] md:h-[400px] bg-slate-800 text-white py-5 sm:w-full">
            <div className="text-center  pb-10 ">
              <h1 className="font-bold text-4xl ">
                <span className="text-white">BOSS</span>
                <span className="text-yellow-400">BABE</span>
              </h1>
              <br />
              <p className="font-bold text-lg -mt-5">Workout like a boss</p>
            </div>
            <div className="grid grid-cols-4  pb-10">
              <div className="grid justify-center text-lg">
                <div>
                  <h2 className="hover:text-2xl cursor-pointer text-xl pb-4 font-bold">
                    Shopping
                  </h2>
                </div>

                <div>
                  <ul>
                    <li className="mb-3">Nyheter</li>
                    <li className="mb-3">Bästsäljare</li>
                    <Link href="outlet">
                      <li className="pb-3 cursor-pointer">Outlet</li>
                    </Link>
                    <li className="mb-3">Alla produkter</li>
                  </ul>
                </div>
              </div>
              <div className="grid justify-center  text-lg">
                <div>
                  <h2 className="pb-4 cursor-pointer hover:text-2xl text-xl  font-bold">
                    Information
                  </h2>
                </div>
                <div>
                  <ul className="grid justify-center">
                    <Link href="kontakta-oss">
                      <li className="pb-3 cursor-pointer">Om oss</li>
                    </Link>
                    <li className="mb-3">Karriär</li>
                    <li className="mb-3">Press</li>
                    <li className="mb-3">Cookie policy</li>
                  </ul>
                </div>
              </div>
              <div className="grid justify-center  text-lg">
                <div>
                  <h2 className="pb-4 cursor-pointer hover:text-2xl text-xl  font-bold">
                    Kundservice
                  </h2>
                </div>
                <div>
                  <ul>
                    <li className="pb-3">Hjälp</li>
                    <li className="pb-3">Hitta butik</li>
                    <li className="pb-3">Sekretess och säkerhet</li>
                    <Link href="kontakta-oss">
                      <li className="pb-3 cursor-pointer">Kontakta oss</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="grid justify-center text-lg">
                <div>
                  <h2 className="pb-4 cursor-pointer hover:text-2xl text-xl  font-bold ">
                    Följ oss
                  </h2>
                  <ul>
                    <li className="mb-3 ">
                      <a
                        href="https://facebook.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="mb-3 ">
                      <a
                        href="https://instagram.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mb-3 ">
                      <a
                        href="https://tiktok.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TikTok
                      </a>
                    </li>

                    <li className="mb-3 ">
                      <a
                        href="https://youtube.com"
                        className="cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="font-bold text-sm mb-0 text-center ">
              <a
                href="https://jennie-michele.0.capacedev.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Jennie och Michele
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Footer;

const FooterThingy = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" mx-10 text-lg ">
      <h2 onClick={() => setOpen(!open)} className="  text-xl pb-5 font-bold ">
        {props.label}
      </h2>

      {open && <div className="content pb-10">{props.children}</div>}
    </div>
  );
};
