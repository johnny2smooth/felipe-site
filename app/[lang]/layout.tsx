import { i18n } from '@/i18n-config';
import type { Locale } from '@/i18n-config';
import LocaleSwitcher from './locale-switcher';
import Link from 'next/link';
import { getDictionary } from '@/get-dictionary';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body>
        <header>
          <LocaleSwitcher />
          <Link href={`/${lang}`}>Felipe Matamala Home</Link>
          <nav>
            <ul>
              <li>
                <Link href={`/${lang}/practice`}>{dictionary.practice}</Link>
              </li>
              <li>
                <Link href={`/${lang}/writing`}>{dictionary.writing}</Link>
              </li>
              <li>
                <Link href={`/${lang}/resources`}>{dictionary.resources}</Link>
              </li>
              <li>
                <Link href={`/${lang}/about`}>{dictionary.about}</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
