"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import "@fontsource/red-hat-display";
import LocaleSwitcher from "./locale-switcher";

export default function Nav({
  lang,
  endpoints,
  translations,
}: {
  lang: Locale;
  endpoints: ["practice", "about", "services", "writing"];
  translations: {
    about: string;
    practice: string;
    services: string;
    writing: string;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const currentLocale = pathName?.split("/")[2];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!event.target) return;
    if (event.target instanceof HTMLElement) {
      if (event.target.id === "mobile-nav-button") return setIsOpen(true);
      if (event.target.closest("#mobile-nav")) return;
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full flex justify-start gap-4 mb-4">
      <div aria-hidden="false" className="flex justify-center items-center">
        <Link href={`/${lang}`} className={`s4 text-black`}>
          Felipe Matamala
        </Link>
      </div>
      <button
        id="mobile-nav-button"
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A4D3FF] lg:hidden"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "transform rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mt-1.5 mb-1.5 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "transform -rotate-45" : ""
          }`}
        ></span>
      </button>

      {/* Mobile navigation menu */}

      <nav
        id="mobile-nav"
        className={`absolute transition-all duration-300 p-4 z-10 top-full left-0 mt-2 w-full bg-white opacity-[99] rounded-md shadow-lg lg:hidden border-2 border-solid border-[#A4D3FF] flex flex-col justify-center items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-around items-end">
          <ul className="flex flex-wrap s1 gap-2">
            {endpoints.map((endpoint) => {
              return (
                <li
                  key={endpoint}
                  className="block py-2 hover:bg-gray-200 active:text-red-400 grow text-center"
                >
                  <Link
                    href={`/${lang}/${endpoint}`}
                    onClick={toggleMenu}
                    className={`${
                      currentLocale === endpoint ? "active" : ""
                    } text-red   active:text-red-400 `}
                  >
                    {translations[endpoint]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <LocaleSwitcher />
      </nav>

      {/* Desktop navigation menu */}
      <nav className="hidden space-x-4 lg:flex lg:items-center">
        <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-md">
          Home
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-md">
          About
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-md">
          Services
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-md">
          Contact
        </a>
      </nav>
    </div>
  );
}
