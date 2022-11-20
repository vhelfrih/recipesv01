import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export default function SiteHeader() {
  const [nav, setNav] = useState(false);

  return (
    <div className="mx-w-[1640px] mx-auto flex justify-between items-center p-6">
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-orange-600"
        >
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gray-200 text-orange-600 rounded-full pl-8 pr-8 pt-2 pb-2 ml-4">
          Receptek
        </h1>
      </div>
      <div className="bg-white border border-gray-400 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] shadow-inner">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent focus:outline-none p-2 w-full"
          type="text"
          placeholder="Keresés..."
        />
      </div>

      {/* Mobile menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 w-full fixed z-10 h-screen top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-slate-900 text-orange-600 z-10 duration-300 tracking-widest"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-400"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">Heti Menü</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-200">
            <li className="text-xl py-4 flex ml-4 cursor-pointer">Hétfő</li>
            <li className="text-xl py-4 flex ml-4 cursor-pointer">Kedd</li>
            <li className="text-xl py-4 flex ml-4 cursor-pointer">Szerda</li>
            <li className="text-xl py-4 flex ml-4 cursor-pointer">Csütörtök</li>
            <li className="text-xl py-4 flex ml-4 cursor-pointer">Péntek</li>
            <li className="text-xl py-4 flex ml-4 cursor-pointer">Szombat</li>
            <li className="text-xl py-4 flex ml-4 cursor-pointer">Vasárnap</li>
            <li className="text-xl py-4 flex ml-4 cursor-pointer">
              Hozzávalók listája
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
