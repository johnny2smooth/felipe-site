import { i18n } from '@/i18n-config';
import type { Locale, LangParams } from '@/i18n-config';
import LocaleSwitcher from './locale-switcher';
import Link from 'next/link';
import { getDictionary } from '@/get-dictionary';
import './globals.css';
import metadataGenerator from '@/metadata-generator';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { lang } }: LangParams) {
  return await metadataGenerator('home', lang);
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
      <body className="stack">
        <header className="">
          <LocaleSwitcher />
          <Link href={`/${lang}`}>Felipe Matamala Home</Link>
          <nav>
            <ul>
              <li>
                <Link href={`/${lang}/practice`}>
                  {dictionary.practice.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/writing`}>
                  {dictionary.writing.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`}>
                  {dictionary.services.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`}>{dictionary.about.title}</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
