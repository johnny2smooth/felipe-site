'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/i18n-config';
import '@fontsource/red-hat-display';

export default function Nav({
  lang,
  endpoints,
}: {
  lang: Locale;
  endpoints: string[];
}) {
  const pathName = usePathname();
  const currentLocale = pathName?.split('/')[2];
  console.log(currentLocale);
  return (
    <nav style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
      <ul className="flex flex-wrap gap-3">
        {endpoints.map((endpoint) => {
          return (
            <li key={endpoint}>
              <Link
                href={`/${lang}/${
                  endpoint === 'sobre'
                    ? 'about'
                    : endpoint === 'servicios'
                    ? 'services'
                    : endpoint === 'práctica'
                    ? 'practice'
                    : endpoint === 'escritura'
                    ? 'writing'
                    : endpoint
                }`}
                className={`${
                  currentLocale === endpoint ? 'active' : ''
                } s1 text-slate-600`}
              >
                {endpoint}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
