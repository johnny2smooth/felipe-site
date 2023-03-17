import { i18n } from '@/i18n-config';
import type { Locale, LangParams } from '@/i18n-config';
import LocaleSwitcher from '@/components/locale-switcher';
import Link from 'next/link';
import { getDictionary } from '@/get-dictionary';
import './globals.css';
import metadataGenerator from '@/metadata-generator';
import Nav from '@/components/nav';
import '@fontsource/lora';

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
  const { practice, writing, services, about } = dictionary;
  return (
    <html lang={lang}>
      <body className="p-4 m-auto" style={{ fontFamily: '"Lora",serif' }}>
        <header className="flex pb-2 start gap-4 items-end border-gray-100 border-solid border-b-2">
          <LocaleSwitcher />
          <div
            className={`flex grow justify-end md:justify-around items-end gap-4 flex-wrap`}
          >
            <Link href={`/${lang}`} className={`s3 text-[#4969ed]`}>
              Felipe Matamala
            </Link>
            <Nav
              lang={lang}
              endpoints={[
                practice.title,
                writing.title,
                services.title,
                about.title,
              ]}
            />
          </div>
        </header>
        <main className="stack">{children}</main>
      </body>
    </html>
  );
}
