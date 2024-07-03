"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [activeLink, setActiveLink] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const linkClassNames = (link) => {
    return activeLink === link
      ? "bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-300 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="h-8 w-8 rounded-full"
                  width={8}
                  height={8}
                  src="/luffy.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="hidden md:block ml-4">
              <div className="flex items-baseline space-x-4">
                <a
                  href="/"
                  onClick={() => handleLinkClick("/")}
                  className={linkClassNames("/")}
                >
                  Home
                </a>
                <a
                  href="/about"
                  onClick={() => handleLinkClick("/about")}
                  className={linkClassNames("/about")}
                >
                  About
                </a>
                <a
                  href="/service"
                  onClick={() => handleLinkClick("/service")}
                  className={linkClassNames("/service")}
                >
                  Services
                </a>
                <a
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className={linkClassNames("/contact")}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-end px-4 sm:px-0">
            <div className="w-full max-w-xs relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiSearch />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 border-yellow-600"
                placeholder="Search"
                required
              />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle className based on menu state */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <div className="text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </div>
          </Link>
          <Link href="#">
            <div className="text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
