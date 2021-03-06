import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

function MobileNav({ open, setOpen }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? "light" : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className=" w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  const handleMenuOpen = () => {
    let timeout;
    timeout = setTimeout(() => {
      setOpen(!open);
    }, 100);
    return () => clearTimeout(timeout);
  };
  return (
    <div
      className={`fixed md:hidden mt-[20px]  absolute top-0 left-0 light:bg-slate-800 bg-slate-800 pb-[30px] w-screen transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="w-full filter drop-shadow-md  ml-4 ">
        <Link href="/" className="cursor-pointer">
          <a>
            <span className="text-3xl font-bold text-white ">BOSS</span>
            <span className="text-3xl font-bold text-yellow-400">BABE</span>
          </a>
        </Link>
      </div>

      <div className="mt-6 flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4 "
          href="/dam"
          onClick={() => handleMenuOpen()}
        >
          <a className="cursor-pointer text-lg  font-bold pb-2">Dam</a>
        </Link>
        <Link
          className="text-xl font-medium my-4 "
          href="/herr"
          onClick={() => handleMenuOpen()}
        >
          <a className="cursor-pointer text-lg  font-bold pb-2">Herr</a>
        </Link>
        <Link
          className="text-xl font-medium my-4 "
          href="/outlet"
          onClick={() => handleMenuOpen()}
        >
          <a className="cursor-pointer text-lg font-bold pb-2">Outlet</a>
        </Link>
        <Link
          className=" mt-3 text-xl font-medium my-4 "
          href="/kontakta-oss"
          onClick={() => handleMenuOpen()}
        >
          <a className="cursor-pointer text-lg  font-bold pb-2">Kontakta oss</a>
        </Link>
        <div className="flex gap-2">
          <a className="cursor-pointer text-lg  font-bold pb-2">
            ??ndra till ljust/m??rkt l??ge
          </a>
          {renderThemeChanger()}
        </div>

        {/*  <Link href="/">
          <a className="pt-3 cursor-pointer flex space-x-[5px] items-center text-lg  font-bold pb-2">
            <svg
              className=" h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
              <g>
                <path d="M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12,2z" />
              </g>
            </svg>
            <p>??ndra till m??rk-/ljustl??ge</p>
          </a>
        </Link> */}
        {/* <Link href="/profil">
          <a className="cursor-pointer flex space-x-[5px] items-center text-lg text-black font-bold pb-2">
            <svg
              className="cursor-pointer h-8 w-8 "
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg>
            <p>Profil</p>
          </a>
        </Link> */}
        <Link href="/varukorg">
          <a className=" cursor-pointer flex gap-2 items-center text-lg  font-bold pb-2">
            <p>Min varukorg</p>
            <svg
              className="cursor-pointer h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#ffffff"
            >
              <g>
                <rect fill="none" height="24" width="24" />
                <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" />
              </g>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? "light" : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className=" w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav
      className={`${
        theme === "light"
          ? "bg-slate-800 text-black"
          : "bg-slate-800 text-white"
      } fixed z-50 fluid w-full text-white flex justify-between bg-slate-800 filter drop-shadow-md  px-4 py-4 h-20`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className=" flex  items-center">
        <Link href="/">
          <a>
            <span className="text-3xl font-bold text-white ">BOSS</span>
            <span className="text-3xl font-bold text-yellow-400">BABE</span>
          </a>
        </Link>
      </div>
      <div className=" flex  justify-end items-center">
        <div
          className="z-50 flex  relative w-8 h-8 flex-col  justify-between  md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
        <div className="hidden md:flex cursor-pointer text-white px-3 py-2 font-bold hover:text-yellow-400">
          <Link href="/dam">Dam</Link>
        </div>
        <div className="hidden md:flex cursor-pointer text-white  px-3 py-2 font-bold hover:text-yellow-400">
          <Link href="/herr">Herr</Link>
        </div>
        <div className="hidden md:flex cursor-pointer text-white px-3 py-2 font-bold hover:text-yellow-400">
          <Link href="/outlet">Outlet</Link>
        </div>

        <div className="hidden md:flex cursor-pointer text-white px-3 py-2 font-bold hover:text-yellow-400">
          <Link href="/kontakta-oss">Kontakta oss</Link>
        </div>
      </div>
      <div className="hidden md:flex  text-white ">
        <div className="hidden md:flex items-center">
          {renderThemeChanger()}

          {/* <Link href="/">
            <a className="px-3">
              <svg
                className="hidden md:flex  cursor-pointer  h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path d="M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12,2z" />
                </g>
              </svg>
            </a>
          </Link> */}
          {/*  <Link href="/profil">
            <a className="px-3 ">
              <svg
                className="hidden md:flex cursor-pointer h-8 w-8 "
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
              </svg>
            </a>
          </Link> */}
          <Link href="/varukorg">
            <a className="px-3 ">
              <svg
                className="hidden md:flex cursor-pointer  h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#ffffff"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                  <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" />
                </g>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
