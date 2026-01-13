'use client'

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="sporton logo"
              width={127}
              height={30}
            />
          </div>

          <nav className="hidden md:flex gap-8 font-medium items-center">
            <Link
              href="#"
              className="relative after:content-[''] after:block after:bg-red-500 after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-1"
            >
              Home
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Category
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Explore Products
            </Link>
          </nav>

          <div className="hidden md:flex gap-6 items-center">
            <button className="hover:text-red-500 transition-colors">
              <FiSearch size={24} />
            </button>
            <button className="relative hover:text-red-500 transition-colors">
              <FiShoppingBag size={24} />
              <div className="bg-red-500 rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
                3
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

