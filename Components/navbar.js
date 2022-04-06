import Link from 'next/link'
import React from 'react'



export default function Navbar() {
  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-betweeen w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer">
                  BOSS<span className="text-yellow-400">BABE</span>

                  </h1>
              </div>
             {/*  For small and medium screens we put this in blocks */}
              <div className="hidden md:block"></div>
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about-us">
                  <a className="cursor-pointer text-black px-3 py-2 font-bold hover:text-yellow-400">About us</a>
                </Link>
                <Link href="/outlet">
                  <a className="cursor-pointer text-black px-3 py-2 font-bold hover:text-yellow-400">Outlet</a>
                </Link>
                <Link href="/shop-now">
                  <a className="cursor-pointer text-black px-3 py-2 font-bold hover:text-yellow-400">Shop now</a>
                </Link>

                {/* DARKMODE */}
                <svg className="cursor-pointer static top-8 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12,2z" /></g></svg>
                
                {/* Profile */}
                 <Link href="/profile">
                  <svg className="cursor-pointer static top-6 right-20 h-8 w-8 " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                </Link>
                {/* shopping cart */}
                  <Link href="/my-cart">
                  <svg className="cursor-pointer static top-8 right-10 h-7 w-7" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg></Link>
              
                </div>
            </div>
          </div>
        </div>
                    
      </nav>
    </div>
    
  )
  
  
}