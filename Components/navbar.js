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
                  BOSS<span className="text-blue-500">BABE</span>

                  </h1>
              </div>

            </div>
          </div>
        </div>
      
      </nav>
    </div>
  )
  
}