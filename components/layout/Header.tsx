
import React from "react";
import { Store } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full bg-white ">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3">
        {/* Left: Branding */}
        <Link href="/" className="flex items-center font-bold text-xl text-gray-800 hover:text-blue-600 transition-colors mb-2 sm:mb-0">
          Celfun
        </Link>

        {/* Center: Search (to be implemented later) */}
        {/**
        <form className="flex flex-1 max-w-xl mx-6">
          <input
            type="text"
            placeholder="Buscar productos, marcas..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
          >
            Buscar
          </button>
        </form>
        */}

        {/* Right: Navigation links */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="px-4 py-2 rounded-md text-gray-700 font-semibold hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Contacto
          </Link>
          <a
            href="https://www.google.com/maps/search/celfun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-black-50 text-white-700 font-semibold  hover:bg-black-100 hover:text-white-900 transition-colors"
            style={{ textDecoration: "none" }}
          >
            <Store size={22} className="lucide lucide-store" />
            Tiendas
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;


