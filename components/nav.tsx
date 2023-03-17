'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/i18n-config';
import '@fontsource/red-hat-display';

export default function Nav({
  lang,
  endpoints,
  translations,
}: {
  lang: Locale;
  endpoints: ['practice', 'about', 'services', 'writing'];
  translations: {
    about: string;
    practice: string;
    services: string;
    writing: string;
  };
}) {
  const pathName = usePathname();
  const currentLocale = pathName?.split('/')[2];
  return (
    <nav style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
      <ul className="flex flex-wrap gap-3">
        {endpoints.map((endpoint) => {
          return (
            <li key={endpoint}>
              <Link
                href={`/${lang}/${endpoint}`}
                className={`${
                  currentLocale === endpoint ? 'active' : ''
                } s1 text-slate-600`}
              >
                {translations[endpoint]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
