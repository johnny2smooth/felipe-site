'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Locale } from '@/i18n-config';
import '@fontsource/red-hat-display';
import LocaleSwitcher from './locale-switcher';

export default function Nav({
  lang,
  endpoints,
  translations,
}: {
  lang: Locale;
  endpoints: ['practice', 'about', 'services'];
  translations: {
    about: string;
    practice: string;
    services: string;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const currentPath = pathName?.split('/')[2];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!event.target) return;
    if (event.target instanceof HTMLElement) {
      if (event.target.id === 'mobile-nav-button') return setIsOpen(true);
      if (event.target.closest('#mobile-nav')) return;
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full flex justify-start gap-4 mb-4">
      <div aria-hidden="false" className="flex justify-start items-center grow">
        <Link href={`/${lang}`} className={`s3 text-black`}>
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
            isOpen ? 'transform rotate-45' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mt-1.5 mb-1.5 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? 'transform -rotate-45' : ''
          }`}
        ></span>
      </button>

      {/* Mobile navigation menu */}

      <nav
        id="mobile-nav"
        className={`absolute transition-all duration-300 p-4 z-10 top-full left-0 mt-2 w-full bg-white opacity-[99] rounded-md shadow-lg lg:hidden border-2 border-solid border-[#A4D3FF] flex flex-col justify-end items-end ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col s2 gap-4 items-end font-thin">
          {endpoints.map((endpoint) => {
            return (
              <li
                key={endpoint}
                className="block py-2 hover:bg-gray-200 active:text-red-400 grow text-center "
              >
                <Link
                  href={`/${lang}/${endpoint}`}
                  onClick={toggleMenu}
                  className={`${
                    currentPath === endpoint
                      ? 'border-[#A4D3FF]'
                      : 'border-white'
                  } text-red px-2 py-2 border-solid border-2 active:text-red-400 `}
                >
                  {translations[endpoint]}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="self-start">
          <LocaleSwitcher />
        </div>
      </nav>

      <nav className="hidden space-x-4 lg:flex lg:items-center text-2xl font-thin items-baseline">
        {endpoints.map((endpoint) => {
          return (
            <Link
              key={endpoint}
              href={`/${lang}/${endpoint}`}
              onClick={toggleMenu}
              className={`${
                currentPath === endpoint ? 'border-[#A4D3FF] ' : 'border-white'
              } text-red px-1 py-1 border-solid border-2 active:text-red-400 `}
            >
              {translations[endpoint]}
            </Link>
          );
        })}

        <LocaleSwitcher />
      </nav>
    </div>
  );
}
