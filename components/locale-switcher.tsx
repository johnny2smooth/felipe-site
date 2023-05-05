"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const currentLocale = pathName?.split("/")[1];

  return (
    <ul className="flex gap-4 items-center">
      {i18n.locales.map((locale) => {
        return (
          <li
            key={locale}
            className={`border-[#A4D3FF] border-2 border-solid p-1 font-thin text-lg leading-none ${
              currentLocale === locale ? "active" : ""
            }`}
          >
            <Link
              href={redirectedPathName(locale)}
              className={`${
                currentLocale === locale ? "active" : ""
              } text-black hover:text-red-100`}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
